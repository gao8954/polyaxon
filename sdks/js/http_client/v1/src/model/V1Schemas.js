// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.1.5-rc0
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import V1ArtifactsMount from './V1ArtifactsMount';
import V1ArtifactsType from './V1ArtifactsType';
import V1AuthType from './V1AuthType';
import V1CompiledOperation from './V1CompiledOperation';
import V1ConnectionSchema from './V1ConnectionSchema';
import V1ConnectionType from './V1ConnectionType';
import V1DockerfileType from './V1DockerfileType';
import V1EarlyStopping from './V1EarlyStopping';
import V1Event from './V1Event';
import V1EventType from './V1EventType';
import V1GcsType from './V1GcsType';
import V1GitType from './V1GitType';
import V1HpParams from './V1HpParams';
import V1ImageType from './V1ImageType';
import V1K8sResourceType from './V1K8sResourceType';
import V1Matrix from './V1Matrix';
import V1MatrixKind from './V1MatrixKind';
import V1Operation from './V1Operation';
import V1OperationCond from './V1OperationCond';
import V1PolyaxonInitContainer from './V1PolyaxonInitContainer';
import V1PolyaxonSidecarContainer from './V1PolyaxonSidecarContainer';
import V1Reference from './V1Reference';
import V1RunSchema from './V1RunSchema';
import V1S3Type from './V1S3Type';
import V1Schedule from './V1Schedule';
import V1UriType from './V1UriType';
import V1WasbType from './V1WasbType';

/**
 * The V1Schemas model module.
 * @module model/V1Schemas
 * @version 1.1.5-rc0
 */
class V1Schemas {
    /**
     * Constructs a new <code>V1Schemas</code>.
     * @alias module:model/V1Schemas
     */
    constructor() { 
        
        V1Schemas.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Schemas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Schemas} obj Optional instance to populate.
     * @return {module:model/V1Schemas} The populated <code>V1Schemas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Schemas();

