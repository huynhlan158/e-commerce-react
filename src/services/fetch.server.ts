import { z } from 'zod';

import { ErrorType, FetchError, FetchOptions } from '~/types/FetchServer';
import { getCookie, StorageKeys } from '~/utils/cookie';

// const baseURL = process.env.NODE_ENV === 'development' ? '/mock-api' : '/api';
const baseURL = '/mock-api';

/**
 * Performs a fetch request to the server and returns the response.
 * Automatically takes care of appending the authorization headers, if the user is authenticated.
 * @param request The current HTTP request.
 * @param options The options for the request.
 * @returns The response from the server.
 */
export async function fetchServer<TResponse>(options: FetchOptions, request?: Request): Promise<TResponse> {
  const { contentType, authorization, headers, method, body, path, hasBaseURL = false } = options;
  let { debug = false } = options;

  /** Handle request header */
  const requestHeaders: HeadersInit = {
    ...headers,
  };
  if (contentType === undefined) {
    requestHeaders['Content-type'] = 'application/json';
  } else if (contentType !== null) {
    requestHeaders['Content-type'] = contentType;
  }

  /**
   * Automatically takes care of appending the authorization headers,
   * if the user is authenticated
   */
  const accessToken = getCookie(StorageKeys.ACCESS_TOKEN);
  if (authorization === undefined) {
    if (accessToken) requestHeaders['Authorization'] = `Bearer ${accessToken}`;
  } else if (authorization !== null) {
    requestHeaders['Authorization'] = authorization;
  }

  /** Handle request body */
  let requestBody: BodyInit | null | undefined = null;
  if (body instanceof FormData) {
    requestBody = body;
    delete requestHeaders['Content-type'];
  } else if (body && contentType === 'application/x-www-form-urlencoded') {
    requestBody = new URLSearchParams({ ...body }).toString();
  } else if (body) {
    requestBody = JSON.stringify(body);
  }

  /** Init a request with method, headers, body */
  const requestInit: RequestInit = {
    method,
    headers: requestHeaders,
    body: requestBody,
  };

  /** Perform a fetch request to the server and returns the response */
  let response: Response;
  try {
    response = await fetch(hasBaseURL ? path : `${baseURL}${path}`, requestInit);
  } catch (error: unknown) {
    const { success, data: cause } = NetworkErrorSchema.safeParse(error);
    if (success) {
      console.error('Fetch errored', { cause });
      throw new NetworkFetchError(cause.code, { error });
    }

    throw error;
  }
  const data = await response.json();

  /** Return data if fetching API successfully */
  if (response.ok) {
    return data;
  } else {
    // Log any non-successful requests for debugging purposes
    debug = true;
  }

  /** Log debugging information if debug mode is enabled */
  if (debug) {
    console.error('DEBUG >>>>>: ', {
      aborted: request?.signal.aborted,
      url: request?.url,
      path: options.path,
      method,
      headers: requestHeaders,
      body,
      response: {
        headers: [...response.headers.entries()].flat(),
        status: response.status,
        data,
      },
    });
  }

  /** Throw error from fetching API */
  const type = data.error ?? ErrorType.INTERNAL_SERVER_ERROR;
  const message = data.message ?? 'Unexpected error.';
  const status = (data.status || response.status) ?? 500;
  throw new ServerFetchError(type, status, message);
}

/**
 * An error that is thrown when fetching data from API endpoint fails.
 */
export class ServerFetchError extends Error implements FetchError {
  public type: ErrorType;
  public status: number;
  public message: string;

  constructor(type: ErrorType, status: number, message: string) {
    super();
    this.message = message;
    this.type = type;
    this.status = status;
  }
}

/**
 * A type guard to check if an unknown error is a ServerFetchError.
 * @param error the error instance.
 * @returns the result of the check.
 */
export function isServerFetchError(error: unknown): error is ServerFetchError {
  return error instanceof ServerFetchError;
}

const NetworkErrorSchema = z.object({
  code: z.number(),
  message: z.string(),
});

/**
 * A network error that is thrown when fetching data from API endpoint.
 */
export class NetworkFetchError extends Error {
  constructor(
    public errno: number,
    options: object
  ) {
    super(`Network error - ${errno} ${options}`);
  }
}
