import { Button, Stack } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Heading } from '~/components/TypoGraphy';

export function Login() {
  const { t } = useTranslation('login');

  return (
    <Stack alignItems="center" justifyContent="center" className="min-h-screen">
      <Heading text={t('login')} />
      <Button>{t('login')}</Button>
    </Stack>
  );
}
