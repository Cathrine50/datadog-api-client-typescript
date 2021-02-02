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

import { LogsMetricCreateAttributes } from './LogsMetricCreateAttributes';
import { LogsMetricType } from './LogsMetricType';
import { HttpFile } from '../http/http';

/**
* The new log-based metric properties.
*/
export class LogsMetricCreateData {
    'attributes': LogsMetricCreateAttributes;
    /**
    * The name of the log-based metric.
    */
    'id': string;
    'type': LogsMetricType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "LogsMetricCreateAttributes",
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
            "type": "LogsMetricType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsMetricCreateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

