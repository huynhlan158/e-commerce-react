import { useTranslation } from 'react-i18next';
import { MainContent, MainLayout, NavigationBar } from '~/components/Layouts';
import { Heading, Text } from '~/components/TypoGraphy';

export function Tab3() {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <NavigationBar />
      <MainContent>
        <Heading text={t('navbar-tab3')} />
        <Text text={t('navbar-tab3')} />
      </MainContent>
    </MainLayout>
  );
}
