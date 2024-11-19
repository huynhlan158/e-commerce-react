import { useMediaQuery } from '@chakra-ui/react';
import { MobileMenuDrawer } from './MobileMenuDrawer';

/**
 * A UI component to render the menu content that contains list of categories
 * and/or products by selected category.
 */
export function MenuContent() {
  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

  if (isLaptop) {
    return <div> *** Laptop menu content *** </div>;
  } else {
    return <MobileMenuDrawer />;
  }
}
