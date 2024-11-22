import clsx from 'clsx';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@chakra-ui/react';

import { AppDispatch, RootState } from '~/state/store';
import {
  NavbarItemId,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { useConfigByKey } from '~/services/config/resources';
import { ConfigKeys } from '~/services/config/models/Keys';
import { CategoryUnitId } from '~/services/config/models/Category';

import { Button } from '~/components/Forms';
import { Text } from '~/components/TypoGraphy';
import { Modal } from '~/components/Overlay/Modal';
import { useNavbar } from './useNavbar';
import { NavbarItem } from './NavbarItem';
import { HStack, Stack } from '../Stack';

/**
 * The main navigation bar that allow users to switch between different tabs.
 */
export function NavigationBar() {
  const { t } = useTranslation(['navigation-bar', 'policy']);
  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );
  const {
    leftItems,
    mobileLeftItems,
    centerItems,
    rightItems,
    mobileRightItems,
  } = useNavbar();

  // TODO: move this API call to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: config } = useConfigByKey(ConfigKeys.SHIPMENT);

  const { isModalOpen, onDrawerOpen } = useDisclosureStore();
  const [isLaptop] = useMediaQuery('(min-width: 1024px)');
  const isSpecialCategory = useMemo(() => {
    return [
      CategoryUnitId.PRODUCTS,
      CategoryUnitId.PROBLEMS,
      CategoryUnitId.INGREDIENTS,
      CategoryUnitId.BRAND,
    ].includes(navigationPath[0]?.id as CategoryUnitId);
  }, [navigationPath[0]]);

  return (
    <>
      <Stack
        className={clsx(
          'fixed top-0 left-0 right-0',
          'transition-transform duration-300',
          isSpecialCategory && 'laptop:z-[1500]'
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
            onClick={() => {
              onDrawerOpen();
              dispatch(setNavigationPath([{ id: NavbarItemId.SHIPPING }]));
            }}
            label={t(
              isLaptop
                ? 'action-free-ship--laptop'
                : 'action-free-ship--mobile',
              {
                ns: 'policy',
                price:
                  config?.key === ConfigKeys.SHIPMENT
                    ? config.data.freeShipPrice
                    : '',
              }
            )}
          />

          <Text text="+" size="sm" className="select-none" />
        </HStack>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          className={clsx(
            'DeviderBottom',
            'w-full h-60 desktop:h-86 bg-peach-200'
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
