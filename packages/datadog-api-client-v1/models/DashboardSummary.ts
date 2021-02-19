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

import { DashboardSummaryDefinition } from './DashboardSummaryDefinition';
import { HttpFile } from '../http/http';

/**
* Dashboard summary response.
*/
export class DashboardSummary {
    /**
    * List of dashboard definitions.
    */
    'dashboards'?: Array<DashboardSummaryDefinition>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dashboards",
            "baseName": "dashboards",
            "type": "Array<DashboardSummaryDefinition>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DashboardSummary.attributeTypeMap;
    }
    
    public constructor() {
    }
}

