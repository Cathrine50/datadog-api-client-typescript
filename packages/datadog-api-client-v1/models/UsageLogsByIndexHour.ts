/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageLogsByIndexHour {
  /**
   * The total number of indexed logs for the queried hour.
   */
  "eventCount"?: number;
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * The index ID for this usage.
   */
  "indexId"?: string;
  /**
   * The user specified name for this index ID.
   */
  "indexName"?: string;
  /**
   * The retention period (in days) for this index ID.
   */
  "retention"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    eventCount: {
      baseName: "event_count",
      type: "number",

      format: "int64",
    },
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
    indexId: {
      baseName: "index_id",
      type: "string",
    },
    indexName: {
      baseName: "index_name",
      type: "string",
    },
    retention: {
      baseName: "retention",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageLogsByIndexHour.attributeTypeMap;
  }

  public constructor() {}
}
