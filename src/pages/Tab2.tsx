import { useTranslation } from 'react-i18next';

import { Heading, Text } from '~/components/TypoGraphy';

export function Tab2() {
  const { t } = useTranslation();

  return (
    <>
      <Heading text={t('navbar-tab2')} />
      <Text text={t('navbar-tab2')} />
    </>
  );
}
