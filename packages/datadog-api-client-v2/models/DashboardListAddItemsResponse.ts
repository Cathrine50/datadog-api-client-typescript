/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemResponse } from "./DashboardListItemResponse";

export class DashboardListAddItemsResponse {
  /**
   * List of dashboards added to the dashboard list.
   */
  "addedDashboardsToList"?: Array<DashboardListItemResponse>;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    addedDashboardsToList: {
      baseName: "added_dashboards_to_list",
      type: "Array<DashboardListItemResponse>",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListAddItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
