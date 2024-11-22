import { useSelector } from 'react-redux';

import { RootState } from '~/state/store';
import { NavbarItemId } from '~/state/navigation/navigationSlice';
import { CategoryUnitId } from '~/services/config/models/Category';

import { MenuDrawer } from './MenuDrawer';
import { ShoppingCartDrawer } from './ShoppingCartDrawer';
import { ShippingPolicyDrawer } from './ShippingPolicyDrawer';

/**
 * A UI component to render drawers of the app.
 */
export function Drawer() {
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  switch (navigationPath[0]?.id) {
    case CategoryUnitId.PRODUCTS:
    case CategoryUnitId.PROBLEMS:
    case CategoryUnitId.INGREDIENTS:
    case CategoryUnitId.BRAND:
      return <MenuDrawer />;

    case NavbarItemId.SHOPPING_CART:
      return <ShoppingCartDrawer />;

    case NavbarItemId.SHIPPING:
      return <ShippingPolicyDrawer />;
  }
}
