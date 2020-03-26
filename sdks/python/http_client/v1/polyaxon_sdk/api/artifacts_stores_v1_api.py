#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    OpenAPI spec version: 1.0.6
    Contact: contact@polyaxon.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from polyaxon_sdk.api_client import ApiClient


class ArtifactsStoresV1Api(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def upload_artifact(self, owner, uuid, uploadfile, **kwargs):  # noqa: E501
        """Upload artifact to a store  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.upload_artifact(owner, uuid, uploadfile, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str owner: Owner of the namespace (required)
        :param str uuid: Unique integer identifier of the entity (required)
        :param file uploadfile: The file to upload. (required)
        :param str path: File path query params.
        :param bool overwrite: File path query params.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs["_return_http_data_only"] = True
        if kwargs.get("async_req"):
            return self.upload_artifact_with_http_info(
                owner, uuid, uploadfile, **kwargs
            )  # noqa: E501
        else:
            (data) = self.upload_artifact_with_http_info(
                owner, uuid, uploadfile, **kwargs
            )  # noqa: E501
            return data

    def upload_artifact_with_http_info(
        self, owner, uuid, uploadfile, **kwargs
    ):  # noqa: E501
        """Upload artifact to a store  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.upload_artifact_with_http_info(owner, uuid, uploadfile, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str owner: Owner of the namespace (required)
        :param str uuid: Unique integer identifier of the entity (required)
        :param file uploadfile: The file to upload. (required)
        :param str path: File path query params.
        :param bool overwrite: File path query params.
        :return: None
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ["owner", "uuid", "uploadfile", "path", "overwrite"]  # noqa: E501
        all_params.append("async_req")
        all_params.append("_return_http_data_only")
        all_params.append("_preload_content")
        all_params.append("_request_timeout")

        params = locals()
        for key, val in six.iteritems(params["kwargs"]):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method upload_artifact" % key
                )
            params[key] = val
        del params["kwargs"]
        # verify the required parameter 'owner' is set
        if "owner" not in params or params["owner"] is None:
            raise ValueError(
                "Missing the required parameter `owner` when calling `upload_artifact`"
            )  # noqa: E501
        # verify the required parameter 'uuid' is set
        if "uuid" not in params or params["uuid"] is None:
            raise ValueError(
                "Missing the required parameter `uuid` when calling `upload_artifact`"
            )  # noqa: E501
        # verify the required parameter 'uploadfile' is set
        if "uploadfile" not in params or params["uploadfile"] is None:
            raise ValueError(
                "Missing the required parameter `uploadfile` when calling `upload_artifact`"
            )  # noqa: E501

        collection_formats = {}

        path_params = {}
        if "owner" in params:
            path_params["owner"] = params["owner"]  # noqa: E501
        if "uuid" in params:
            path_params["uuid"] = params["uuid"]  # noqa: E501

        query_params = []
        if "path" in params:
            query_params.append(("path", params["path"]))  # noqa: E501
        if "overwrite" in params:
            query_params.append(("overwrite", params["overwrite"]))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}
        if "uploadfile" in params:
            local_var_files["uploadfile"] = params["uploadfile"]  # noqa: E501

        body_params = None
        # HTTP header `Accept`
        header_params["Accept"] = self.api_client.select_header_accept(
            ["application/json"]
        )  # noqa: E501

        # HTTP header `Content-Type`
        header_params[
            "Content-Type"
        ] = self.api_client.select_header_content_type(  # noqa: E501
            ["multipart/form-data"]
        )  # noqa: E501

        # Authentication setting
        auth_settings = ["ApiKey"]  # noqa: E501

        return self.api_client.call_api(
            "/api/v1/catalogs/{owner}/artifacts/{uuid}/upload",
            "POST",
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type=None,  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get("async_req"),
            _return_http_data_only=params.get("_return_http_data_only"),
            _preload_content=params.get("_preload_content", True),
            _request_timeout=params.get("_request_timeout"),
            collection_formats=collection_formats,
        )
