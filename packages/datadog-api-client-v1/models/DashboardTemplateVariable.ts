/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Template variable.
*/
export class DashboardTemplateVariable {
    /**
    * The default value for the template variable on dashboard load.
    */
    '_default'?: string;
    /**
    * The name of the variable.
    */
    'name': string;
    /**
    * The tag prefix associated with the variable. Only tags with this prefix appear in the variable drop-down.
    */
    'prefix'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_default",
            "baseName": "default",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "prefix",
            "baseName": "prefix",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DashboardTemplateVariable.attributeTypeMap;
    }
    
    public constructor() {
    }
}

