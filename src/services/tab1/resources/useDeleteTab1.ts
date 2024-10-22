import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchServer, getErrorMessage } from '~/services/fetch.server';
import { Status } from '~/types/Styles';
import { useToast } from '~/components/Toast';

import { Tab1, Tab1QueryKeys } from '../models/Tab1';

/**
 * Performs a fetch request to the tab1 server to delete an item in the database by its id.
 */
export async function deleteTab1(id: string): Promise<Tab1> {
  return fetchServer({ path: `/tab1-items/delete/${id}`, method: 'DELETE' });
}

/**
 * A custom hook to delete an item in the database by its id then
 * automatically refresh the list of Tab1 items when the request is successful.
 */
export function useDeleteTab1() {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: deleteTab1,
    onSuccess: (data) => {
      toast({
        text: t('result-delete-item-success', { item: data.name }),
        status: Status.SUCCESS,
      });
      queryClient.invalidateQueries({ queryKey: [Tab1QueryKeys.TAB1_ITEMS] });
    },
    onError: (error) => {
      const errorMessage = getErrorMessage(error);
      toast({ text: errorMessage, status: Status.ERROR });
    },
  });
}