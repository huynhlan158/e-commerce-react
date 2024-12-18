import { CategoryUnitId } from '~/services/config/models/Category';

type Certification = 'PETA' | 'CRUELTY_FREE' | 'VEGAN';

type Property =
  | 'ALCOHOL_FREE'
  | 'SULFATE_FREE'
  | 'NO_MINERAL_OIL'
  | 'NO_PARABENS';

interface Category {
  id: string;
  group_id: CategoryUnitId;
  name: string;
}

interface ProductDescription {
  image: ImageFortmat;
  content: string;
  effects: string;
  suitable: string;
}

interface CommonDescription {
  image: ImageFortmat;
  content: string;
  lines: {
    title: string;
    description: string;
  }[];
}

export interface ImageFortmat {
  default: string;
  large?: string;
  medium?: string;
  small?: string;
  thumbnail?: string;
}

export interface Product {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  main_ingredients: string;
  functionality: string;
  suitable: string;
  properties: Property[];
  descriptions: {
    product_description: ProductDescription;
    ingredients_description: CommonDescription;
    usage_description: CommonDescription;
  };
  short_description: string;
  original_price: number;
  price: number;
  product_stamp: boolean;
  out_of_stock: boolean;
  categories: Category[];
  certifications: Certification[];
  front_image: ImageFortmat;
  back_image: ImageFortmat;
  slider_images: ImageFortmat[];
  video_url?: string;
}
