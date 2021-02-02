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

import { LogsArchiveDestinationAzureType } from './LogsArchiveDestinationAzureType';
import { LogsArchiveIntegrationAzure } from './LogsArchiveIntegrationAzure';
import { HttpFile } from '../http/http';

/**
* The Azure archive destination.
*/
export class LogsArchiveDestinationAzure {
    /**
    * The container where the archive will be stored.
    */
    'container': string;
    'integration': LogsArchiveIntegrationAzure;
    /**
    * The archive path.
    */
    'path'?: string;
    /**
    * The region where the archive will be stored.
    */
    'region'?: string;
    /**
    * The associated storage account.
    */
    'storageAccount': string;
    'type': LogsArchiveDestinationAzureType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "container",
            "baseName": "container",
            "type": "string",
            "format": ""
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "LogsArchiveIntegrationAzure",
            "format": ""
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "string",
            "format": ""
        },
        {
            "name": "storageAccount",
            "baseName": "storage_account",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsArchiveDestinationAzureType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsArchiveDestinationAzure.attributeTypeMap;
    }
    
    public constructor() {
    }
}

