/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Permission } from './Permission';
import { HttpFile } from '../http/http';

/**
* Payload with API-returned permissions.
*/
export class PermissionsResponse {
    /**
    * Array of permissions.
    */
    'data'?: Array<Permission>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<Permission>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PermissionsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

