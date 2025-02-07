/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsAPIStepSubtype } from "./SyntheticsAPIStepSubtype";
import { SyntheticsAssertion } from "./SyntheticsAssertion";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The steps used in a Synthetics multistep API test.
 */
export class SyntheticsAPIStep {
  /**
   * Determines whether or not to continue with test if this step fails.
   */
  "allowFailure"?: boolean;
  /**
   * Array of assertions used for the test.
   */
  "assertions": Array<SyntheticsAssertion>;
  /**
   * Array of values to parse and save as variables from the response.
   */
  "extractedValues"?: Array<SyntheticsParsingOptions>;
  /**
   * Determines whether or not to consider the entire test as failed if this step fails.
   * Can be used only if `allowFailure` is `true`.
   */
  "isCritical"?: boolean;
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * Object describing the Synthetic test request.
   */
  "request": SyntheticsTestRequest;
  /**
   * Object describing the retry strategy to apply to a Synthetic test.
   */
  "retry"?: SyntheticsTestOptionsRetry;
  /**
   * The subtype of the Synthetic multistep API test step, currently only supporting `http`.
   */
  "subtype": SyntheticsAPIStepSubtype;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allowFailure: {
      baseName: "allowFailure",
      type: "boolean",
    },
    assertions: {
      baseName: "assertions",
      type: "Array<SyntheticsAssertion>",
      required: true,
    },
    extractedValues: {
      baseName: "extractedValues",
      type: "Array<SyntheticsParsingOptions>",
    },
    isCritical: {
      baseName: "isCritical",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    request: {
      baseName: "request",
      type: "SyntheticsTestRequest",
      required: true,
    },
    retry: {
      baseName: "retry",
      type: "SyntheticsTestOptionsRetry",
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsAPIStepSubtype",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsAPIStep.attributeTypeMap;
  }

  public constructor() {}
}
