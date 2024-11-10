import { useSelector } from 'react-redux';

import { RootState } from '~/state/store';

import { NavbarItemId } from '~/state/navigation/navigationSlice';
import { MobileMenuDrawer } from './MobileMenuDrawer';

/**
 * The drawer of menu bar.
 */
export function NavbarDrawer() {
  const { activeNavbar } = useSelector((state: RootState) => state.navigation);

  switch (activeNavbar) {
    case NavbarItemId.NAVBAR_MOBILE_MENU:
      return <MobileMenuDrawer />;
  }
}
