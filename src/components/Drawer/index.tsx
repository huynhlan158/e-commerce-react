import { useSelector } from 'react-redux';

import { RootState } from '~/state/store';

import { NavbarItemId } from '~/state/navigation/navigationSlice';
import { MenuDrawer } from './MenuDrawer';

/**
 * The drawer of menu bar.
 */
export function NavbarDrawer() {
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  switch (navigationPath[0].id) {
    case NavbarItemId.PRODUCTS:
      return <MenuDrawer />;
  }
}
