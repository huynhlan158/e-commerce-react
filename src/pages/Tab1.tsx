import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Tab1Item } from '~/services/tab1/models/tab1Item';
import { getTab1Items } from '~/services/tab1/fetch.tab1';
import { LoadingState } from '~/components/Layouts';
import { Heading, Text } from '~/components/TypoGraphy';

export function Tab1() {
  const { t } = useTranslation();

  const [items, setItems] = useState<Tab1Item[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const tab1Items = await getTab1Items();
      setItems(tab1Items);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Heading text={t('navbar-tab1')} />

      {items.map((item) => (
        <div key={item.id}>
          <Heading level={5} text={item.name} size="sm" />
          <Text text={item.description} />
        </div>
      ))}

      {isLoading && <Text text={t('loading-state')} />}

      {isLoading && <LoadingState />}
    </>
  );
}
