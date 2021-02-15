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

import { MetricTagConfigurationCreateData } from "./MetricTagConfigurationCreateData";
import { HttpFile } from "../http/http";

/**
 * Request object that includes the metric that you would like to configure tags for.
 */
export class MetricTagConfigurationCreateRequest {
  "data": MetricTagConfigurationCreateData;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "data",
      baseName: "data",
      type: "MetricTagConfigurationCreateData",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return MetricTagConfigurationCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
