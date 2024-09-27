import { createContext, Dispatch, useContext } from 'react';
import { UserProfile } from '~/services/user/models/user';
import { PayloadAction } from '~/types/Contexts';

export enum AuthActionType {
  INITIALIZE = 'INITIALIZE',
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}

export interface AuthState {
  isAuthenticated: boolean;
  isInitialized: boolean;
  userProfile: UserProfile | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  isInitialized: false,
  userProfile: null,
};

interface AuthContextType extends AuthState {
  authDispatch: Dispatch<PayloadAction<AuthActionType, Partial<AuthState>>>;
}

/**
 * The context of the authentication flow.
 */
export const AuthContext = createContext<AuthContextType>({
  ...initialState,
  authDispatch: () => null,
});

/**
 * The custom hook to get the state and dispatch function of the Auth context.
 */
export const useAuthStore = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('Auth context must be inside AuthProvider!');
  }

  return context;
};
