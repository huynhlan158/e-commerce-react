import { useQuery } from '@tanstack/react-query';

import { fetchServer } from '~/services/fetch.server';
import { Category, CategoryUnitId } from '../models/Category';
import { CategoryQueryKeys } from '../models/Keys';

/**
 * Performs a fetch request to the server and retrieve a category item by provided id.
 * @returns A promise that resolves to the category item.
 */
export async function getCategoryById(id: CategoryUnitId): Promise<Category> {
  return fetchServer({ path: `/categories/${id}`, method: 'GET' });
}

/**
 * A custom hook that returns a useQuery to get a category item by its id.
 */
export function useCategoryById(id: CategoryUnitId) {
  return useQuery({
    queryKey: [CategoryQueryKeys.CATEGORY, id],
    queryFn: () => getCategoryById(id),
  });
}
