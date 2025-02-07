import {
  BaseAPIRequestFactory,
  RequiredError,
} from "../../datadog-api-client-common/baseapi";
import {
  Configuration,
  getServer,
  applySecurityAuthentication,
} from "../../datadog-api-client-common/configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
} from "../../datadog-api-client-common/http/http";

import { logger } from "../../../logger";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "../../datadog-api-client-common/exception";

import { APIErrorResponse } from "../models/APIErrorResponse";
import { GCPAccount } from "../models/GCPAccount";

export class GCPIntegrationApiRequestFactory extends BaseAPIRequestFactory {
  public async createGCPIntegration(
    body: GCPAccount,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "createGCPIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/gcp";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.GCPIntegrationApi.createGCPIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.POST);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPAccount", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async deleteGCPIntegration(
    body: GCPAccount,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "deleteGCPIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/gcp";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.GCPIntegrationApi.deleteGCPIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.DELETE);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPAccount", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async listGCPIntegration(
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/api/v1/integration/gcp";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.GCPIntegrationApi.listGCPIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.GET);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }

  public async updateGCPIntegration(
    body: GCPAccount,
    _options?: Configuration
  ): Promise<RequestContext> {
    const _config = _options || this.configuration;

    // verify required parameter 'body' is not null or undefined
    if (body === null || body === undefined) {
      throw new RequiredError("body", "updateGCPIntegration");
    }

    // Path Params
    const localVarPath = "/api/v1/integration/gcp";

    // Make Request Context
    const requestContext = getServer(
      _config,
      "v1.GCPIntegrationApi.updateGCPIntegration"
    ).makeRequestContext(localVarPath, HttpMethod.PUT);
    requestContext.setHeaderParam("Accept", "application/json");
    requestContext.setHttpConfig(_config.httpConfig);

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(body, "GCPAccount", ""),
      contentType
    );
    requestContext.setBody(serializedBody);

    // Apply auth methods
    applySecurityAuthentication(_config, requestContext, [
      "apiKeyAuth",
      "appKeyAuth",
    ]);

    return requestContext;
  }
}

export class GCPIntegrationApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to createGCPIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async createGCPIntegration(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to deleteGCPIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async deleteGCPIntegration(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to listGCPIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async listGCPIntegration(
    response: ResponseContext
  ): Promise<Array<GCPAccount>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: Array<GCPAccount> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<GCPAccount>"
      ) as Array<GCPAccount>;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: Array<GCPAccount> = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Array<GCPAccount>",
        ""
      ) as Array<GCPAccount>;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects
   *
   * @params response Response returned by the server for a request to updateGCPIntegration
   * @throws ApiException if the response code was not in [200, 299]
   */
  public async updateGCPIntegration(response: ResponseContext): Promise<any> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"]
    );
    if (response.httpStatusCode == 200) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any"
      ) as any;
      return body;
    }
    if (
      response.httpStatusCode == 400 ||
      response.httpStatusCode == 403 ||
      response.httpStatusCode == 429
    ) {
      const bodyText = ObjectSerializer.parse(
        await response.body.text(),
        contentType
      );
      let body: APIErrorResponse;
      try {
        body = ObjectSerializer.deserialize(
          bodyText,
          "APIErrorResponse"
        ) as APIErrorResponse;
      } catch (error) {
        logger.info(`Got error deserializing error: ${error}`);
        throw new ApiException<APIErrorResponse>(
          response.httpStatusCode,
          bodyText
        );
      }
      throw new ApiException<APIErrorResponse>(response.httpStatusCode, body);
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: any = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "any",
        ""
      ) as any;
      return body;
    }

    const body = (await response.body.text()) || "";
    throw new ApiException<string>(
      response.httpStatusCode,
      'Unknown API Status Code!\nBody: "' + body + '"'
    );
  }
}

export interface GCPIntegrationApiCreateGCPIntegrationRequest {
  /**
   * Create a Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export interface GCPIntegrationApiDeleteGCPIntegrationRequest {
  /**
   * Delete a given Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export interface GCPIntegrationApiUpdateGCPIntegrationRequest {
  /**
   * Update a Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export class GCPIntegrationApi {
  private requestFactory: GCPIntegrationApiRequestFactory;
  private responseProcessor: GCPIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GCPIntegrationApiRequestFactory,
    responseProcessor?: GCPIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new GCPIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GCPIntegrationApiResponseProcessor();
  }

  /**
   * Create a Datadog-GCP integration.
   * @param param The request object
   */
  public createGCPIntegration(
    param: GCPIntegrationApiCreateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGCPIntegration(responseContext);
        });
    });
  }

  /**
   * Delete a given Datadog-GCP integration.
   * @param param The request object
   */
  public deleteGCPIntegration(
    param: GCPIntegrationApiDeleteGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGCPIntegration(responseContext);
        });
    });
  }

  /**
   * List all Datadog-GCP integrations configured in your Datadog account.
   * @param param The request object
   */
  public listGCPIntegration(
    options?: Configuration
  ): Promise<Array<GCPAccount>> {
    const requestContextPromise =
      this.requestFactory.listGCPIntegration(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGCPIntegration(responseContext);
        });
    });
  }

  /**
   * Update a Datadog-GCP integrations host_filters and/or auto-mute.
   * Requires a `project_id` and `client_email`, however these fields cannot be updated.
   * If you need to update these fields, delete and use the create (`POST`) endpoint.
   * The unspecified fields will keep their original values.
   * @param param The request object
   */
  public updateGCPIntegration(
    param: GCPIntegrationApiUpdateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGCPIntegration(responseContext);
        });
    });
  }
}
