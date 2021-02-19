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

import { RoleUpdateAttributes } from './RoleUpdateAttributes';
import { RolesType } from './RolesType';
import { HttpFile } from '../http/http';

/**
* Data related to the update of a role.
*/
export class RoleUpdateData {
    'attributes': RoleUpdateAttributes;
    /**
    * ID of the role.
    */
    'id': string;
    'type': RolesType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "RoleUpdateAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RolesType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoleUpdateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

