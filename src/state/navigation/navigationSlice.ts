import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { Product } from '~/services/product/models/Product';

export enum NavbarItemId {
  SHIPPING = 'SHIPPING',
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

export interface NavbarItem {
  id: string;
  selectedCategory?: Category;
}

export interface ProductsByCategory {
  categoryName: string;
  depth: number;
  data: Product[];
}

export interface NavigationState {
  navigationPath: NavbarItem[];
  categoryIdForProductList: string | null;
}

export const initialState: NavigationState = {
  navigationPath: [],
  categoryIdForProductList: null,
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setNavigationPath: (state, action: PayloadAction<NavbarItem[]>) => {
      state.navigationPath = action.payload;
    },
    setCategoryIdForProductList: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.categoryIdForProductList = action.payload;
    },
  },
});

export const { setNavigationPath, setCategoryIdForProductList } =
  navigationSlice.actions;

export default navigationSlice.reducer;
