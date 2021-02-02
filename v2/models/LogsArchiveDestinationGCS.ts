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

import { LogsArchiveDestinationGCSType } from './LogsArchiveDestinationGCSType';
import { LogsArchiveIntegrationGCS } from './LogsArchiveIntegrationGCS';
import { HttpFile } from '../http/http';

/**
* The GCS archive destination.
*/
export class LogsArchiveDestinationGCS {
    /**
    * The bucket where the archive will be stored.
    */
    'bucket': string;
    'integration': LogsArchiveIntegrationGCS;
    /**
    * The archive path.
    */
    'path'?: string;
    'type': LogsArchiveDestinationGCSType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "LogsArchiveIntegrationGCS",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsArchiveDestinationGCSType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsArchiveDestinationGCS.attributeTypeMap;
    }
    
    public constructor() {
    }
}

