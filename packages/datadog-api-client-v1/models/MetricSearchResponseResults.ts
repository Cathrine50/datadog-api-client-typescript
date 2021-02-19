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
* Search result.
*/
export class MetricSearchResponseResults {
    /**
    * List of metrics that match the search query.
    */
    'metrics'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricSearchResponseResults.attributeTypeMap;
    }
    
    public constructor() {
    }
}

