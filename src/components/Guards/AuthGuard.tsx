import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '~/config/routes';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { RootState } from '~/state/store';

import { LoadingState, NavigationBar, Stack } from '../Layouts';
import { Drawer } from '../Overlay/Drawer';

/**
 * A route guard that restricts access to guests (unauthenticated users).
 * It prevents navigation to the route if the user is already authenticated.
 */
export function AuthGuard() {
  const { isAuthenticated, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

  if (!isInitialized) return <LoadingState />;

  if (!isAuthenticated) return <Navigate to={routes.home} />;

  const { isDrawerOpen } = useDisclosureStore();

  return (
    <Stack className="min-h-screen">
      <NavigationBar />
      <Stack className="StackPaddingResponsive">
        <Outlet />

        {isDrawerOpen && <Drawer />}
      </Stack>
    </Stack>
  );
}
