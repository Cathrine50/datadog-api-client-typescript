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
* The log-based metric filter. Logs matching this filter will be aggregated in this metric.
*/
export class LogsMetricResponseFilter {
    /**
    * The search query - following the log search syntax.
    */
    'query'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsMetricResponseFilter.attributeTypeMap;
    }
    
    public constructor() {
    }
}

