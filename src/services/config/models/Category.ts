export enum CategoryUnitId {
  PRODUCTS = 'PRODUCTS',
  INTEREST = 'INTEREST',
  INGREDIENTS = 'INGREDIENTS',
}

export interface CategoryUnit {
  id: string;
  name: string;
  group_id: string | null;
  depth: number;
  fetch_data_for_product_list?: boolean;
}

export interface Category extends CategoryUnit {
  data: Category[];
}
