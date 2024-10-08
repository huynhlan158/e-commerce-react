import { useTranslation } from 'react-i18next';

import { Heading, Text } from '~/components/TypoGraphy';

export function Tab3() {
  const { t } = useTranslation();

  return (
    <>
      <Heading text={t('navbar-tab3')} />
      <Text text={t('navbar-tab3')} />
    </>
  );
}
