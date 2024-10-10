import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Stack } from '@chakra-ui/react';

import routes, { privateRoutes } from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { LoadingState, NavigationBar } from '../Layouts';

/**
 * A route guard that restricts access to guests (unauthenticated users).
 * It prevents navigation to the route if the user is already authenticated.
 */
export function GuestGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isInitialized, isAuthenticated } = useAuthStore();

  useEffect(() => {
    /**
     * We want to navigate users who try to access login route
     * and guests who attempt to access private routes to the home page.
     */
    if (
      (!!privateRoutes.find((route) => route.path === location.pathname) &&
        location.pathname !== routes.home &&
        !isAuthenticated) ||
      (isAuthenticated && location.pathname === routes.login)
    ) {
      navigate(routes.home);
    }
  }, [location.pathname, isAuthenticated]);

  if (!isInitialized) return <LoadingState />;

  return (
    <Stack gap={0} className="min-h-screen">
      <NavigationBar />
      <Stack className="p-24">
        <Outlet />
      </Stack>
    </Stack>
  );
}
