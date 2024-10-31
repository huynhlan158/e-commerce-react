import {
  Drawer as ChakraDrawer,
  DrawerProps,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  HStack,
} from '@chakra-ui/react';

import { Icon } from '../Icons';
import { IconButton } from '../Forms/IconButton';

/**
 * The drawer of menu bar.
 */
export function MenuBarDrawer({
  isOpen = false,
  onClose = () => null,
}: Partial<DrawerProps>) {
  return (
    <ChakraDrawer
      placement="left"
      size={['full', 'xs']}
      isOpen={isOpen}
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <HStack justifyContent="space-between" className="h-64 px-20">
          <IconButton
            aria-label="Close"
            variant="ghost"
            size="md"
            icon={<Icon size="xl" type="X_MARK" />}
            onClick={onClose}
          />
          <IconButton
            aria-label="Close"
            variant="ghost"
            size="md"
            icon={<Icon size="xl" type="USER" />}
          />
        </HStack>

        <DrawerBody>body</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
}
