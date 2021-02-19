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

import { UsageCustomReportsData } from './UsageCustomReportsData';
import { UsageCustomReportsMeta } from './UsageCustomReportsMeta';
import { HttpFile } from '../http/http';

/**
* Response containing available custom reports.
*/
export class UsageCustomReportsResponse {
    /**
    * An array of available custom reports.
    */
    'data'?: Array<UsageCustomReportsData>;
    'meta'?: UsageCustomReportsMeta;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<UsageCustomReportsData>",
            "format": ""
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "UsageCustomReportsMeta",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UsageCustomReportsResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

