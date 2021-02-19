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

import { SLOBulkDeleteError } from './SLOBulkDeleteError';
import { SLOBulkDeleteResponseData } from './SLOBulkDeleteResponseData';
import { HttpFile } from '../http/http';

/**
* The bulk partial delete service level objective object endpoint response.  This endpoint operates on multiple service level objective objects, so it may be partially successful. In such cases, the \"data\" and \"error\" fields in this response indicate which deletions succeeded and failed.
*/
export class SLOBulkDeleteResponse {
    'data'?: SLOBulkDeleteResponseData;
    /**
    * Array of errors object returned.
    */
    'errors'?: Array<SLOBulkDeleteError>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "SLOBulkDeleteResponseData",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<SLOBulkDeleteError>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOBulkDeleteResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

