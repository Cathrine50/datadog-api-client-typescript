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

import { ChangeWidgetDefinitionType } from './ChangeWidgetDefinitionType';
import { ChangeWidgetRequest } from './ChangeWidgetRequest';
import { WidgetCustomLink } from './WidgetCustomLink';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
import { HttpFile } from '../http/http';

/**
* The Change graph shows you the change in a value over the time period chosen.
*/
export class ChangeWidgetDefinition {
    /**
    * List of custom links.
    */
    'customLinks'?: Array<WidgetCustomLink>;
    /**
    * Array of one request object to display in the widget.  See the dedicated [Request JSON schema documentation](https://docs.datadoghq.com/dashboards/graphing_json/request_json)  to learn how to build the `REQUEST_SCHEMA`.
    */
    'requests': Array<ChangeWidgetRequest>;
    'time'?: WidgetTime;
    /**
    * Title of the widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': ChangeWidgetDefinitionType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customLinks",
            "baseName": "custom_links",
            "type": "Array<WidgetCustomLink>",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "Array<ChangeWidgetRequest>",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "WidgetTime",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleAlign",
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        {
            "name": "titleSize",
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ChangeWidgetDefinitionType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ChangeWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

