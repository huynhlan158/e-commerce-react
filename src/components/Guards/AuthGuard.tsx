import { Navigate, Outlet } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

import routes from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { LoadingState, NavigationBar } from '../Layouts';

/**
 * A route guard that restricts access to guests (unauthenticated users).
 * It prevents navigation to the route if the user is already authenticated.
 */
export function AuthGuard() {
  const { isAuthenticated, isInitialized } = useAuthStore();

  if (!isInitialized) return <LoadingState />;

  if (!isAuthenticated) return <Navigate to={routes.home} />;

  return (
    <Stack gap={0} className="min-h-screen">
      <NavigationBar />
      <Stack className="p-24">
        <Outlet />
      </Stack>
    </Stack>
  );
}
