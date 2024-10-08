import { useTranslation } from 'react-i18next';
import { Stack } from '@chakra-ui/react';

import { Heading } from '~/components/TypoGraphy';

export function PageNotFound() {
  const { t } = useTranslation();
  return (
    <Stack className="h-screen">
      <Heading text={t('not-found')} size="lg" />
    </Stack>
  );
}
