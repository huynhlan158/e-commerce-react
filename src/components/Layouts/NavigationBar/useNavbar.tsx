import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import routes from '~/config/routes';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import {
  NavbarItemId,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useMyCart } from '~/services/cart/resources';
import { useCategoryById } from '~/services/config/resources';
import { CategoryUnitId } from '~/services/config/models/Category';

import { Icon } from '~/components/Icons';
import { Text } from '~/components/TypoGraphy';
import { NavbarItemProps } from './NavbarItem';
import { HStack } from '../Stack';
import headingLogo from '/images/logo-heading.png';

/**
 * A custom hook to get the list for the main menu of the navigation bar.
 */
export function useNavbar(): {
  leftItems: NavbarItemProps[];
  mobileLeftItems: NavbarItemProps[];
  centerItems: NavbarItemProps[];
  rightItems: NavbarItemProps[];
  mobileRightItems: NavbarItemProps[];
} {
  const navigate = useNavigate();
  const { t } = useTranslation(['navigation-bar', 'common']);

  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const { onDrawerOpen } = useDisclosureStore();

  // TODO: move these API calls to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: myCart } = useMyCart();
  const { data: productCategories } = useCategoryById(CategoryUnitId.PRODUCTS);

  const leftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="xl" type="MAGNIFYING_GLASS" />,
        action: () => {
          onDrawerOpen();
          dispatch(setNavigationPath([{ id: NavbarItemId.SEARCH }]));
        },
      },
      {
        content: t('navbar-products'),
        action: () => {
          onDrawerOpen();
          dispatch(
            setNavigationPath([
              {
                id: NavbarItemId.PRODUCTS,
                selectedCategory: productCategories,
              },
            ])
          );
        },
        isActive: navigationPath[0]?.id === NavbarItemId.PRODUCTS,
      },
      {
        content: t('navbar-promotion'),
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.PROMOTION }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.PROMOTION,
      },
      {
        content: t('navbar-cocoon'),
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.COCOON }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.COCOON,
      },
      {
        action: () => {
          navigate(routes.article);
          dispatch(setNavigationPath([{ id: NavbarItemId.ARTICLES }]));
        },
        content: t('navbar-articles'),
        isActive: navigationPath[0]?.id === NavbarItemId.ARTICLES,
      },
    ],
    [navigationPath, productCategories]
  );

  const mobileLeftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="3xl" type="BARS_2" />,
        action: () => {
          onDrawerOpen();
          dispatch(
            setNavigationPath([
              {
                id: NavbarItemId.PRODUCTS,
                selectedCategory: productCategories,
              },
            ])
          );
        },
      },
    ],
    [productCategories]
  );

  const centerItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <img src={headingLogo} className="h-60 laptop:h-full" />,
        action: () => {
          navigate(routes.home);
          dispatch(setNavigationPath([]));
        },
      },
    ],
    []
  );

  const rightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: isAuthenticated ? t('navbar-account') : t('navbar-login'),
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.ACCOUNT }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.ACCOUNT,
      },
      {
        content: t('navbar-contact'),
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.CONTACT }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.CONTACT,
      },
      {
        content: `${t('navbar-cart')}${myCart?.items.length ? ' (' + myCart?.items.length + ')' : ''}`,
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.SHOPPING_CART }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.SHOPPING_CART,
      },
      {
        content: t('language-vi', { ns: 'common' }),
        action: () => {},
        isActive: true,
      },
    ],
    [isAuthenticated, navigationPath]
  );

  const mobileRightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="xl" type="MAGNIFYING_GLASS" />,
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.CONTACT }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.CONTACT,
      },
      {
        content: (
          <HStack gap={4} alignItems="center">
            <Icon size="xl" type="SHOPPING_BAG" />
            {myCart?.items.length && (
              <Text text={`(${myCart?.items.length})`} />
            )}
          </HStack>
        ),
        action: () => {
          dispatch(setNavigationPath([{ id: NavbarItemId.SHOPPING_CART }]));
        },
        isActive: navigationPath[0]?.id === NavbarItemId.SHOPPING_CART,
      },
    ],
    [myCart, navigationPath]
  );

  return {
    leftItems,
    mobileLeftItems,
    centerItems,
    rightItems,
    mobileRightItems,
  };
}
