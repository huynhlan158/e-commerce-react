import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from '~/config/routes';
import { RootState } from '~/state/store';

import { LoadingState, NavigationBar, Stack } from '../Layouts';

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

  return (
    <Stack className="min-h-screen">
      <NavigationBar />
      <Stack className="StackPaddingResponsive">
        <Outlet />
      </Stack>
    </Stack>
  );
}
