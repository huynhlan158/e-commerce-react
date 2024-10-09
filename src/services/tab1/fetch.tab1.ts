import { fetchServer } from '~/services/fetch.server';
import { Tab1Item } from './models/tab1Item';

/**
 * Performs a fetch request to the tab1 server and returns
 * the list of tab1 items as the response.
 * @returns The response from the server.
 */
export async function getTab1Items(): Promise<Tab1Item[]> {
  return fetchServer({ path: '/tab1-items', method: 'GET' });
}
