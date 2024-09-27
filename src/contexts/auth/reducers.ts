import { PayloadAction } from '~/types/Contexts';
import { AuthActionType, AuthState } from './AuthContext';

// ===== REDUCERS ===== //
const reducerHandlers = {
  INITIALIZE(
    state: AuthState,
    action: PayloadAction<AuthActionType, Partial<AuthState>>
  ): AuthState {
    const {
      isAuthenticated = state.isAuthenticated,
      userProfile = state.userProfile,
    } = action.payload;
    return { ...state, isAuthenticated, isInitialized: true, userProfile };
  },

  LOG_IN(
    state: AuthState,
    action: PayloadAction<AuthActionType, Partial<AuthState>>
  ): AuthState {
    const {
      isAuthenticated = state.isAuthenticated,
      userProfile = state.userProfile,
    } = action.payload;
    return { ...state, isAuthenticated, userProfile };
  },

  LOG_OUT(state: AuthState): AuthState {
    return { ...state, isAuthenticated: false, userProfile: null };
  },
};

export function reducer(
  state: AuthState,
  action: PayloadAction<AuthActionType, Partial<AuthState>>
): AuthState {
  if (!reducerHandlers[action.type]) return state;
  return reducerHandlers[action.type](state, action);
}

// ===== ACTIONS ===== //
export function initialize({
  isAuthenticated,
  userProfile,
}: {
  isAuthenticated: AuthState['isAuthenticated'];
  userProfile: AuthState['userProfile'];
}): PayloadAction<AuthActionType, Partial<AuthState>> {
  return {
    type: AuthActionType.INITIALIZE,
    payload: { isAuthenticated, userProfile },
  };
}

export function logIn(
  payload: AuthState
): PayloadAction<AuthActionType, Partial<AuthState>> {
  return {
    type: AuthActionType.LOG_IN,
    payload,
  };
}

export function logOut(
  payload: AuthState
): PayloadAction<AuthActionType, Partial<AuthState>> {
  return {
    type: AuthActionType.LOG_OUT,
    payload,
  };
}
