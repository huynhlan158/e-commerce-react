import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab1Item } from '~/services/tab1/models/tab1Item';
import { getTab1Items } from '~/services/tab1/tab1.server';
import { MainContent, MainLayout, NavigationBar } from '~/components/Layouts';
import { Heading, Text } from '~/components/TypoGraphy';

export function Tab1() {
  const { t } = useTranslation();

  const [items, setItems] = useState<Tab1Item[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const tab1Items = await getTab1Items();
      setItems(tab1Items);
    };
    fetchApi();
  }, []);

  return (
    <MainLayout>
      <NavigationBar />
      <MainContent>
        <Heading text={t('navbar-tab1')} />
        {items.map((item) => (
          <div key={item.id}>
            <Heading level={5} text={item.name} />
            <Text text={item.description} />
          </div>
        ))}
      </MainContent>
    </MainLayout>
  );
}
