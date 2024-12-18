import { ImageFortmat } from '~/services/product/models/Product';

interface CartItem {
  id: string;
  product_id: string;
  product_name: string;
  original_price: number;
  price: number;
  quantity: number;
  sub_total: number;
  image: ImageFortmat;
  out_of_stock: boolean;
}

export interface ShoppingCart {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  sub_total: number;
  total_discount: number;
  total: number;
  items: CartItem[];
}
