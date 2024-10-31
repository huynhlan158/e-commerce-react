import clsx from 'clsx';
import { ReactNode, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@chakra-ui/react';

import routes from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { useConfigByKey } from '~/services/config/resources';
import { ConfigKeys } from '~/services/config/models/Keys';
import { useMyCart } from '~/services/cart/resources';

import { StyleProps } from '~/types/Styles';
import { Button } from '../Forms';
import { Icon } from '../Icons';
import { MenuBarDrawer } from '../Drawer';
import { Text } from '../TypoGraphy';
import { HStack, Stack } from './Stack';
import headingLogo from '/images/logo-heading.png';

/**
 * The main navigation bar that allow users to switch to different tabs.
 */
export function NavigationBar() {
  const { t } = useTranslation('navigation-bar');
  const {
    leftItems,
    mobileLeftItems,
    centerItems,
    rightItems,
    mobileRightItems,
    isDrawerOpen,
    onDrawerClose,
  } = useNavbar();

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: config } = useConfigByKey(ConfigKeys.SHIPMENT);

  return (
    <Stack>
      <HStack
        justifyContent="center"
        alignItems="center"
        gap={16}
        className={clsx('bg-gray-900 text-peach-200', 'h-32 desktop:h-44')}
      >
        <Button
          size="sm"
          variant="ghost"
          lableVariant="light"
          className="laptop:hidden"
          onClick={() => {}}
          label={t('action-free-ship--mobile', {
            price:
              config?.key === ConfigKeys.SHIPMENT
                ? config.data.freeShipPrice
                : '',
          })}
        />

        <Button
          size="sm"
          variant="ghost"
          lableVariant="light"
          className="hidden laptop:block"
          onClick={() => {}}
          label={t('action-free-ship--laptop', {
            price:
              config?.key === ConfigKeys.SHIPMENT
                ? config.data.freeShipPrice
                : '',
          })}
        />

        <Text text="+" size="sm" className="select-none" />
      </HStack>

      <HStack
        justifyContent="space-between"
        alignItems="center"
        className={clsx(
          'w-full h-60 desktop:h-86 bg-peach-200',
          'border-b-[0.5px] border-beige-200'
        )}
      >
        {/* Desktop and Laptop navigation bar */}
        <div
          className={clsx(
            'hidden laptop:flex laptop:justify-between laptop:items-center',
            'w-full h-full px-40'
          )}
        >
          <HStack gap={32} alignItems="center" className="desktop:flex-1">
            {leftItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>

          <HStack>
            {centerItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>

          <HStack
            alignItems="center"
            justifyContent="flex-end"
            gap={32}
            className="desktop:flex-1"
          >
            {rightItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>
        </div>

        {/* Tablet and Mobile navigation bar */}
        <div
          className={clsx(
            'flex justify-center items-center laptop:hidden',
            'w-full h-full'
          )}
        >
          <HStack alignItems="center" gap={12} className="absolute left-20">
            {mobileLeftItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>

          <HStack>
            {centerItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>

          <HStack
            alignItems="center"
            justifyContent="flex-end"
            gap={16}
            className="absolute right-20"
          >
            {mobileRightItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </HStack>
        </div>
      </HStack>

      <MenuBarDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
    </Stack>
  );
}

interface NavbarItemProps extends StyleProps {
  /**
   * The id of the navbar item to determine which navbar item should be highlighted as active.
   */
  activeId?: string;
  /**
   * The main content of the navbar item.
   */
  content: string | ReactNode;
  /**
   * The handler for onClick event of the navbar item.
   */
  action: () => void;
  /**
   * Whether the navbar item is currently active.
   * @default 'false'
   */
  isActive?: boolean;
}

/**
 * A UI component for a navbar item.
 */
function NavbarItem({
  action,
  content,
  isActive = false,
  className,
}: NavbarItemProps) {
  switch (typeof content) {
    case 'string':
      return (
        <Button
          variant="ghost"
          size="md"
          label={content}
          onClick={action}
          isActive={isActive}
          className={className}
        />
      );
    default:
      return (
        <button onClick={action} className={clsx('text-16 h-fit', className)}>
          {content}
        </button>
      );
  }
}

enum NavbarItemId {
  NAVBAR_PRODUCTS = 'NAVBAR_PRODUCTS',
  NAVBAR_PROMOTION = 'NAVBAR_PROMOTION',
  NAVBAR_COCOON = 'NAVBAR_COCOON',
  NAVBAR_ARTICLES = 'NAVBAR_ARTICLES',
  NAVBAR_ACCOUNT = 'NAVBAR_ACCOUNT',
  NAVBAR_CONTACT = 'NAVBAR_CONTACT',
  NAVBAR_SHOPPING_CART = 'NAVBAR_SHOPPING_CART',
  NAVBAR_LANGUAGE_VI = 'NAVBAR_LANGUAGE_VI',
  NAVBAR_LANGUAGE_EN = 'NAVBAR_LANGUAGE_EN',
}

/**
 * A custom hook to get the list for the main menu of the navigation bar.
 */
function useNavbar(): {
  leftItems: NavbarItemProps[];
  mobileLeftItems: NavbarItemProps[];
  centerItems: NavbarItemProps[];
  rightItems: NavbarItemProps[];
  mobileRightItems: NavbarItemProps[];
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
} {
  const { t } = useTranslation(['navigation-bar', 'common']);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const [activeNavbar, setActiveNavbar] = useState<NavbarItemId | null>(null);

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: myCart } = useMyCart();

  const leftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="lg" type="MAGNIFYING_GLASS" />,
        action: () => {
          onDrawerOpen();
          setActiveNavbar(null);
        },
      },
      {
        activeId: NavbarItemId.NAVBAR_PRODUCTS,
        content: t('navbar-products'),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_PRODUCTS);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_PRODUCTS,
      },
      {
        activeId: NavbarItemId.NAVBAR_PROMOTION,
        content: t('navbar-promotion'),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_PROMOTION);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_PROMOTION,
      },
      {
        activeId: NavbarItemId.NAVBAR_COCOON,
        content: t('navbar-cocoon'),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_COCOON);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_COCOON,
      },
      {
        activeId: NavbarItemId.NAVBAR_ARTICLES,
        action: () => {
          navigate(routes.article);
          setActiveNavbar(NavbarItemId.NAVBAR_ARTICLES);
        },
        content: t('navbar-articles'),
        isActive: activeNavbar === NavbarItemId.NAVBAR_ARTICLES,
      },
    ],
    [activeNavbar]
  );

  const mobileLeftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="2xl" type="BARS_2" />,
        action: () => {
          onDrawerOpen();
          setActiveNavbar(null);
        },
      },
    ],
    []
  );

  const centerItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <img src={headingLogo} className="h-60 laptop:h-full" />,
        action: () => {
          navigate(routes.home);
          setActiveNavbar(null);
        },
      },
    ],
    []
  );

  const rightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        activeId: NavbarItemId.NAVBAR_ACCOUNT,
        content: isAuthenticated ? t('navbar-account') : t('navbar-login'),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_ACCOUNT);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_ACCOUNT,
      },
      {
        activeId: NavbarItemId.NAVBAR_CONTACT,
        content: t('navbar-contact'),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_CONTACT);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_CONTACT,
      },
      {
        activeId: NavbarItemId.NAVBAR_SHOPPING_CART,
        content: `${t('navbar-cart')}${myCart?.items.length ? ' (' + myCart?.items.length + ')' : ''}`,
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_SHOPPING_CART);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_SHOPPING_CART,
      },
      {
        content: t('language-vi', { ns: 'common' }),
        action: () => {},
        isActive: true,
      },
    ],
    [isAuthenticated, activeNavbar]
  );

  const mobileRightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        activeId: NavbarItemId.NAVBAR_CONTACT,
        content: <Icon size="lg" type="MAGNIFYING_GLASS" />,
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_CONTACT);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_CONTACT,
      },
      {
        activeId: NavbarItemId.NAVBAR_SHOPPING_CART,
        content: (
          <HStack gap={4} alignItems="center">
            <Icon size="lg" type="SHOPPING_BAG" />
            <Text text={`(${myCart?.items.length})`} />
          </HStack>
        ),
        action: () => {
          setActiveNavbar(NavbarItemId.NAVBAR_SHOPPING_CART);
        },
        isActive: activeNavbar === NavbarItemId.NAVBAR_SHOPPING_CART,
      },
    ],
    [myCart, activeNavbar]
  );

  return {
    leftItems,
    mobileLeftItems,
    centerItems,
    rightItems,
    mobileRightItems,
    isDrawerOpen,
    onDrawerClose,
  };
}
