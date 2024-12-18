import { createContext } from 'react';

export interface DisclosureState {
  isDrawerOpen: boolean;
  onDrawerOpen: () => void;
  onDrawerClose: () => void;
  isModalOpen: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
}

export const initialState: DisclosureState = {
  isDrawerOpen: false,
  onDrawerOpen: () => null,
  onDrawerClose: () => null,
  isModalOpen: false,
  onModalOpen: () => null,
  onModalClose: () => null,
};

const DisclosurelContext = createContext<DisclosureState>(initialState);

export default DisclosurelContext;
