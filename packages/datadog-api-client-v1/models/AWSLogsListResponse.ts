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

import { AWSLogsLambda } from "./AWSLogsLambda";
import { HttpFile } from "../http/http";

/**
 * A list of all Datadog-AWS logs integrations available in your Datadog organization.
 */
export class AWSLogsListResponse {
  /**
   * Your AWS Account ID without dashes.
   */
  "accountId"?: string;
  /**
   * List of ARNs configured in your Datadog account.
   */
  "lambdas"?: Array<AWSLogsLambda>;
  /**
   * Array of services IDs.
   */
  "services"?: Array<string>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: Array<{
    name: string;
    baseName: string;
    type: string;
    format: string;
  }> = [
    {
      name: "accountId",
      baseName: "account_id",
      type: "string",
      format: "",
    },
    {
      name: "lambdas",
      baseName: "lambdas",
      type: "Array<AWSLogsLambda>",
      format: "",
    },
    {
      name: "services",
      baseName: "services",
      type: "Array<string>",
      format: "",
    },
  ];

  static getAttributeTypeMap() {
    return AWSLogsListResponse.attributeTypeMap;
  }

  public constructor() {}
}
