/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogAttributes {
  /**
   * JSON object of attributes from your log.
   */
  "attributes"?: { [key: string]: any };
  /**
   * Name of the machine from where the logs are being sent.
   */
  "host"?: string;
  /**
   * The message [reserved attribute](https://docs.datadoghq.com/logs/log_collection/#reserved-attributes) of your log. By default, Datadog ingests the value of the message attribute as the body of the log entry. That value is then highlighted and displayed in the Logstream, where it is indexed for full text search.
   */
  "message"?: string;
  /**
   * The name of the application or service generating the log events. It is used to switch from Logs to APM, so make sure you define the same value when you use both products.
   */
  "service"?: string;
  /**
   * Status of the message associated with your log.
   */
  "status"?: string;
  /**
   * Array of tags associated with your log.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp of your log.
   */
  "timestamp"?: Date;

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
      type: "{ [key: string]: any; }",
    },
    host: {
      baseName: "host",
      type: "string",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",

      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return LogAttributes.attributeTypeMap;
  }

  public constructor() {}
}
