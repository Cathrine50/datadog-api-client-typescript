/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudflareAccountType } from "./CloudflareAccountType";
import { CloudflareAccountUpdateRequestAttributes } from "./CloudflareAccountUpdateRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for updating a Cloudflare account.
 */
export class CloudflareAccountUpdateRequestData {
  /**
   * Attributes object for updating a Cloudflare account.
   */
  "attributes"?: CloudflareAccountUpdateRequestAttributes;
  /**
   * The JSON:API type for this API. Should always be `cloudflare-accounts`.
   */
  "type"?: CloudflareAccountType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "CloudflareAccountUpdateRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "CloudflareAccountType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CloudflareAccountUpdateRequestData.attributeTypeMap;
  }

  public constructor() {}
}
