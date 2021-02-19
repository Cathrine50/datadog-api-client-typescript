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

import { SyntheticsAPITestResultShort } from './SyntheticsAPITestResultShort';
import { HttpFile } from '../http/http';

/**
* Object with the latest Synthetic API test run.
*/
export class SyntheticsGetAPITestLatestResultsResponse {
    /**
    * Timestamp of the latest API test run.
    */
    'lastTimestampFetched'?: number;
    /**
    * Result of the latest API test run.
    */
    'results'?: Array<SyntheticsAPITestResultShort>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lastTimestampFetched",
            "baseName": "last_timestamp_fetched",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SyntheticsAPITestResultShort>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsGetAPITestLatestResultsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

