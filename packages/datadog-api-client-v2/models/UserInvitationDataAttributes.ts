/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of a user invitation.
 */
export class UserInvitationDataAttributes {
  /**
   * Creation time of the user invitation.
   */
  "createdAt"?: Date;
  /**
   * Time of invitation expiration.
   */
  "expiresAt"?: Date;
  /**
   * Type of invitation.
   */
  "inviteType"?: string;
  /**
   * UUID of the user invitation.
   */
  "uuid"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    expiresAt: {
      baseName: "expires_at",
      type: "Date",
      format: "date-time",
    },
    inviteType: {
      baseName: "invite_type",
      type: "string",
    },
    uuid: {
      baseName: "uuid",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserInvitationDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
