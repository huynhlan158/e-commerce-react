import { useQuery } from '@tanstack/react-query';

import { fetchServer } from '~/services/fetch.server';
import { Product } from '../models/Product';
import { ProductQueryKeys } from '../models/Keys';
import { SearchProductRequest } from '../models/ProductRequest';

/**
 * Performs a fetch request to the server and retrieve the list of product items.
 * @param searchParams The search parameters.
 * @returns A promise that resolves to the list of product items.
 */
export async function getProducts(
  searchParams?: SearchProductRequest
): Promise<Product[]> {
  return fetchServer({
    path: `/products?${new URLSearchParams(searchParams).toString()}`,
    method: 'GET',
  });
}

/**
 * A custom hook that returns a useQuery to get the list of product items.
 */
export function useProducts(searchParams?: SearchProductRequest) {
  return useQuery({
    queryKey: [ProductQueryKeys.PRODUCT_LIST, searchParams],
    queryFn: () => getProducts(searchParams),
    enabled: !!searchParams,
  });
}
