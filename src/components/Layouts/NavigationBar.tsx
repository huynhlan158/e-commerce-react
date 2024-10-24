import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Bars3Icon } from '@heroicons/react/24/outline';

import routes from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { useConfigByKey } from '~/services/config/resources';
import { ConfigKeys } from '~/services/config/models/Config';

import { Stack } from './Stack';
import { Button } from '../Forms';
import { Icon } from '../Icons';
import { Drawer, useDrawer } from '../Drawer';
import headingLogo from '/images/logo-heading.png';

/**
 * The main navigation bar that allow users to switch to different tabs.
 */
export function NavigationBar() {
  const { t } = useTranslation('navigation-bar');
  const { guests, users } = useNavbarItems();
  const { isAuthenticated } = useAuthStore();

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
        className={clsx('bg-gray-900 text-peach-200', 'py-6')}
      >
        <Button
          size="sm"
          variant="ghost"
          lableVariant="light"
          label={t('action-free-ship', {
            price:
              config?.key === ConfigKeys.SHIPMENT
                ? config.data.freeShipPrice
                : '',
          })}
          onClick={() => {
            //TODO: open modal
          }}
        />

        <span className="select-none">+</span>
      </Stack>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className={clsx(
          'w-full bg-peach-200 py-4 laptop:py-0',
          'border-b-[0.5px] border-beige-200'
        )}
      >
        <div
          className={clsx(
            'hidden laptop:flex laptop:justify-between laptop:items-center',
            'w-full max-h-60 px-40'
          )}
        >
          {isAuthenticated
            ? users.map((navbar, idx) => (
                <NavbarItem {...navbar} key={idx} isActive={false} />
              ))
            : guests.map((navbar, idx) => (
                <NavbarItem {...navbar} key={idx} isActive={false} />
              ))}
        </div>

        <Bars3Icon className="block size-20 tablet:hidden text-brown-600" />

        {/* {isAuthenticated ? (
          <Menu>
            <MenuButton
              p={[4, 6]}
              borderRadius="50%"
              border="1px"
              borderColor="transparent"
              _hover={{ bg: 'gray.200' }}
              _expanded={{
                bg: 'gray.100',
                borderColor: 'gray.400',
              }}
            >
              <Avatar size="xs" name={userProfile?.fullName} src="" />
            </MenuButton>

            <MenuList>
              <MenuItem onClick={() => authDispatch(logOut())}>
                {t('logout')}
              </MenuItem>
            </MenuList>
          </Menu>
        ) : activeUrl !== routes.login ? (
          <Button
            variant={['ghost', 'outline']}
            label={t('login')}
            onClick={() => navigate(routes.login)}
          />
        ) : undefined} */}
      </Stack>

      <Drawer header="header" body={<span>body</span>} />
    </Stack>
  );
}

interface NavbarItemProps {
  /**
   * The main content of the navbar item.
   */
  content: string | ReactNode;
  /**
   * The handler for onClick event of the navbar item.
   */
  action: () => void;
  /**
   * Whether the nave.
   */
  isActive?: boolean;
}

/**
 * A UI component for a navbar item.
 */
function NavbarItem({ action, content, isActive }: NavbarItemProps) {
  switch (typeof content) {
    case 'string':
      return (
        <Button variant="ghost" size="md" label={content} onClick={action} />
      );
    default:
      return (
        <button onClick={action} className="text-16 h-fit">
          {content}
        </button>
      );
  }
}

/**
 * A custom hook to get the list for the main menu of the navigation bar.
 */
function useNavbarItems(): {
  [x: string]: NavbarItemProps[];
} {
  const { t } = useTranslation(['navigation-bar', 'common']);
  const navigate = useNavigate();
  const { onOpen } = useDrawer();

  const baseItems: NavbarItemProps[] = useMemo(
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
      {
        content: <img src={headingLogo} />,
        action: () => navigate(routes.home),
      },
    ],
    []
  );

  const otherItems: NavbarItemProps[] = useMemo(
    () => [
      {
        content: t('navbar-contact'),
        action: () => {},
      },
      {
        content: t('navbar-cart'),
        action: () => {},
      },
      {
        content: t('language-vi', { ns: 'common' }),
        action: () => {},
      },
    ],
    []
  );

  return {
    guests: [
      ...baseItems,
      {
        content: t('navbar-login'),
        action: () => {},
      },
      ...otherItems,
    ],
    users: [
      ...baseItems,
      {
        content: t('navbar-account'),
        action: () => {},
      },
      ...otherItems,
    ],
  };
}
