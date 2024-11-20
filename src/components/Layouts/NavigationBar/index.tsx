import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { useConfigByKey } from '~/services/config/resources';
import { ConfigKeys } from '~/services/config/models/Keys';

import { Button } from '~/components/Forms';
import { Text } from '~/components/TypoGraphy';
import { MenuDrawer } from '~/components/Drawer/MenuDrawer';
import { Modal } from '~/components/Modal';
import { useNavbar } from './useNavbar';
import { NavbarItem } from './NavbarItem';
import { HStack, Stack } from '../Stack';

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
  } = useNavbar();
  const { isDrawerOpen, isModalOpen } = useDisclosureStore();

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: config } = useConfigByKey(ConfigKeys.SHIPMENT);

  return (
    <>
      <Stack
        className={clsx(
          'laptop:z-[1500]',
          'fixed top-0 left-0 right-0',
          'transition-transform duration-300'
          // TODO: toggle the navigation bar visibility on scrolling up and down.
          // visible ? 'translate-y-0' : 'translate-y-full'
        )}
      >
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
          {/* Desktop and Laptop navigation bar. */}
          <div
            className={clsx(
              'hidden laptop:flex justify-between items-center',
              'w-full h-full px-40'
            )}
          >
            <HStack gap={32} alignItems="center">
              {leftItems.map((item, idx) => (
                <NavbarItem key={idx} {...item} />
              ))}
            </HStack>

            <HStack>
              {centerItems.map((item, idx) => (
                <NavbarItem key={idx} {...item} />
              ))}
            </HStack>

            <HStack alignItems="center" justifyContent="flex-end" gap={32}>
              {rightItems.map((item, idx) => (
                <NavbarItem key={idx} {...item} />
              ))}
            </HStack>
          </div>

          {/* Tablet and Mobile navigation bar. */}
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
      </Stack>

      {isDrawerOpen && <MenuDrawer />}

      {/* TODO: Login modal */}
      {isModalOpen && (
        <Modal
          title="Login"
          description="Login description"
          mainContent={<div>Login content</div>}
        />
      )}
    </>
  );
}
