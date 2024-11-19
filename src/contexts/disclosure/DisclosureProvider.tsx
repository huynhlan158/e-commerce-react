import { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useDisclosure } from '@chakra-ui/react';

import { AppDispatch } from '~/state/store';
import {
  setCategoryIdForProductList,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import DisclosureContext from './DisclosureContext';

function DisclosureProvider({ children }: { children?: ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();

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

  useEffect(() => {
    if (!isDrawerOpen) {
      // Reset the navigation states
      dispatch(setNavigationPath([]));
      dispatch(setCategoryIdForProductList(null));
    }
  }, [isDrawerOpen]);

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
