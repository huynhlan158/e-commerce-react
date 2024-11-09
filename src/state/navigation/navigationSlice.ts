import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum NavbarItemId {
  NAVBAR_SEARCH = 'NAVBAR_SEARCH',
  NAVBAR_PRODUCTS = 'NAVBAR_PRODUCTS',
  NAVBAR_PROMOTION = 'NAVBAR_PROMOTION',
  NAVBAR_COCOON = 'NAVBAR_COCOON',
  NAVBAR_ARTICLES = 'NAVBAR_ARTICLES',
  NAVBAR_ACCOUNT = 'NAVBAR_ACCOUNT',
  NAVBAR_CONTACT = 'NAVBAR_CONTACT',
  NAVBAR_SHOPPING_CART = 'NAVBAR_SHOPPING_CART',
  NAVBAR_LANGUAGE_VI = 'NAVBAR_LANGUAGE_VI',
  NAVBAR_LANGUAGE_EN = 'NAVBAR_LANGUAGE_EN',

  NAVBAR_MOBILE_MENU = 'NAVBAR_MOBILE_MENU',
}

export interface NavigationState {
  activeNavbar: NavbarItemId | null;
}

export const initialState: NavigationState = {
  activeNavbar: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setActiveNavbar: (state, action: PayloadAction<NavbarItemId>) => {
      state.activeNavbar = action.payload;
    },
    resetActiveNavbar: (state) => {
      state.activeNavbar = null;
    },
  },
});

export const { setActiveNavbar, resetActiveNavbar } = navigationSlice.actions;

export default navigationSlice.reducer;
