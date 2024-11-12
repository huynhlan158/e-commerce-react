export enum CategoryUnit {
  PRODUCTS = 'PRODUCTS',
}

export interface Category {
  id: CategoryUnit;
  name: string;
  ancestor_id: string | null;
  depth: number;
  data: Category[];
}
