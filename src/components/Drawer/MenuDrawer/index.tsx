import { useMediaQuery } from '@chakra-ui/react';

import { LaptopMenuDrawer } from './LaptopMenuDrawer';
import { MobileMenuDrawer } from './MobileMenuDrawer';

/**
 * The menu drawer of the navigation.
 */
export function MenuDrawer() {
  const [isLaptop] = useMediaQuery('(min-width: 1024px)');
  if (isLaptop) {
    return <LaptopMenuDrawer />;
  } else {
    return <MobileMenuDrawer />;
  }
}
