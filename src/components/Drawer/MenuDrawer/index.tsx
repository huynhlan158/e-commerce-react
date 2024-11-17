import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useMediaQuery,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import {
  setNavigationPath,
  setProductsByCategory,
} from '~/state/navigation/navigationSlice';

import { Icon } from '~/components/Icons';
import { HStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { Modal } from '~/components/Modal';
import { ContactContent } from './ContactContent';
import { MenuContent } from './MenuContent';

type MobileMenuType = 'MENU' | 'CONTACT';

/**
 * The menu drawer of the navigation.
 */
export function MenuDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const { isDrawerOpen, onDrawerClose, onModalOpen } = useDisclosureStore();

  const [menuType, setMenuType] = useState<MobileMenuType>('MENU');

  useEffect(() => {
    return () => {
      if (menuType === 'CONTACT') setMenuType('MENU');
    };
  }, []);

  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

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
          <HStack
            justifyContent="space-between"
            className="h-64 laptop:mt-96 desktop:mt-128 px-20"
          >
            <HStack gap={28} className="w-full laptop:justify-end">
              <IconButton
                aria-label="Close"
                variant="ghost"
                size="md"
                icon={<Icon size="2xl" type="X_MARK" />}
                onClick={onDrawerClose}
              />
              {(menuType === 'CONTACT' || navigationPath[1]) && !isLaptop && (
                <IconButton
                  aria-label="Back"
                  variant="ghost"
                  size="md"
                  icon={<Icon size="lg" type="ARROW_LEFT" />}
                  onClick={() => {
                    if (menuType === 'CONTACT') {
                      setMenuType('MENU');
                    } else if (navigationPath.length) {
                      const newNavigationPath = navigationPath.slice(0, -1);
                      dispatch(setNavigationPath(newNavigationPath));
                      dispatch(setProductsByCategory(null));
                    }
                  }}
                />
              )}
            </HStack>
            <IconButton
              className="laptop:hidden"
              aria-label="User"
              variant="ghost"
              size="md"
              icon={
                <Icon
                  size="2xl"
                  type="USER"
                  iconColorClassname={clsx(
                    menuType === 'CONTACT' && 'text-gold-500'
                  )}
                />
              }
              onClick={() => {
                if (isAuthenticated) {
                  setMenuType('CONTACT');
                } else {
                  onDrawerClose();
                  onModalOpen();
                }
              }}
            />
          </HStack>

          <DrawerBody>
            {menuType === 'CONTACT' ? <ContactContent /> : <MenuContent />}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>

      {/* TODO: Login modal */}
      <Modal
        title="Login"
        description="Login description"
        mainContent={<div>Login content</div>}
      />
    </>
  );
}
