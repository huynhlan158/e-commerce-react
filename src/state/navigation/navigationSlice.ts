import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryUnit } from '~/services/config/models/Category';

export enum NavbarItemId {
  SEARCH = 'SEARCH',
  PRODUCTS = CategoryUnit.PRODUCTS,
  PROMOTION = 'PROMOTION',
  COCOON = 'COCOON',
  ARTICLES = 'ARTICLES',
  ACCOUNT = 'ACCOUNT',
  CONTACT = 'CONTACT',
  SHOPPING_CART = 'SHOPPING_CART',
  LANGUAGE_VI = 'LANGUAGE_VI',
  LANGUAGE_EN = 'LANGUAGE_EN',
}

interface NavbarItem {
  id: string;
  isFetchingData?: boolean;
  slug?: string;
}

export interface NavigationState {
  activeNavbar: NavbarItemId | null;
  navigationPath: NavbarItem[];
}

export const initialState: NavigationState = {
  activeNavbar: null,
  navigationPath: [],
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
    updateNavigationPath: (state, action: PayloadAction<NavbarItem[]>) => {
      state.navigationPath = action.payload;
    },
  },
});

export const { setActiveNavbar, resetActiveNavbar, updateNavigationPath } =
  navigationSlice.actions;

export default navigationSlice.reducer;
