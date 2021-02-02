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
* The object containing page total count.
*/
export class UsageCustomReportsPage {
    /**
    * Total page count.
    */
    'totalCount'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return UsageCustomReportsPage.attributeTypeMap;
    }
    
    public constructor() {
    }
}

