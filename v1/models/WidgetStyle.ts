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
* Widget style definition.
*/
export class WidgetStyle {
    /**
    * Color palette to apply to the widget.
    */
    'palette'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "palette",
            "baseName": "palette",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return WidgetStyle.attributeTypeMap;
    }
    
    public constructor() {
    }
}

