# -*- coding: utf-8 -*-
from __future__ import absolute_import, division, print_function

import asyncio
import logging

from django.core.exceptions import ValidationError

from sanic import Sanic

from websockets import ConnectionClosed

from api.config_settings.celery_settings import RoutingKeys, CeleryQueues
from events.authentication import authorized
from events.consumers import Consumer
from events.socket_manager import SocketManager
from experiments.models import ExperimentJob, Experiment
from libs.redis_db import RedisToStream

logger = logging.getLogger('polyaxon.monitors.api')

SOCKET_SLEEP = 1

app = Sanic(__name__)


def _get_job(job_uuid):
    try:
        job = ExperimentJob.objects.get(uuid=job_uuid)
    except (ExperimentJob.DoesNotExist, ValidationError):
        logger.info('Job with uuid `{}` does not exist'.format(job_uuid))
        return None

    if not job.is_running:
        logger.info('Job with uuid `{}` is not currently running'.format(job_uuid))
        return None

    return job


def _get_experiment(experiment_uuid):
    try:
        experiment = Experiment.objects.get(uuid=experiment_uuid)
    except (Experiment.DoesNotExist, ValidationError):
        logger.info('Experiment with uuid `{}` does not exist'.format(experiment_uuid))
        return None

    if not experiment.is_running:
        logger.info('Experiment with uuid `{}` is not currently running'.format(experiment_uuid))
        return None

    return experiment


def handle_disconnected_ws(ws_manager, ws, job_uuid):
    ws_manager.remove_sockets(ws)
    if len(ws_manager.ws) == 0:
        RedisToStream.remove_job_resources(job_uuid=job_uuid)
        logger.info('Stopping resources monitor for uuid {}'.format(job_uuid))

    logger.info('Quitting resources socket for uuid {}'.format(job_uuid))


@app.websocket('/ws/v1/resources/job/<job_uuid>')
@authorized()
async def job_resources(request, ws, job_uuid):
    job = _get_job(job_uuid=job_uuid)

    if job is None:
        return

    if not RedisToStream.is_monitored_job_resources(job_uuid=job_uuid):
        logger.info(
            'Job resources with uuid `{}` is now being monitored'.format(job_uuid))
        RedisToStream.monitor_job_resources(job_uuid=job_uuid)

    ws_manager = request.app.job_resources_ws_manger
    ws_manager.add_socket(ws)
    while True:
        resources = RedisToStream.get_latest_job_resources(job_uuid)
        if resources:
            try:
                await ws.send(resources)
            except ConnectionClosed:
                handle_disconnected_ws(ws_manager, ws, job_uuid)
                return

        # Just to check if connection closed
        try:
            await ws.recv()
        except ConnectionClosed:
            handle_disconnected_ws(ws_manager, ws, job_uuid)
            return
        await asyncio.sleep(SOCKET_SLEEP)


@app.websocket('/ws/v1/resources/experiment/<experiment_uuid>')
@authorized()
async def experiment_resources(request, ws, experiment_uuid):
    experiment = _get_experiment(experiment_uuid=experiment_uuid)

    if experiment is None:
        return

    if not RedisToStream.is_monitored_experiment_resources(experiment_uuid=experiment_uuid):
        logger.info(
            'Experiment resource with uuid `{}` is now being monitored'.format(experiment_uuid))
        RedisToStream.monitor_experiment_resources(experiment_uuid=experiment_uuid)

    job_uuids = [job_uuid.hex for job_uuid in experiment.jobs.values_list('uuid', flat=True)]
    ws_manager = request.app.experiment_resources_ws_manger
    ws_manager.add_socket(ws)
    while True:
        resources = RedisToStream.get_latest_experiment_resources(job_uuids)
        if resources:
            try:
                await ws.send(resources)
            except ConnectionClosed:
                handle_disconnected_ws(ws_manager, ws, experiment_uuid)
                return

        # Just to check if connection closed
        try:
            await ws.recv()
        except ConnectionClosed:
            handle_disconnected_ws(ws_manager, ws, experiment_uuid)
            return
        await asyncio.sleep(SOCKET_SLEEP)


