import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

/**
 * The custom hook to get the state and dispatch function of the 'auth' store.
 */
export const useAuthStore = () => {
  const authDispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );
  return { authDispatch, isAuthenticated, isInitialized };
};
