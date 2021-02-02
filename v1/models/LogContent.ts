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
* JSON object containing all log attributes and their associated values.
*/
export class LogContent {
    /**
    * JSON object of attributes from your log.
    */
    'attributes'?: { [key: string]: Object; };
    /**
    * Name of the machine from where the logs are being sent.
    */
    'host'?: string;
    /**
    * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes) of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry. That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
    */
    'message'?: string;
    /**
    * The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products.
    */
    'service'?: string;
    /**
    * Array of tags associated with your log.
    */
    'tags'?: Array<Object>;
    /**
    * Timestamp of your log.
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
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
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
        return LogContent.attributeTypeMap;
    }
    
    public constructor() {
    }
}

