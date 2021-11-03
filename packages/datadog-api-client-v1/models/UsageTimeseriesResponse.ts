/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageTimeseriesHour } from "./UsageTimeseriesHour";

export class UsageTimeseriesResponse {
  /**
   * An array of objects regarding hourly usage of timeseries.
   */
  "usage"?: Array<UsageTimeseriesHour>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    usage: {
      baseName: "usage",
      type: "Array<UsageTimeseriesHour>",
    },
  };

  static getAttributeTypeMap() {
    return UsageTimeseriesResponse.attributeTypeMap;
  }

  public constructor() {}
}
