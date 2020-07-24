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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
import {
    V1SearchSpec,
    V1SearchSpecFromJSON,
    V1SearchSpecFromJSONTyped,
    V1SearchSpecToJSON,
} from './';

/**
 * 
 * @export
 * @interface V1Search
 */
export interface V1Search {
    /**
     * 
     * @type {string}
     * @memberof V1Search
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Search
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1Search
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1Search
     */
    tags?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof V1Search
     */
    disabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1Search
     */
    deleted?: boolean;
    /**
     * 
     * @type {V1SearchSpec}
     * @memberof V1Search
     */
    spec?: V1SearchSpec;
    /**
     * 
     * @type {Date}
     * @memberof V1Search
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1Search
     */
    updated_at?: Date;
}

export function V1SearchFromJSON(json: any): V1Search {
    return V1SearchFromJSONTyped(json, false);
}

export function V1SearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1Search {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'spec': !exists(json, 'spec') ? undefined : V1SearchSpecFromJSON(json['spec']),
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function V1SearchToJSON(value?: V1Search | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'disabled': value.disabled,
        'deleted': value.deleted,
        'spec': V1SearchSpecToJSON(value.spec),
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
    };
}


