import { useTranslation } from 'react-i18next';
import { Heading, Text } from '~/components/TypoGraphy';

import { MainContent, MainLayout, NavigationBar } from '~/components/Layouts';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <NavigationBar />
      <MainContent>
        <Heading text={t('welcome')} />
        <Text text={t('welcome')} />
      </MainContent>
    </MainLayout>
  );
}
