import clsx from 'clsx';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes, { privateRoutes } from '~/config/routes';
import { RootState } from '~/state/store';

import { LoadingState, NavigationBar, Stack } from '../Layouts';

/**
 * A route guard that restricts access to guests (unauthenticated users).
 * It prevents navigation to the route if the user is already authenticated.
 */
export function GuestGuard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

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
    <Stack className="min-h-screen">
      <NavigationBar />
      <Stack
        alignItems="center"
        justifyContent="center"
        className={clsx('StackPaddingResponsive', 'flex-1')}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
}
