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

import { User } from './User';
import { UserAttributes } from './UserAttributes';
import { UserResponseRelationships } from './UserResponseRelationships';
import { UsersType } from './UsersType';
import { HttpFile } from '../http/http';

/**
* An object related to an API key.
*/
export class APIKeyResponseIncludedItem {
    'attributes'?: UserAttributes;
    /**
    * ID of the user.
    */
    'id'?: string;
    'relationships'?: UserResponseRelationships;
    'type'?: UsersType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "UserAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "UserResponseRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "UsersType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return APIKeyResponseIncludedItem.attributeTypeMap;
    }
    
    public constructor() {
    }
}

