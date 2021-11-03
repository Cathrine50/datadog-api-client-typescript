/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersType } from "./UsersType";

export class User {
  "attributes"?: UserAttributes;
  /**
   * ID of the user.
   */
  "id"?: string;
  "relationships"?: UserResponseRelationships;
  "type"?: UsersType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "UserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "UsersType",
    },
  };

  static getAttributeTypeMap() {
    return User.attributeTypeMap;
  }

  public constructor() {}
}
