/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class UsageIndexedSpansHour {
  /**
   * The hour for the usage.
   */
  "hour"?: Date;
  /**
   * Contains the number of spans indexed.
   */
  "indexedEventsCount"?: number;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    hour: {
      baseName: "hour",
      type: "Date",

      format: "date-time",
    },
    indexedEventsCount: {
      baseName: "indexed_events_count",
      type: "number",

      format: "int64",
    },
  };

  static getAttributeTypeMap() {
    return UsageIndexedSpansHour.attributeTypeMap;
  }

  public constructor() {}
}
