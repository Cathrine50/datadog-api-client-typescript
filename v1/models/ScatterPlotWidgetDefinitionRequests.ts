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

import { ScatterPlotRequest } from './ScatterPlotRequest';
import { HttpFile } from '../http/http';

/**
* Widget definition.
*/
export class ScatterPlotWidgetDefinitionRequests {
    'x': ScatterPlotRequest;
    'y': ScatterPlotRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "x",
            "baseName": "x",
            "type": "ScatterPlotRequest",
            "format": ""
        },
        {
            "name": "y",
            "baseName": "y",
            "type": "ScatterPlotRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ScatterPlotWidgetDefinitionRequests.attributeTypeMap;
    }
    
    public constructor() {
    }
}

