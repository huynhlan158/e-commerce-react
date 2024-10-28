import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import routes from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { useConfigByKey } from '~/services/config/resources';
import { ConfigKeys } from '~/services/config/models/Keys';
import { useMyCart } from '~/services/cart/resources';

import { StyleProps } from '~/types/Styles';
import { Stack } from './Stack';
import { Button } from '../Forms';
import { Icon } from '../Icons';
import { Drawer, useDrawer } from '../Drawer';
import { Text } from '../TypoGraphy';
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
  } = useNavbarItems();

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: config } = useConfigByKey(ConfigKeys.SHIPMENT);

  return (
    <Stack>
      <Stack
        justifyContent="center"
        alignItems="center"
        direction="row"
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
      </Stack>

      <Stack
        direction="row"
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
          <Stack
            direction="row"
            gap={32}
            alignItems="center"
            className="desktop:flex-1"
          >
            {leftItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>

          <Stack direction="row">
            {centerItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            gap={32}
            className="desktop:flex-1"
          >
            {rightItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>
        </div>

        {/* Tablet and Mobile navigation bar */}
        <div
          className={clsx(
            'flex justify-between items-center laptop:hidden',
            'w-full h-full px-20'
          )}
        >
          <Stack
            direction="row"
            alignItems="center"
            gap={12}
            className="flex-1"
          >
            {mobileLeftItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>

          <Stack direction="row">
            {centerItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            gap={20}
            className="flex-1"
          >
            {mobileRightItems.map((item, idx) => (
              <NavbarItem key={idx} {...item} />
            ))}
          </Stack>
        </div>
      </Stack>

      <Drawer header="header" body={<span>body</span>} />
    </Stack>
  );
}

interface NavbarItemProps extends StyleProps {
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

/**
 * A custom hook to get the list for the main menu of the navigation bar.
 */
function useNavbarItems(): {
  leftItems: NavbarItemProps[];
  mobileLeftItems: NavbarItemProps[];
  centerItems: NavbarItemProps[];
  rightItems: NavbarItemProps[];
  mobileRightItems: NavbarItemProps[];
} {
  const { t } = useTranslation(['navigation-bar', 'common']);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();
  const { onOpen } = useDrawer();

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: myCart } = useMyCart();

  const leftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="lg" type="MAGNIFYING_GLASS" />,
        action: onOpen,
      },
      {
        content: t('navbar-products'),
        action: () => {},
      },
      {
        content: t('navbar-promotion'),
        action: () => {},
      },
      {
        content: t('navbar-cocoon'),
        action: () => {},
      },
      {
        action: () => navigate(routes.article),
        content: t('navbar-articles'),
      },
    ],
    []
  );

  const mobileLeftItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="2xl" type="BARS_2" />,
        action: () => {},
      },
    ],
    []
  );

  const centerItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <img src={headingLogo} className="h-60 laptop:h-full" />,
        action: () => navigate(routes.home),
      },
    ],
    []
  );

  const rightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: isAuthenticated ? t('navbar-account') : t('navbar-login'),
        action: () => {},
      },
      {
        content: t('navbar-contact'),
        action: () => {},
      },
      {
        content: `${t('navbar-cart')}${myCart?.items.length ? ' (' + myCart?.items.length + ')' : ''}`,
        action: () => {},
      },
      {
        content: t('language-vi', { ns: 'common' }),
        action: () => {},
      },
    ],
    [isAuthenticated]
  );

  const mobileRightItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: <Icon size="lg" type="MAGNIFYING_GLASS" />,
        action: () => {},
      },
      {
        content: (
          <Stack direction="row" gap={4} alignItems="center">
            <Icon size="lg" type="SHOPPING_BAG" />
            <Text text={`(${myCart?.items.length})`} />
          </Stack>
        ),
        action: () => {},
      },
    ],
    [isAuthenticated, myCart]
  );

  return {
    leftItems,
    mobileLeftItems,
    centerItems,
    rightItems,
    mobileRightItems,
  };
}
