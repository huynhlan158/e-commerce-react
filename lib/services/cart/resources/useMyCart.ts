import { useQuery } from '@tanstack/react-query';

import { fetchServer } from '~/services/fetch.server';
import { CartQueryKeys } from '../models/Keys';
import { ShoppingCart } from '../models/Cart';

/**
 * Performs a fetch request to the cart server and retrieve the list of cart items.
 * @returns A promise that resolves to the list of cart items.
 */
export async function findMyCart(): Promise<ShoppingCart> {
  return fetchServer({ path: '/findMyCart', method: 'GET' });
}

/**
 * A custom hook that returns a useQuery to get the shopping cart for the current user.
 */
export function useMyCart() {
  return useQuery({
    queryKey: [CartQueryKeys.MY_CART],
    queryFn: findMyCart,
  });
}
