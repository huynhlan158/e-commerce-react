import { PayloadAction } from '~/types/Contexts';
import { AuthActionType, AuthState } from './AuthContext';
import { UserProfile } from '~/services/user/models/User';
import { deleteCookie, StorageKeys } from '~/utils/cookie';

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
    return { ...state, isInitialized: true, isAuthenticated, userProfile };
  },

  LOG_IN(
    state: AuthState,
    action: PayloadAction<AuthActionType, Partial<AuthState>>
  ): AuthState {
    const { userProfile = state.userProfile } = action.payload;
    return { ...state, isAuthenticated: true, userProfile };
  },

  LOG_OUT(state: AuthState): AuthState {
    deleteCookie(StorageKeys.ACCESS_TOKEN);
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
  userProfile: UserProfile
): PayloadAction<AuthActionType, Partial<AuthState>> {
  return {
    type: AuthActionType.LOG_IN,
    payload: { userProfile },
  };
}

export function logOut(): PayloadAction<AuthActionType, Partial<AuthState>> {
  return {
    type: AuthActionType.LOG_OUT,
    payload: { userProfile: null },
  };
}
