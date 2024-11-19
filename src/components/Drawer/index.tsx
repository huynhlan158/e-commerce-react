import { useSelector } from 'react-redux';

import { RootState } from '~/state/store';
import { CategoryUnitId } from '~/services/config/models/Category';

import { MenuDrawer } from './MenuDrawer';

/**
 * The drawer of menu bar.
 */
export function NavbarDrawer() {
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  switch (navigationPath[0]?.id) {
    case CategoryUnitId.PRODUCTS:
    case CategoryUnitId.INTEREST:
      return <MenuDrawer />;
  }
}
