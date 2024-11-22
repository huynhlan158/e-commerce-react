import { useQuery } from '@tanstack/react-query';

import { fetchServer } from '~/services/fetch.server';
import { Tab1, Tab1QueryKeys } from '../models/Tab1';

/**
 * Performs a fetch request to the tab1 server and to retrieve the list of tab1 items.
 * @returns A promise that resolves to the list of Tab1 items.
 */
export async function getTab1s(): Promise<Tab1[]> {
  return fetchServer({ path: '/tab1-items', method: 'GET' });
}

/**
 * A custom hook that returns a useQuery to get the list of Tab1 items.
 */
export function useTab1() {
  return useQuery({
    queryKey: [Tab1QueryKeys.TAB1_ITEMS],
    queryFn: getTab1s,
    initialData: [],
  });
}
