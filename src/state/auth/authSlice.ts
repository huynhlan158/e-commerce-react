import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUserInfo } from '~/services/user/fetch.user';
import { UserProfile } from '~/services/user/models/User';
import { deleteCookie, getCookie, StorageKeys } from '~/utils/cookie';

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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<UserProfile>) => {
      state.isAuthenticated = true;
      state.userProfile = action.payload;
    },
    logOut: (state) => {
      deleteCookie(StorageKeys.ACCESS_TOKEN);
      state.isAuthenticated = false;
      state.userProfile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authInitialize.fulfilled, (state, action) => {
        const userProfile = action.payload;
        const isAuthenticated = userProfile ? true : false;
        state.isInitialized = true;
        state.isAuthenticated = isAuthenticated;
        state.userProfile = userProfile;
      })
      .addCase(authInitialize.rejected, (state) => {
        state.isInitialized = true;
        state.isAuthenticated = false;
        state.userProfile = null;
      });
  },
});

export const authInitialize = createAsyncThunk(
  'auth/authInitialize',
  async () => {
    const accessToken = getCookie(StorageKeys.ACCESS_TOKEN);
    let userProfile = null;
    if (!!accessToken) {
      userProfile = await getUserInfo(accessToken);
    }
    return userProfile;
  }
);

export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
