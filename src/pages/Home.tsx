import { useTranslation } from 'react-i18next';

import { Heading, Text } from '~/components/TypoGraphy';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Heading text={t('welcome')} />
      <Text text={t('welcome')} />
    </>
  );
}
