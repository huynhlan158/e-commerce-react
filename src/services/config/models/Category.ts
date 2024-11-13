export enum CategoryUnit {
  PRODUCTS = 'PRODUCTS',
}

export interface Category {
  id: CategoryUnit;
  name: string;
  group_id: string | null;
  depth: number;
  data: Category[];
}
