import { useTranslation } from 'react-i18next';
import { Button, IconButton } from '@chakra-ui/react';
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import {
  useCreateTab1,
  useDeleteTab1,
  useTab1,
} from '~/services/tab1/resources';

import { LoadingState, Stack } from '~/components/Layouts';
import { Heading, Text } from '~/components/TypoGraphy';

export function Tab1() {
  const { t } = useTranslation();

  const { data: items, isFetching } = useTab1();

  const { mutate: createMutate, isPending: isPendingCreate } = useCreateTab1();

  const { mutate: deleteMutate, isPending: isPendingDelete } = useDeleteTab1();

  return (
    <>
      <Heading text={t('navbar-tab1')} />

      <Button
        size={['sm', 'md']}
        variant="outline"
        leftIcon={<PlusIcon className="size-16 laptop:size-20" />}
        onClick={() =>
          createMutate({
            name: 'New item',
            description: 'New item description',
          })
        }
      >
        {t('action-add')}
      </Button>

      {items.map((item) => (
        <Stack
          key={item.id}
          gap={12}
          direction="row"
          justifyContent="space-between"
        >
          <Stack gap={8}>
            <Heading level={5} text={item.name} size="sm" />
            <Text text={item.description} />
          </Stack>

          <Stack direction="row">
            <IconButton
              aria-label="Edit"
              variant="ghost"
              size={['xs', 'sm']}
              icon={<PencilSquareIcon className="size-16 laptop:size-20" />}
            />
            <IconButton
              aria-label="Edit"
              variant="ghost"
              size={['xs', 'sm']}
              icon={
                <TrashIcon className="size-16 laptop:size-20 text-red-600" />
              }
              onClick={() => deleteMutate(item.id)}
            />
          </Stack>
        </Stack>
      ))}

      {(isFetching || isPendingCreate || isPendingDelete) && <LoadingState />}
    </>
  );
}