            if (data.hasOwnProperty('operation_cond')) {
                obj['operation_cond'] = V1OperationCond.constructFromObject(data['operation_cond']);
            }
            if (data.hasOwnProperty('early_stopping')) {
                obj['early_stopping'] = V1EarlyStopping.constructFromObject(data['early_stopping']);
            }
            if (data.hasOwnProperty('matrix')) {
                obj['matrix'] = V1Matrix.constructFromObject(data['matrix']);
            }
            if (data.hasOwnProperty('run')) {
                obj['run'] = V1RunSchema.constructFromObject(data['run']);
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = V1Operation.constructFromObject(data['operation']);
            }
            if (data.hasOwnProperty('compiled_operation')) {
                obj['compiled_operation'] = V1CompiledOperation.constructFromObject(data['compiled_operation']);
            }
            if (data.hasOwnProperty('schedule')) {
                obj['schedule'] = V1Schedule.constructFromObject(data['schedule']);
            }
            if (data.hasOwnProperty('connection_schema')) {
                obj['connection_schema'] = V1ConnectionSchema.constructFromObject(data['connection_schema']);
            }
            if (data.hasOwnProperty('hp_params')) {
                obj['hp_params'] = V1HpParams.constructFromObject(data['hp_params']);
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = V1Reference.constructFromObject(data['reference']);
            }
            if (data.hasOwnProperty('artifacts_mount')) {
                obj['artifacts_mount'] = V1ArtifactsMount.constructFromObject(data['artifacts_mount']);
            }
            if (data.hasOwnProperty('polyaxon_sidecar_container')) {
                obj['polyaxon_sidecar_container'] = V1PolyaxonSidecarContainer.constructFromObject(data['polyaxon_sidecar_container']);
            }
            if (data.hasOwnProperty('polyaxon_init_container')) {
                obj['polyaxon_init_container'] = V1PolyaxonInitContainer.constructFromObject(data['polyaxon_init_container']);
            }
            if (data.hasOwnProperty('artifacs')) {
                obj['artifacs'] = V1ArtifactsType.constructFromObject(data['artifacs']);
            }
            if (data.hasOwnProperty('wasb')) {
                obj['wasb'] = V1WasbType.constructFromObject(data['wasb']);
            }
            if (data.hasOwnProperty('gcs')) {
                obj['gcs'] = V1GcsType.constructFromObject(data['gcs']);
            }
            if (data.hasOwnProperty('s3')) {
                obj['s3'] = V1S3Type.constructFromObject(data['s3']);
            }
            if (data.hasOwnProperty('autg')) {
                obj['autg'] = V1AuthType.constructFromObject(data['autg']);
            }
            if (data.hasOwnProperty('dockerfile')) {
                obj['dockerfile'] = V1DockerfileType.constructFromObject(data['dockerfile']);
            }
            if (data.hasOwnProperty('git')) {
                obj['git'] = V1GitType.constructFromObject(data['git']);
            }
            if (data.hasOwnProperty('uri')) {
                obj['uri'] = V1UriType.constructFromObject(data['uri']);
            }
            if (data.hasOwnProperty('k8s_resource')) {
                obj['k8s_resource'] = V1K8sResourceType.constructFromObject(data['k8s_resource']);
            }
            if (data.hasOwnProperty('connection')) {
                obj['connection'] = V1ConnectionType.constructFromObject(data['connection']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = V1ImageType.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('event_type')) {
                obj['event_type'] = V1EventType.constructFromObject(data['event_type']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = V1Event.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('matrix_kind')) {
                obj['matrix_kind'] = V1MatrixKind.constructFromObject(data['matrix_kind']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1OperationCond} operation_cond
 */
V1Schemas.prototype['operation_cond'] = undefined;

/**
 * @member {module:model/V1EarlyStopping} early_stopping
 */
V1Schemas.prototype['early_stopping'] = undefined;

/**
 * @member {module:model/V1Matrix} matrix
 */
V1Schemas.prototype['matrix'] = undefined;

/**
 * @member {module:model/V1RunSchema} run
 */
V1Schemas.prototype['run'] = undefined;

/**
 * @member {module:model/V1Operation} operation
 */
V1Schemas.prototype['operation'] = undefined;

/**
 * @member {module:model/V1CompiledOperation} compiled_operation
 */
V1Schemas.prototype['compiled_operation'] = undefined;

/**
 * @member {module:model/V1Schedule} schedule
 */
V1Schemas.prototype['schedule'] = undefined;

/**
 * @member {module:model/V1ConnectionSchema} connection_schema
 */
V1Schemas.prototype['connection_schema'] = undefined;

/**
 * @member {module:model/V1HpParams} hp_params
 */
V1Schemas.prototype['hp_params'] = undefined;

/**
 * @member {module:model/V1Reference} reference
 */
V1Schemas.prototype['reference'] = undefined;

/**
 * @member {module:model/V1ArtifactsMount} artifacts_mount
 */
V1Schemas.prototype['artifacts_mount'] = undefined;

/**
 * @member {module:model/V1PolyaxonSidecarContainer} polyaxon_sidecar_container
 */
V1Schemas.prototype['polyaxon_sidecar_container'] = undefined;

/**
 * @member {module:model/V1PolyaxonInitContainer} polyaxon_init_container
 */
V1Schemas.prototype['polyaxon_init_container'] = undefined;

/**
 * @member {module:model/V1ArtifactsType} artifacs
 */
V1Schemas.prototype['artifacs'] = undefined;

/**
 * @member {module:model/V1WasbType} wasb
 */
V1Schemas.prototype['wasb'] = undefined;

/**
 * @member {module:model/V1GcsType} gcs
 */
V1Schemas.prototype['gcs'] = undefined;

/**
 * @member {module:model/V1S3Type} s3
 */
V1Schemas.prototype['s3'] = undefined;

/**
 * @member {module:model/V1AuthType} autg
 */
V1Schemas.prototype['autg'] = undefined;

/**
 * @member {module:model/V1DockerfileType} dockerfile
 */
V1Schemas.prototype['dockerfile'] = undefined;

/**
 * @member {module:model/V1GitType} git
 */
V1Schemas.prototype['git'] = undefined;

/**
 * @member {module:model/V1UriType} uri
 */
V1Schemas.prototype['uri'] = undefined;

/**
 * @member {module:model/V1K8sResourceType} k8s_resource
 */
V1Schemas.prototype['k8s_resource'] = undefined;

/**
 * @member {module:model/V1ConnectionType} connection
 */
V1Schemas.prototype['connection'] = undefined;

/**
 * @member {module:model/V1ImageType} image
 */
V1Schemas.prototype['image'] = undefined;

/**
 * @member {module:model/V1EventType} event_type
 */
V1Schemas.prototype['event_type'] = undefined;

/**
 * @member {module:model/V1Event} event
 */
V1Schemas.prototype['event'] = undefined;

/**
 * @member {module:model/V1MatrixKind} matrix_kind
 */
V1Schemas.prototype['matrix_kind'] = undefined;






export default V1Schemas;

