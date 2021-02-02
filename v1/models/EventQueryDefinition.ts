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
* The event query.
*/
export class EventQueryDefinition {
    /**
    * The query being made on the event.
    */
    'search': string;
    /**
    * The execution method for multi-value filters. Can be either and or or.
    */
    'tagsExecution': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "search",
            "baseName": "search",
            "type": "string",
            "format": ""
        },
        {
            "name": "tagsExecution",
            "baseName": "tags_execution",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventQueryDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

