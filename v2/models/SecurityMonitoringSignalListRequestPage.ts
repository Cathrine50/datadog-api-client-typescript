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
* The paging attributes for listing security signals.
*/
export class SecurityMonitoringSignalListRequestPage {
    /**
    * A list of results using the cursor provided in the previous query.
    */
    'cursor'?: string;
    /**
    * The maximum number of security signals in the response.
    */
    'limit'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cursor",
            "baseName": "cursor",
            "type": "string",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequestPage.attributeTypeMap;
    }
    
    public constructor() {
    }
}

