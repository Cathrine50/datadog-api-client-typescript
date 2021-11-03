/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionQueryDefinition } from "./FormulaAndFunctionQueryDefinition";
import { FormulaAndFunctionResponseFormat } from "./FormulaAndFunctionResponseFormat";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { WidgetDisplayType } from "./WidgetDisplayType";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetRequestStyle } from "./WidgetRequestStyle";

export class TimeseriesWidgetRequest {
  "apmQuery"?: LogQueryDefinition;
  "auditQuery"?: LogQueryDefinition;
  "displayType"?: WidgetDisplayType;
  "eventQuery"?: LogQueryDefinition;
  /**
   * List of formulas that operate on queries. **This feature is currently in beta.**
   */
  "formulas"?: Array<WidgetFormula>;
  "logQuery"?: LogQueryDefinition;
  /**
   * Used to define expression aliases.
   */
  "metadata"?: Array<TimeseriesWidgetExpressionAlias>;
  "networkQuery"?: LogQueryDefinition;
  /**
   * Whether or not to display a second y-axis on the right.
   */
  "onRightYaxis"?: boolean;
  "processQuery"?: ProcessQueryDefinition;
  "profileMetricsQuery"?: LogQueryDefinition;
  /**
   * Widget query.
   */
  "q"?: string;
  /**
   * List of queries that can be returned directly or used in formulas. **This feature is currently in beta.**
   */
  "queries"?: Array<FormulaAndFunctionQueryDefinition>;
  "responseFormat"?: FormulaAndFunctionResponseFormat;
  "rumQuery"?: LogQueryDefinition;
  "securityQuery"?: LogQueryDefinition;
  "style"?: WidgetRequestStyle;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    apmQuery: {
      baseName: "apm_query",
      type: "LogQueryDefinition",
    },
    auditQuery: {
      baseName: "audit_query",
      type: "LogQueryDefinition",
    },
    displayType: {
      baseName: "display_type",
      type: "WidgetDisplayType",
    },
    eventQuery: {
      baseName: "event_query",
      type: "LogQueryDefinition",
    },
    formulas: {
      baseName: "formulas",
      type: "Array<WidgetFormula>",
    },
    logQuery: {
      baseName: "log_query",
      type: "LogQueryDefinition",
    },
    metadata: {
      baseName: "metadata",
      type: "Array<TimeseriesWidgetExpressionAlias>",
    },
    networkQuery: {
      baseName: "network_query",
      type: "LogQueryDefinition",
    },
    onRightYaxis: {
      baseName: "on_right_yaxis",
      type: "boolean",
    },
    processQuery: {
      baseName: "process_query",
      type: "ProcessQueryDefinition",
    },
    profileMetricsQuery: {
      baseName: "profile_metrics_query",
      type: "LogQueryDefinition",
    },
    q: {
      baseName: "q",
      type: "string",
    },
    queries: {
      baseName: "queries",
      type: "Array<FormulaAndFunctionQueryDefinition>",
    },
    responseFormat: {
      baseName: "response_format",
      type: "FormulaAndFunctionResponseFormat",
    },
    rumQuery: {
      baseName: "rum_query",
      type: "LogQueryDefinition",
    },
    securityQuery: {
      baseName: "security_query",
      type: "LogQueryDefinition",
    },
    style: {
      baseName: "style",
      type: "WidgetRequestStyle",
    },
  };

  static getAttributeTypeMap() {
    return TimeseriesWidgetRequest.attributeTypeMap;
  }

  public constructor() {}
}
