/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class SyntheticsTestRequestCertificateItem {
  /**
   * Content of the certificate or key.
   */
  "content"?: string;
  /**
   * File name for the certificate or key.
   */
  "filename"?: string;
  /**
   * Date of update of the certificate or key, ISO format.
   */
  "updatedAt"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    content: {
      baseName: "content",
      type: "string",
    },
    filename: {
      baseName: "filename",
      type: "string",
    },
    updatedAt: {
      baseName: "updatedAt",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsTestRequestCertificateItem.attributeTypeMap;
  }

  public constructor() {}
}
