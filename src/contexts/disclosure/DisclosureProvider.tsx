import { ReactNode } from 'react';
import { useDisclosure } from '@chakra-ui/react';

import DisclosureContext from './DisclosureContext';

function DisclosureProvider({ children }: { children?: ReactNode }) {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  return (
    <DisclosureContext.Provider
      value={{
        isDrawerOpen,
        onDrawerOpen,
        onDrawerClose,
        isModalOpen,
        onModalOpen,
        onModalClose,
      }}
    >
      {children}
    </DisclosureContext.Provider>
  );
}

export default DisclosureProvider;
