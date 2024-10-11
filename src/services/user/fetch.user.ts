import { fetchServer } from '~/services/fetch.server';
import { UserProfile } from './models/User';

/**
 * Performs a fetch request to the users server and returns
 * the user profile based on provided user id.
 * @returns The response from the server.
 */
export async function getUserInfo(userId: string): Promise<UserProfile> {
  return fetchServer({ path: `/users/info/${userId}`, method: 'GET' });
}
