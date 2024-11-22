import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';

import { Icon } from '~/components/Icons';
import { IconButton } from '~/components/Forms/IconButton';

/**
 * A UI component to render the shipping policy in a drawer.
 */
export function ShippingPolicyDrawer() {
  const { isDrawerOpen, onDrawerClose } = useDisclosureStore();

  return (
    <ChakraDrawer
      placement="left"
      size="lg"
      isOpen={isDrawerOpen}
      onClose={onDrawerClose}
    >
      <DrawerOverlay />

      <DrawerContent className="relative">
        <IconButton
          aria-label="Close"
          variant="ghost"
          size="md"
          icon={<Icon size="2xl" type="X_MARK" />}
          onClick={onDrawerClose}
          className="absolute z-[1500] right-24 top-24"
        />

        <DrawerHeader>
          <span>Shipping Policy Drawer</span>
        </DrawerHeader>

        <DrawerBody zIndex={100}></DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}
