import { fetchServer } from '~/services/fetch.server';
import { Tab1Item } from './models/tab1Item';

export async function getTab1Items(): Promise<Tab1Item[]> {
  return fetchServer<Tab1Item[]>({ path: '/tab1-items', method: 'GET' });
}
