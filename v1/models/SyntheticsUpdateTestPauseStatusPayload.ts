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

import { SyntheticsTestPauseStatus } from './SyntheticsTestPauseStatus';
import { HttpFile } from '../http/http';

/**
* Object to start or pause an existing Synthetic test.
*/
export class SyntheticsUpdateTestPauseStatusPayload {
    'newStatus'?: SyntheticsTestPauseStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "newStatus",
            "baseName": "new_status",
            "type": "SyntheticsTestPauseStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsUpdateTestPauseStatusPayload.attributeTypeMap;
    }
    
    public constructor() {
    }
}

