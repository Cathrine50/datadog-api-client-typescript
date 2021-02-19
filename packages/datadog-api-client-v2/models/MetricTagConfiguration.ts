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

import { MetricTagConfigurationAttributes } from './MetricTagConfigurationAttributes';
import { MetricTagConfigurationType } from './MetricTagConfigurationType';
import { HttpFile } from '../http/http';

/**
* Object for a single metric tag configuration.
*/
export class MetricTagConfiguration {
    'attributes'?: MetricTagConfigurationAttributes;
    /**
    * The metric name for this resource.
    */
    'id'?: string;
    'type'?: MetricTagConfigurationType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "MetricTagConfigurationAttributes",
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
            "type": "MetricTagConfigurationType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricTagConfiguration.attributeTypeMap;
    }
    
    public constructor() {
    }
}

