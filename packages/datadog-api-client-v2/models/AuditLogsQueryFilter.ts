/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Search and filter query settings.
 */
export class AuditLogsQueryFilter {
  /**
   * Minimum time for the requested events. Supports date, math, and regular timestamps (in milliseconds).
   */
  "from"?: string;
  /**
   * Search query following the Audit Logs search syntax.
   */
  "query"?: string;
  /**
   * Maximum time for the requested events. Supports date, math, and regular timestamps (in milliseconds).
   */
  "to"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    to: {
      baseName: "to",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuditLogsQueryFilter.attributeTypeMap;
  }

  public constructor() {}
}
