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

import { SLOCorrection } from "./SLOCorrection";
import { HttpFile } from "../http/http";

/**
 * A list of  SLO correction objects
 */
export class SLOCorrectionListResponse {
  /**
   * The list of of SLO corrections objects
   */
  "data"?: Array<SLOCorrection>;

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
      type: "Array<SLOCorrection>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return SLOCorrectionListResponse.attributeTypeMap;
  }

  public constructor() {}
}
