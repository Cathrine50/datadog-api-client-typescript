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

import { SecurityMonitoringRuleSeverity } from './SecurityMonitoringRuleSeverity';
import { HttpFile } from '../http/http';

/**
* Case when signal is generated.
*/
export class SecurityMonitoringRuleCase {
    /**
    * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
    */
    'condition'?: string;
    /**
    * Name of the case.
    */
    'name'?: string;
    /**
    * Notification targets for each rule case.
    */
    'notifications'?: Array<string>;
    'status'?: SecurityMonitoringRuleSeverity;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "condition",
            "baseName": "condition",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "notifications",
            "baseName": "notifications",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SecurityMonitoringRuleSeverity",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityMonitoringRuleCase.attributeTypeMap;
    }
    
    public constructor() {
    }
}

