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

import { EventQueryDefinition } from "./EventQueryDefinition";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { WidgetStyle } from "./WidgetStyle";
import { HttpFile } from "../http/http";

/**
 * Updated heat map widget.
 */
export class HeatMapWidgetRequest {
  "apmQuery"?: LogQueryDefinition;
  "eventQuery"?: EventQueryDefinition;
  "logQuery"?: LogQueryDefinition;
  "networkQuery"?: LogQueryDefinition;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;
  "style"?: WidgetStyle;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "apmQuery",
      baseName: "apm_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "eventQuery",
      baseName: "event_query",
      type: "EventQueryDefinition",
      format: "",
    },
    {
      name: "logQuery",
      baseName: "log_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "networkQuery",
      baseName: "network_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "processQuery",
      baseName: "process_query",
      type: "ProcessQueryDefinition",
      format: "",
    },
    {
      name: "profileMetricsQuery",
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "q",
      baseName: "q",
      type: "string",
      format: "",
    },
    {
      name: "rumQuery",
      baseName: "rum_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "securityQuery",
      baseName: "security_query",
      type: "LogQueryDefinition",
      format: "",
    },
    {
      name: "style",
      baseName: "style",
      type: "WidgetStyle",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return HeatMapWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
