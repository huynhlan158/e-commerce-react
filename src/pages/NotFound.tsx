import { useTranslation } from 'react-i18next';
import { Stack } from '~/components/Layouts';

import { Heading } from '~/components/TypoGraphy';

export function PageNotFound() {
  const { t } = useTranslation();
  return (
    <Stack className="h-screen">
      <Heading text={t('not-found')} size="lg" />
    </Stack>
  );
}
