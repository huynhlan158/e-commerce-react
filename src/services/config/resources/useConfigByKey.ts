import { useQuery } from '@tanstack/react-query';
import { fetchServer } from '~/services/fetch.server';

import { Config, ConfigKeys, ConfigQueryKeys } from '../models/Config';

/**
 * Performs a fetch request to the config server and retrieve the list of system config items.
 * @returns A promise that resolves to the list of system config items.
 */
export async function getConfigByKey(key: ConfigKeys): Promise<Config> {
  return fetchServer({ path: `/config/${key}`, method: 'GET' });
}

/**
 * A custom hook that returns a useQuery to get a config item by its key.
 */
export function useConfigByKey(key: ConfigKeys) {
  return useQuery({
    queryKey: [ConfigQueryKeys.CONFIG, key],
    queryFn: () => getConfigByKey(key),
  });
}
