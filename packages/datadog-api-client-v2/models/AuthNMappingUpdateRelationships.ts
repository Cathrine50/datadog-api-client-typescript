/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RelationshipToRole } from "./RelationshipToRole";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Relationship of AuthN Mapping update object to Role.
 */

export class AuthNMappingUpdateRelationships {
  "role"?: RelationshipToRole;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    role: {
      baseName: "role",
      type: "RelationshipToRole",
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingUpdateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
