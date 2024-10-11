export type FieldErrors = {
  /**
   * The error message for a specific field name.
   */
  [x: string]: string;
} | null;

export interface FetchError {
  /**
   * A general error message that applies to the whole form.
   */
  message: string | undefined;
  /**
   * A map of validation errors that apply to specific form fields.
   */
  fields?: FieldErrors;
  /**
   * The HTTP status of the error response, if any.
   */
  status: number | null;
}

export enum ErrorType {
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  AUTHENTICATION_FAILURE = 'AUTHENTICATION_FAILURE',
  VALIDATION = 'VALIDATION',
}

export type FetchOptions = {
  /**
   * The path to perform the request to.
   */
  path: string | URL;
  /**
   * Whether the path already had the base URL.
   */
  hasBaseURL?: boolean;
  /**
   * The HTTP method to use for the request.
   */
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  /**
   * Additional headers for the request.
   */
  headers?: Record<string, string>;
  /**
   * The content type of the request.
   */
  contentType?: string | null;
  /**
   * The authorization of the request.
   */
  authorization?: string | null;
  /**
   * The response type of the request.
   */
  responseType?: 'json' | 'blob';
  /**
   * The body of the request.
   */
  body?: object;
  /**
   * Whether the request should be made in debug mode.
   */
  debug?: boolean;
  /**
   * Response init.
   */
  res?: {
    status: number | undefined;
    headers: Headers;
  };
};
