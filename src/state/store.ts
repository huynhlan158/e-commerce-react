import { configureStore } from '@reduxjs/toolkit';

import authReducer from './auth/authSlice';
import navigationReducer from './navigation/navigationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
