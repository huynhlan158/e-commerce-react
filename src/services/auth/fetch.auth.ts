import { fetchServer } from '~/services/fetch.server';
import { LoginRequest } from './models/LoginRequest';

/**
 * Performs a fetch request to the server and returns
 * the access token if the credential is valid.
 * @returns The response from the server.
 */
export async function getAccessToken(modal: LoginRequest): Promise<string> {
  return fetchServer({ path: '/token', method: 'POST', body: modal });
}
