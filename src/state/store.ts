import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';

const reducer = {
  auth: authReducer,
};

export const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducer = keyof typeof reducer;
