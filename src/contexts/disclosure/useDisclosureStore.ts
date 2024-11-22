import { useContext } from 'react';
import DisclosureContext from './DisclosureContext';

export const useDisclosureStore = () => {
  const context = useContext(DisclosureContext);

  if (!context) {
    throw new Error('Disclosure context must be inside DisclosureProvider!');
  }

  return context;
};
