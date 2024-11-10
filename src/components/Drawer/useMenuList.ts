import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '~/state/store';
import { NavbarItemId } from '~/state/navigation/navigationSlice';

// TODO: fetching API (categories)
export function useMenuList(): {
  title: string;
  data: {
    title: string;
    action?: () => void;
    data?: { title: string; action: () => void }[];
  }[];
}[] {
  const { t } = useTranslation(['navigation-bar']);
  const { activeNavbar } = useSelector((state: RootState) => state.navigation);

  const productsMenuList = {
    title: t('navbar-products'),
    data: [
      {
        title: t('navbar-product-new'),
        action: () => {},
      },
      {
        title: t('navbar-product-skin-care'),
        data: [
          {
            title: t('navbar-all'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-sunscreen'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-makeup-remover'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-cleanser'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-facial-exfoliation'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-mask'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-balancing-water'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-serum'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-cream'),
            action: () => {},
          },
          {
            title: t('navbar-skin-care-mineral-spray'),
            action: () => {},
          },
        ],
      },
      {
        title: t('navbar-product-body-lotion'),
        data: [
          {
            title: t('navbar-all'),
            action: () => {},
          },
          {
            title: t('navbar-body-lotion-body-scrub'),
            action: () => {},
          },
          {
            title: t('navbar-body-lotion-shower-gel'),
            action: () => {},
          },
          {
            title: t('navbar-body-lotion-body-spray'),
            action: () => {},
          },
          {
            title: t('navbar-body-lotion-body-care'),
            action: () => {},
          },
        ],
      },
    ],
  };

  switch (activeNavbar) {
    case NavbarItemId.NAVBAR_MOBILE_MENU:
      return [productsMenuList];
    default:
      return [];
  }
}