@app.websocket('/ws/v1/logs/job/<job_uuid>')
@authorized()
async def job_logs(request, ws, job_uuid):
    job = _get_job(job_uuid=job_uuid)

    if job is None:
        return

    if not RedisToStream.is_monitored_job_logs(job_uuid=job_uuid):
        logger.info('Job uuid `{}` logs is now being monitored'.format(job_uuid))
        RedisToStream.monitor_job_logs(job_uuid=job_uuid)

    # start consumer
    if request.app.job_logs_consumer is None:
        logger.info('Add job log consumer for {}'.format(job_uuid))
        request.app.job_logs_consumer = Consumer(
            routing_key='{}.{}.{}'.format(RoutingKeys.LOGS_SIDECARS,
                                          job.experiment.uuid.hex,
                                          job_uuid),
            queue='{}.{}'.format(CeleryQueues.STREAM_LOGS_SIDECARS, job_uuid))
        request.app.job_logs_consumer.run()

    # add socket manager
    request.app.job_logs_consumer.add_socket(ws)
    should_quite = False
    while True:
        for message in request.app.job_logs_consumer.get_messages():
            disconnected_ws = set()
            for _ws in request.app.job_logs_consumer.ws:
                try:
                    await _ws.send(message)
                except ConnectionClosed:
                    disconnected_ws.add(_ws)
            request.app.job_logs_consumer.remove_sockets(disconnected_ws)

        # Just to check if connection closed
        try:
            await ws.recv()
        except ConnectionClosed:
            logger.info('Quitting logs socket for job uuid {}'.format(job_uuid))
            request.app.job_logs_consumer.remove_sockets({ws, })
            should_quite = True

        if len(request.app.job_logs_consumer.ws) == 0:
            RedisToStream.remove_job_logs(job_uuid=job_uuid)
            logger.info('Stopping logs monitor for job uuid {}'.format(job_uuid))
            should_quite = True

        if should_quite:
            return

        await asyncio.sleep(SOCKET_SLEEP)


@app.websocket('/ws/v1/logs/experiment/<experiment_uuid>')
@authorized()
async def experiment_logs(request, ws, experiment_uuid):
    experiment = _get_experiment(experiment_uuid=experiment_uuid)

    if experiment is None:
        return

    if not RedisToStream.is_monitored_experiment_logs(experiment_uuid=experiment_uuid):
        logger.info('Experiment uuid `{}` logs is now being monitored'.format(experiment_uuid))
        RedisToStream.monitor_experiment_logs(experiment_uuid=experiment_uuid)

    # start consumer
    if request.app.experiment_logs_consumer is None:
        logger.info('Add experiment log consumer for {}'.format(experiment_uuid))
        request.app.experiment_logs_consumer = Consumer(
            routing_key='{}.{}.*'.format(RoutingKeys.LOGS_SIDECARS,
                                         experiment.uuid.hex),
            queue='{}.{}'.format(CeleryQueues.STREAM_LOGS_SIDECARS, experiment_uuid))
        request.app.experiment_logs_consumer.run()

    # add socket manager
    request.app.experiment_logs_consumer.add_socket(ws)
    should_quite = False
    while True:
        for message in request.app.experiment_logs_consumer.get_messages():
            disconnected_ws = set()
            for _ws in request.app.experiment_logs_consumer.ws:
                try:
                    await _ws.send(message)
                except ConnectionClosed:
                    disconnected_ws.add(_ws)
            request.app.experiment_logs_consumer.remove_sockets(disconnected_ws)

        # Just to check if connection closed
        try:
            await ws.recv()
        except ConnectionClosed:
            logger.info('Quitting logs socket for experiment uuid {}'.format(experiment_uuid))
            request.app.experiment_logs_consumer.remove_sockets({ws, })
            should_quite = True

        if len(request.app.experiment_logs_consumer.ws) == 0:
            RedisToStream.remove_experiment_logs(experiment_uuid=experiment_uuid)
            logger.info('Stopping logs monitor for experiment uuid {}'.format(experiment_uuid))
            should_quite = True

        if should_quite:
            return

        await asyncio.sleep(SOCKET_SLEEP)


@app.listener('after_server_start')
async def notify_server_started(app, loop):
    app.job_resources_ws_manger = SocketManager()
    app.experiment_resources_ws_manger = SocketManager()
    app.job_logs_consumer = None
    app.experiment_logs_consumer = None


@app.listener('after_server_stop')
async def notifiy_server_stoped(app, loop):
    del app.job_resources_ws_manger
    del app.experiment_resources_ws_manger
    if app.job_logs_consumer:
        app.job_logs_consumer.stop()
    if app.experiment_logs_consumer:
        app.experiment_logs_consumer.stop()
