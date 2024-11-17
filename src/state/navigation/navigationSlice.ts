import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryUnitId } from '~/services/config/models/Category';
import { Product } from '~/services/product/models/Product';

export enum NavbarItemId {
  SEARCH = 'SEARCH',
  PRODUCTS = CategoryUnitId.PRODUCTS,
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

export interface ProductsByCategory {
  categoryName: string;
  depth: number;
  data: Product[];
}

// TODO: refactor and remove redundant states
export interface NavigationState {
  activeNavbar: NavbarItemId | null;
  navigationPath: NavbarItem[];
  productsByCategory: ProductsByCategory | null;
}

export const initialState: NavigationState = {
  activeNavbar: null,
  navigationPath: [],
  productsByCategory: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    // setActiveNavbar: (state, action: PayloadAction<NavbarItemId>) => {
    //   state.activeNavbar = action.payload;
    // },
    // resetActiveNavbar: (state) => {
    //   state.activeNavbar = null;
    // },
    setNavigationPath: (state, action: PayloadAction<NavbarItem[]>) => {
      state.navigationPath = action.payload;
    },
    setProductsByCategory: (
      state,
      action: PayloadAction<ProductsByCategory | null>
    ) => {
      state.productsByCategory = action.payload;
    },
  },
});

export const { setNavigationPath, setProductsByCategory } =
  navigationSlice.actions;

export default navigationSlice.reducer;
