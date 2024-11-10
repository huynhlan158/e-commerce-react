import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import { logOut } from '~/state/auth/authSlice';

import { Icon, IconType } from '../Icons';
import { HStack, VStack } from '../Layouts';
import { IconButton } from '../Forms/IconButton';
import { Button } from '../Forms';
import { Modal } from '../Modal';
import { Text } from '../TypoGraphy';
import { useMenuList } from './useMenuList';

type MenubarType = 'MENU' | 'CONTACT';

/**
 * The drawer of menu bar in mobile view.
 */
export function MobileMenuDrawer() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const { isDrawerOpen, onDrawerClose, onModalOpen } = useDisclosureStore();

  const [menuBarType, setMenuBarType] = useState<MenubarType>('MENU');

  useEffect(() => {
    return () => {
      if (menuBarType === 'CONTACT') setMenuBarType('MENU');
    };
  }, []);

  return (
    <>
      <ChakraDrawer
        placement="left"
        size="full"
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent className="px-20">
          <HStack justifyContent="space-between" className="h-64">
            <HStack gap={28}>
              <IconButton
                aria-label="Close"
                variant="ghost"
                size="md"
                icon={<Icon size="2xl" type="X_MARK" />}
                onClick={onDrawerClose}
              />
              {menuBarType === 'CONTACT' && (
                <IconButton
                  aria-label="Back"
                  variant="ghost"
                  size="md"
                  icon={<Icon size="lg" type="ARROW_LEFT" />}
                  onClick={() => setMenuBarType('MENU')}
                />
              )}
            </HStack>
            <IconButton
              aria-label="User"
              variant="ghost"
              size="md"
              icon={
                <Icon
                  size="2xl"
                  type="USER"
                  iconColorClassname={clsx(
                    menuBarType === 'CONTACT' && 'text-gold-500'
                  )}
                />
              }
              onClick={() => {
                if (isAuthenticated) {
                  setMenuBarType('CONTACT');
                } else {
                  onDrawerClose();
                  onModalOpen();
                }
              }}
            />
          </HStack>

          <DrawerBody>
            {menuBarType === 'CONTACT' ? (
              <MobileContactContent />
            ) : (
              <MobileMenuContent />
            )}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>

      {/* TODO: Login modal */}
      <Modal
        title="Login"
        description="Login description"
        mainContent={<div>Main content</div>}
      />
    </>
  );
}

/**
 * A UI component to render the menu content in mobile view.
 */
function MobileMenuContent() {
  const menuList = useMenuList();

  return (
    <>
      {menuList.map((menu) => (
        <VStack alignItems="flex-start" key={menu.title} gap={12}>
          <Button
            variant="ghost"
            label={menu.title}
            lableWeight="bold"
            className="leading-26"
          />
          {menu.data.map((item) => (
            <Button
              variant="ghost"
              size="xl"
              label={item.title}
              key={item.title}
              className="leading-26 text-gray-500"
            />
          ))}
        </VStack>
      ))}
    </>
  );
}

/**
 * A UI component to render the contact content in mobile view.
 */
function MobileContactContent() {
  const { t } = useTranslation(['navigation-bar']);

  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector((state: RootState) => state.auth);

  const { onDrawerClose } = useDisclosureStore();

  return (
    <>
      <MobileAccountDetail
        iconType="PHONE"
        label={userProfile?.phoneNumber || ''}
        variant="dark"
      />
      <MobileAccountDetail iconType="USER" label={t('item-account-info')} />
      <MobileAccountDetail
        iconType="ARCHIVE_BOX"
        label={t('item-shopping-history')}
      />
      <MobileAccountDetail
        iconType="ARROW_RIGHT_START_ON_RECTANGLE"
        label={t('item-log-out')}
        action={() => {
          onDrawerClose();
          dispatch(logOut());
        }}
      />
    </>
  );
}

interface MobileAccountDetailProps {
  /**
   * The label of the navigation item.
   */
  label: string;
  /**
   * The icon type of the navigation item.
   */
  iconType: IconType;
  /**
   * The variant of the icon.
   * @default 'light'
   */
  variant?: 'dark' | 'light';
  /**
   * The handler for onClick event of the navbar item.
   */
  action?: () => void;
}

/**
 * A UI component to render the account detail item in mobile view.
 */
function MobileAccountDetail({
  label,
  variant = 'light',
  iconType,
  action,
}: MobileAccountDetailProps) {
  return (
    <HStack
      className={clsx(
        'px-22 py-24',
        variant === 'dark'
          ? 'bg-gray-900 text-peach-200'
          : 'hover:bg-peach-400',
        action && 'cursor-pointer'
      )}
      gap={24}
      alignItems="center"
      onClick={action}
    >
      <Icon
        size="md"
        type={iconType}
        iconColorClassname={clsx(variant === 'dark' && 'text-peach-200')}
      />
      <Text size="md" text={label} className="font-600" />
    </HStack>
  );
}
