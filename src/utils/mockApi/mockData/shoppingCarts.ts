import { ShoppingCart } from '~/services/cart/models/Cart';

export const shoppingCartList: ShoppingCart[] = [
  {
    id: '4c1f7cf9-f7d8-4205-ba27-10fdc0aaf842',
    user_id: 'kellyatt',
    created_at: '',
    updated_at: '',
    sub_total: 185000,
    total_discount: 0,
    total: 185000,
    items: [
      {
        id: '891b4fdc-062e-4587-8a31-3af7c5221f98',
        product_id: 'c480f017-3df7-4e50-8be8-32815f098407',
        product_name: 'Sữa chống nắng bí đao 15ml',
        original_price: 185000,
        price: 185000,
        quantity: 1,
        sub_total: 185000,
        image: {
          default: '/',
        },
        out_of_stock: false,
      },
    ],
  },
];
