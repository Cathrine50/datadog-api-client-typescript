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

import { AWSNamespace } from "./AWSNamespace";
import { HttpFile } from "../http/http";

/**
 * A tag filter.
 */
export class AWSTagFilter {
  "namespace"?: AWSNamespace;
  /**
   * The tag filter string.
   */
  "tagFilterStr"?: string;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "namespace",
      baseName: "namespace",
      type: "AWSNamespace",
      format: "",
    },
    {
      name: "tagFilterStr",
      baseName: "tag_filter_str",
      type: "string",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AWSTagFilter.attributeTypeMap;
  }

  public constructor() {}
}
