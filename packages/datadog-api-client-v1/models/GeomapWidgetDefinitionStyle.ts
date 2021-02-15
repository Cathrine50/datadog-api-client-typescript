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

import { HttpFile } from "../http/http";

/**
 * The style to apply to the widget.
 */
export class GeomapWidgetDefinitionStyle {
  /**
   * The color palette to apply to the widget.
   */
  "palette": string;
  /**
   * Whether to flip the palette tones.
   */
  "paletteFlip": boolean;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "palette",
      baseName: "palette",
      type: "string",
      format: "",
    },
    {
      name: "paletteFlip",
      baseName: "palette_flip",
      type: "boolean",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return GeomapWidgetDefinitionStyle.attributeTypeMap;
  }

  public constructor() {}
}
