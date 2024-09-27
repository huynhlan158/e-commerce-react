import { Navigate, Outlet } from 'react-router-dom';

import routes from '~/config/routes';
import { useAuthStore } from '~/contexts/auth/AuthContext';
import { LoadingState } from '../Layouts';

/**
 * A route guard that restricts access to guests (unauthenticated users).
 * It prevents navigation to the route if the user is already authenticated.
 */
export function GuestGuard() {
  const { isAuthenticated, isInitialized } = useAuthStore();

  if (!isInitialized) return <LoadingState />;

  if (isAuthenticated) return <Navigate to={routes.home} />;

  return <div>{<Outlet />}</div>;
}
