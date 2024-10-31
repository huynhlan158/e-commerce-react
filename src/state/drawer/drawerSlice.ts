import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ReactNode } from 'react';

export interface NavigationState {
  drawerHeader: string;
  drawerBody: ReactNode;
}

export const initialState: NavigationState = {
  drawerHeader: '',
  drawerBody: null,
};

const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    updateDrawer: (state, action: PayloadAction<NavigationState>) => {
      state.drawerHeader = action.payload.drawerHeader;
      state.drawerBody = action.payload.drawerBody;
    },
  },
});

export const { updateDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
