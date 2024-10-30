import { useTranslation } from 'react-i18next';

import { Heading, Text } from '~/components/TypoGraphy';

export function Article() {
  const { t } = useTranslation('article');

  return (
    <>
      <Heading text={t('heading-articles')} />
      <Text text={t('description-articles')} />
    </>
  );
}
