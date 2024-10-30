import { useDisclosure } from '@chakra-ui/react';

// TODO: should replace by Redux.

/**
 * A custom hook that returns handlers and open state for the Drawer component.
 */
export function useDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return { isOpen, onOpen, onClose };
}
