import clsx from 'clsx';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { useMyCart } from '~/services/cart/resources';

import { Icon } from '~/components/Icons';
import { HStack, VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { Text } from '~/components/TypoGraphy';

/**
 * A UI component to render the user's shopping cart in a drawer.
 */
export function ShoppingCartDrawer() {
  const { t } = useTranslation('navigation-bar');

  // TODO: move these API calls to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: myCart } = useMyCart();

  const { isDrawerOpen, onDrawerClose } = useDisclosureStore();

  return (
    <ChakraDrawer
      placement="right"
      size="lg"
      isOpen={isDrawerOpen}
      onClose={onDrawerClose}
    >
      <DrawerOverlay />

      <DrawerContent>
        <DrawerHeader
          px={44}
          py={26}
          className={clsx('DeviderBottom', 'flex justify-between items-center')}
        >
          <HStack gap={4}>
            <Text weight={400} text={t('navbar-shopping-cart')} />
            {myCart?.items.length && (
              <Text weight={700} text={`(${myCart.items.length.toString()})`} />
            )}
          </HStack>

          <IconButton
            aria-label="Close"
            variant="ghost"
            size="md"
            icon={<Icon size="2xl" type="X_MARK" />}
            onClick={onDrawerClose}
          />
        </DrawerHeader>

        <DrawerBody zIndex={100}>
          <VStack
            alignItems="flex-start"
            gap={20}
            pb={36}
            className="CategoryWrapper"
          >
            {/* TODO: shopping cart for laptop view */}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}
