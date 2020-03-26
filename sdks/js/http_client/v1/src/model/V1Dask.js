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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * OpenAPI spec version: 1.0.6
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.10
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Container', 'model/V1Environment', 'model/V1Init', 'model/V1Volume'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Container'), require('./V1Environment'), require('./V1Init'), require('./V1Volume'));
  } else {
    // Browser globals (root is window)
    if (!root.PolyaxonSdk) {
      root.PolyaxonSdk = {};
    }
    root.PolyaxonSdk.V1Dask = factory(root.PolyaxonSdk.ApiClient, root.PolyaxonSdk.V1Container, root.PolyaxonSdk.V1Environment, root.PolyaxonSdk.V1Init, root.PolyaxonSdk.V1Volume);
  }
}(this, function(ApiClient, V1Container, V1Environment, V1Init, V1Volume) {
  'use strict';

  /**
   * The V1Dask model module.
   * @module model/V1Dask
   * @version 1.0.6
   */

  /**
   * Constructs a new <code>V1Dask</code>.
   * @alias module:model/V1Dask
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>V1Dask</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Dask} obj Optional instance to populate.
   * @return {module:model/V1Dask} The populated <code>V1Dask</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('kind'))
        obj.kind = ApiClient.convertToType(data['kind'], 'String');
      if (data.hasOwnProperty('scale'))
        obj.scale = ApiClient.convertToType(data['scale'], 'Number');
      if (data.hasOwnProperty('adapt_min'))
        obj.adapt_min = ApiClient.convertToType(data['adapt_min'], 'Number');
      if (data.hasOwnProperty('adapt_max'))
        obj.adapt_max = ApiClient.convertToType(data['adapt_max'], 'Number');
      if (data.hasOwnProperty('adapt_interval'))
        obj.adapt_interval = ApiClient.convertToType(data['adapt_interval'], 'String');
      if (data.hasOwnProperty('environment'))
        obj.environment = V1Environment.constructFromObject(data['environment']);
      if (data.hasOwnProperty('connections'))
        obj.connections = ApiClient.convertToType(data['connections'], ['String']);
      if (data.hasOwnProperty('volumes'))
        obj.volumes = ApiClient.convertToType(data['volumes'], [V1Volume]);
      if (data.hasOwnProperty('init'))
        obj.init = ApiClient.convertToType(data['init'], [V1Init]);
      if (data.hasOwnProperty('sidecars'))
        obj.sidecars = ApiClient.convertToType(data['sidecars'], [V1Container]);
      if (data.hasOwnProperty('container'))
        obj.container = V1Container.constructFromObject(data['container']);
    }
    return obj;
  }

  /**
   * @member {String} kind
   * @default 'dask'
   */
  exports.prototype.kind = 'dask';

  /**
   * @member {Number} scale
   */
  exports.prototype.scale = undefined;

  /**
   * @member {Number} adapt_min
   */
  exports.prototype.adapt_min = undefined;

  /**
   * @member {Number} adapt_max
   */
  exports.prototype.adapt_max = undefined;

  /**
   * @member {String} adapt_interval
   */
  exports.prototype.adapt_interval = undefined;

  /**
   * @member {module:model/V1Environment} environment
   */
  exports.prototype.environment = undefined;

  /**
   * @member {Array.<String>} connections
   */
  exports.prototype.connections = undefined;

  /**
   * Volumes is a list of volumes that can be mounted.
   * @member {Array.<module:model/V1Volume>} volumes
   */
  exports.prototype.volumes = undefined;

  /**
   * @member {Array.<module:model/V1Init>} init
   */
  exports.prototype.init = undefined;

  /**
   * @member {Array.<module:model/V1Container>} sidecars
   */
  exports.prototype.sidecars = undefined;

  /**
   * @member {module:model/V1Container} container
   */
  exports.prototype.container = undefined;

  return exports;

}));
