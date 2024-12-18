import { useTranslation } from 'react-i18next';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchServer, getErrorMessage } from '~/services/fetch.server';
import { Status } from '~/types/Styles';
import { useToast } from '~/components/Toast';

import { CreateTab1Request } from '../models/Tab1Request';
import { Tab1, Tab1QueryKeys } from '../models/Tab1';

/**
 * Performs a fetch request to the tab1 server to create a new item in the database.
 * @model The request model.
 * @returns A promise that resolves to the new added item.
 */
export async function createTab1(model: CreateTab1Request): Promise<Tab1> {
  return fetchServer({ path: '/tab1-items', method: 'POST', body: model });
}

/**
 * A custom hook to create a new item in the database then
 * automatically refresh the list of Tab1 items when the request is successful.
 */
export function useCreateTab1() {
  const { t } = useTranslation();

  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: createTab1,
    onSuccess: (data) => {
      toast({
        text: t('result-add-item-success', { item: data.name }),
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
