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
import { Text } from '../TypoGraphy';
import { HStack } from '../Layouts';
import { Modal, ModalProps } from '../Modal';
import { IconButton } from '../Forms/IconButton';

type MenubarType = 'MENU' | 'CONTACT';

/**
 * The drawer of menu bar.
 */
export function MenuBarDrawer() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const { isDrawerOpen, onDrawerClose, onModalOpen } = useDisclosureStore();

  const [menuBarType, setMenuBarType] = useState<MenubarType>('MENU');
  const [openModal, setOpenModal] = useState<ModalProps | undefined>();

  useEffect(() => {
    return () => {
      if (menuBarType === 'CONTACT') setMenuBarType('MENU');
    };
  }, []);

  return (
    <>
      <ChakraDrawer
        placement="left"
        size={['full', 'full', 'full', 'sm']}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HStack justifyContent="space-between" className="h-64 px-20">
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
                  setOpenModal({
                    // TODO: Login modal
                    title: 'Login',
                    description: 'Login description',
                    mainContent: <div>Main content</div>,
                  });
                }
              }}
            />
          </HStack>

          <DrawerBody>
            {menuBarType === 'CONTACT' ? (
              <MobileContactContent />
            ) : (
              <MenubarContent />
            )}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>

      {openModal && (
        <Modal resetAction={() => setOpenModal(undefined)} {...openModal} />
      )}
    </>
  );
}

/**
 * A UI component to render the menu bar drawer content in mobile view.
 */
function MenubarContent() {
  return <div>Menubar Content</div>;
}

/**
 * A UI component to render the contact drawer content in mobile view.
 */
function MobileContactContent() {
  const { t } = useTranslation(['navigation-bar']);

  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector((state: RootState) => state.auth);

  const { onDrawerClose } = useDisclosureStore();

  return (
    <>
      <MobileNavigationItem
        iconType="PHONE"
        label={userProfile?.phoneNumber || ''}
        variant="dark"
      />
      <MobileNavigationItem iconType="USER" label={t('item-account-info')} />
      <MobileNavigationItem
        iconType="ARCHIVE_BOX"
        label={t('item-shopping-history')}
      />
      <MobileNavigationItem
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

interface MobileNavigationItemProps {
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
 * A UI component to render the naviation item in mobile view.
 */
function MobileNavigationItem({
  label,
  variant = 'light',
  iconType,
  action,
}: MobileNavigationItemProps) {
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
