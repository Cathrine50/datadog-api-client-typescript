/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Your Google Cloud Platform Account.
 */
export class GCPAccount {
  /**
   * Should be `https://www.googleapis.com/oauth2/v1/certs`.
   */
  "authProviderX509CertUrl"?: string;
  /**
   * Should be `https://accounts.google.com/o/oauth2/auth`.
   */
  "authUri"?: string;
  /**
   * Silence monitors for expected GCE instance shutdowns.
   */
  "automute"?: boolean;
  /**
   * Your email found in your JSON service account key.
   */
  "clientEmail"?: string;
  /**
   * Your ID found in your JSON service account key.
   */
  "clientId"?: string;
  /**
   * Should be `https://www.googleapis.com/robot/v1/metadata/x509/$CLIENT_EMAIL`
   * where `$CLIENT_EMAIL` is the email found in your JSON service account key.
   */
  "clientX509CertUrl"?: string;
  /**
   * An array of errors.
   */
  "errors"?: Array<string>;
  /**
   * Limit the GCE instances that are pulled into Datadog by using tags.
   * Only hosts that match one of the defined tags are imported into Datadog.
   */
  "hostFilters"?: string;
  /**
   * Your private key name found in your JSON service account key.
   */
  "privateKey"?: string;
  /**
   * Your private key ID found in your JSON service account key.
   */
  "privateKeyId"?: string;
  /**
   * Your Google Cloud project ID found in your JSON service account key.
   */
  "projectId"?: string;
  /**
   * Should be `https://accounts.google.com/o/oauth2/token`.
   */
  "tokenUri"?: string;
  /**
   * The value for service_account found in your JSON service account key.
   */
  "type"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    authProviderX509CertUrl: {
      baseName: "auth_provider_x509_cert_url",
      type: "string",
    },
    authUri: {
      baseName: "auth_uri",
      type: "string",
    },
    automute: {
      baseName: "automute",
      type: "boolean",
    },
    clientEmail: {
      baseName: "client_email",
      type: "string",
    },
    clientId: {
      baseName: "client_id",
      type: "string",
    },
    clientX509CertUrl: {
      baseName: "client_x509_cert_url",
      type: "string",
    },
    errors: {
      baseName: "errors",
      type: "Array<string>",
    },
    hostFilters: {
      baseName: "host_filters",
      type: "string",
    },
    privateKey: {
      baseName: "private_key",
      type: "string",
    },
    privateKeyId: {
      baseName: "private_key_id",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    tokenUri: {
      baseName: "token_uri",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GCPAccount.attributeTypeMap;
  }

  public constructor() {}
}
