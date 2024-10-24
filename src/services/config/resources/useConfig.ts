import { useQuery } from '@tanstack/react-query';

import { fetchServer } from '~/services/fetch.server';
import { Config, ConfigQueryKeys } from '../models/Config';

/**
 * Performs a fetch request to the config server and retrieve the list of system config items.
 * @returns A promise that resolves to the list of system config items.
 */
export async function getConfig(): Promise<Config[]> {
  return fetchServer({ path: '/config', method: 'GET' });
}

/**
 * A custom hook that returns a useQuery to get the list of config items.
 */
export function useConfig() {
  return useQuery({
    queryKey: [ConfigQueryKeys.CONFIG_LIST],
    queryFn: getConfig,
    initialData: [],
  });
}
