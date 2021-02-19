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

import { HttpFile } from '../http/http';

/**
* The object containing all signal attributes and their associated values.
*/
export class SecurityMonitoringSignalAttributes {
    /**
    * A JSON object of attributes in the security signal.
    */
    'attributes'?: { [key: string]: Object; };
    /**
    * The message in the security signal defined by the rule that generated the signal.
    */
    'message'?: string;
    /**
    * An array of tags associated with the security signal.
    */
    'tags'?: Array<Object>;
    /**
    * The timestamp of the security signal.
    */
    'timestamp'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: Object; }",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Object>",
            "format": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringSignalAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}

