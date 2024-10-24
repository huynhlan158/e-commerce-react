import { ReactNode } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDrawer } from './useDrawer';

interface DrawerProps {
  /**
   * The position from which the drawer slides out.
   * @default 'left'
   */
  placement?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * The header text of the drawer.
   */
  header: string;
  /**
   * The body content of the drawer.
   */
  body: ReactNode;
}

/**
 * A UI component to show a panel that slides out from the edge of the screen.
 */
export function Drawer({ placement = 'left', header, body }: DrawerProps) {
  const { isOpen, onClose } = useDrawer();

  return (
    <ChakraDrawer placement={placement} isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{header}</DrawerHeader>

        <DrawerBody>{body}</DrawerBody>

        {/* <DrawerFooter>
          <Button label="Cancel" variant="outline" mr={3} onClick={onClose} />
          <Button label="Save" colorScheme="blue" />
        </DrawerFooter> */}
      </DrawerContent>
    </ChakraDrawer>
  );
}
