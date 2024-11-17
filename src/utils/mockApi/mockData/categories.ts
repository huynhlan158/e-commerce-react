import i18n from '~/config/localization/i18n';
import {
  CategoryUnit,
  CategoryUnitId,
} from '~/services/config/models/Category';

export enum CategoryUnit2Id {
  PRODUCTS_NEW = 'PRODUCTS_NEW',
  SKIN_CARE = 'SKIN_CARE',
  BODY_LOTION = 'BODY_LOTION',
  HAIR_CARE = 'HAIR_CARE',
  LIP_CARE = 'LIP_CARE',
  COMBO = 'COMBO',

  PROBLEMS_SKIN = 'PROBLEMS_SKIN',
  PROBLEMS_HAIR = 'PROBLEMS_HAIR',
}

// enum CategoryUnit2IdSlug {
//   PRODUCTS_NEW = 'products-new',
//   SKIN_CARE = 'skin-care',
//   BODY_LOTION = 'body-lotion',
//   HAIR_CARE = 'hair-care',
//   LIP_CARE = 'lip-care',
//   COMBO = 'combo',
// }

export enum CategoryUnit3Id {
  SKIN_CARE_ALL = 'SKIN_CARE_ALL',
  SKIN_CARE_SUNSCREEN = 'SKIN_CARE_SUNSCREEN',
  SKIN_CARE_MAKEUP_REMOVER = 'SKIN_CARE_MAKEUP_REMOVER',
  SKIN_CARE_CLEANSER = 'SKIN_CARE_CLEANSER',
  SKIN_CARE_FACIAL_EXFOLIATION = 'SKIN_CARE_FACIAL_EXFOLIATION',
  SKIN_CARE_MASK = 'SKIN_CARE_MASK',
  SKIN_CARE_BALANCING_WATER = 'SKIN_CARE_BALANCING_WATER',
  SKIN_CARE_SERUM = 'SKIN_CARE_SERUM',
  SKIN_CARE_CREAM = 'SKIN_CARE_CREAM',
  SKIN_CARE_MINERAL_SPRAY = 'SKIN_CARE_MINERAL_SPRAY',
  BODY_LOTION_ALL = 'BODY_LOTION_ALL',
  BODY_LOTION_BODY_SCRUB = 'BODY_LOTION_BODY_SCRUB',
  BODY_LOTION_SHOWER_GEL = 'BODY_LOTION_SHOWER_GEL',
  BODY_LOTION_BODY_SPRAY = 'BODY_LOTION_BODY_SPRAY',
  BODY_LOTION_BODY_CARE = 'BODY_LOTION_BODY_CARE',
  HAIR_CARE_ALL = 'HAIR_CARE_ALL',
  HAIR_CARE_SHAMPOO = 'HAIR_CARE_SHAMPOO',
  HAIR_CARE_HAIR_CREAM = 'HAIR_CARE_HAIR_CREAM',
  HAIR_CARE_CONDITIONER = 'HAIR_CARE_CONDITIONER',
  HAIR_CARE_HAIR_TONER = 'HAIR_CARE_HAIR_TONER',
  HAIR_CARE_HAIR_ESSENCE = 'HAIR_CARE_HAIR_ESSENCE',
  LIP_CARE_ALL = 'LIP_CARE_ALL',
  LIP_CARE_LIP_SCRUB = 'LIP_CARE_LIP_SCRUB',
  LIP_CARE_LIP_MOISTURIZER = 'LIP_CARE_LIP_MOISTURIZER',
  COMBO_ALL = 'COMBO_ALL',
  COMBO_FACIAL_CARE = 'COMBO_FACIAL_CARE',
  COMBO_BODY_CARE = 'COMBO_BODY_CARE',
  COMBO_HAIR_CARE = 'COMBO_HAIR_CARE',
  COMBO_LIP_CARE = 'COMBO_LIP_CARE',

  PROBLEMS_SKIN_ALL = 'PROBLEMS_SKIN_ALL',
  PROBLEMS_DRY_SKIN = 'PROBLEMS_DRY_SKIN',
  PROBLEMS_OILY_ACNE_SKIN = 'PROBLEMS_OILY_ACNE_SKIN',
  PROBLEMS_SENSITIVE_SKIN = 'PROBLEMS_SENSITIVE_SKIN',
  PROBLEMS_DULL_SKIN = 'PROBLEMS_DULL_SKIN',
  PROBLEMS_HAIR_ALL = 'PROBLEMS_HAIR_ALL',
  PROBLEMS_DRY_FRIZZY_HAIR = 'PROBLEMS_DRY_FRIZZY_HAIR',
  PROBLEMS_HAIR_LOSS = 'PROBLEMS_HAIR_LOSS',

  INGREDIENTS_SQUASH = 'INGREDIENTS_SQUASH',
  INGREDIENTS_DAKLAK_COFFEE = 'INGREDIENTS_DAKLAK_COFFEE',
  INGREDIENTS_HUNGYEN_TURMERIC = 'INGREDIENTS_HUNGYEN_TURMERIC',
}

// enum CategoryUnit3IdSlug {
//   SKIN_CARE_ALL = 'skin-care',
//   SKIN_CARE_SUNSCREEN = 'skin-care-sunscreen',
//   SKIN_CARE_MAKEUP_REMOVER = 'skin-care-makeup-remover',
//   SKIN_CARE_CLEANSER = 'skin-care-cleanser',
//   SKIN_CARE_FACIAL_EXFOLIATION = 'skin-care-facial-exfoliation',
//   SKIN_CARE_MASK = 'skin-care-mask',
//   SKIN_CARE_BALANCING_WATER = 'skin-care-balancing-water',
//   SKIN_CARE_SERUM = 'skin-care-serum',
//   SKIN_CARE_CREAM = 'skin-care-cream',
//   SKIN_CARE_MINERAL_SPRAY = 'skin-care-mineral-spray',
//   BODY_LOTION_ALL = 'body-lotion',
//   BODY_LOTION_BODY_SCRUB = 'body-lotion-body-scrub',
//   BODY_LOTION_SHOWER_GEL = 'body-lotion-shower-gel',
//   BODY_LOTION_BODY_SPRAY = 'body-lotion-body-spray',
//   BODY_LOTION_BODY_CARE = 'body-lotion-body-care',
//   HAIR_CARE_ALL = 'hair-care-all',
//   HAIR_CARE_SHAMPOO = 'hair-care-shampoo',
//   HAIR_CARE_HAIR_CREAM = 'hair-care-hair-cream',
//   HAIR_CARE_CONDITIONER = 'hair-care-conditioner',
//   HAIR_CARE_HAIR_TONER = 'hair-care-hair-toner',
//   HAIR_CARE_HAIR_ESSENCE = 'hair-care-hair-essence',
//   LIP_CARE_ALL = 'lip-care-all',
//   LIP_CARE_LIP_SCRUB = 'lip-care-lip-scrub',
//   LIP_CARE_LIP_MOISTURIZER = 'lip-care-lip-moisturizer',
//   COMBO_ALL = 'combo-all',
//   COMBO_FACIAL_CARE = 'combo-facial-care',
//   COMBO_BODY_CARE = 'combo-body-care',
//   COMBO_HAIR_CARE = 'combo-hair-care',
//   COMBO_LIP_CARE = 'combo-lip-care',
// }

export const categoryUnitList: CategoryUnit[] = [
  // Unit1
  {
    id: CategoryUnitId.PRODUCTS,
    name: i18n.t('products', { ns: 'server-categories' }),
    group_id: null,
    depth: 0,
  },
  {
    id: CategoryUnitId.PROBLEMS,
    name: i18n.t('problems', { ns: 'server-categories' }),
    group_id: null,
    depth: 0,
  },

  // Unit2: PRODUCTS
  {
    id: CategoryUnit2Id.PRODUCTS_NEW,
    name: i18n.t('products-new', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit2Id.SKIN_CARE,
    name: i18n.t('products-skin-care', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2Id.BODY_LOTION,
    name: i18n.t('products-body-lotion', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2Id.HAIR_CARE,
    name: i18n.t('products-hair-care', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2Id.LIP_CARE,
    name: i18n.t('products-lip-care', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2Id.COMBO,
    name: i18n.t('products-combo', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PRODUCTS,
    depth: 1,
  },

  // Unit2: PROBLEMS
  {
    id: CategoryUnit2Id.PROBLEMS_SKIN,
    name: i18n.t('problems-skin', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PROBLEMS,
    depth: 1,
  },
  {
    id: CategoryUnit2Id.PROBLEMS_HAIR,
    name: i18n.t('problems-hair', { ns: 'server-categories' }),
    group_id: CategoryUnitId.PROBLEMS,
    depth: 1,
  },

  // Unit3-PRODUCTS: skin-care
  {
    id: CategoryUnit3Id.SKIN_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_SUNSCREEN,
    name: i18n.t('skin-care-sunscreen', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_MAKEUP_REMOVER,
    name: i18n.t('skin-care-makeup-remover', {
      ns: 'server-categories',
    }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_CLEANSER,
    name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_FACIAL_EXFOLIATION,
    name: i18n.t('skin-care-facial-exfoliation', {
      ns: 'server-categories',
    }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_MASK,
    name: i18n.t('skin-care-mask', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_BALANCING_WATER,
    name: i18n.t('skin-care-balancing-water', {
      ns: 'server-categories',
    }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_SERUM,
    name: i18n.t('skin-care-serum', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_CREAM,
    name: i18n.t('skin-care-cream', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.SKIN_CARE_MINERAL_SPRAY,
    name: i18n.t('skin-care-mineral-spray', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.SKIN_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PRODUCTS: body-lotion
  {
    id: CategoryUnit3Id.BODY_LOTION_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.BODY_LOTION,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.BODY_LOTION_BODY_SCRUB,
    name: i18n.t('body-lotion-body-scrub', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.BODY_LOTION,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.BODY_LOTION_SHOWER_GEL,
    name: i18n.t('body-lotion-shower-gel', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.BODY_LOTION,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.BODY_LOTION_BODY_SPRAY,
    name: i18n.t('body-lotion-body-spray', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.BODY_LOTION,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.BODY_LOTION_BODY_CARE,
    name: i18n.t('body-lotion-body-care', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.BODY_LOTION,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PRODUCTS: hair-care
  {
    id: CategoryUnit3Id.HAIR_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.HAIR_CARE_SHAMPOO,
    name: i18n.t('hair-care-shampoo', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.HAIR_CARE_HAIR_CREAM,
    name: i18n.t('hair-care-hair-cream', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.HAIR_CARE_CONDITIONER,
    name: i18n.t('hair-care-conditioner', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.HAIR_CARE_HAIR_TONER,
    name: i18n.t('hair-care-hair-toner', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.HAIR_CARE_HAIR_ESSENCE,
    name: i18n.t('hair-care-hair-essence', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.HAIR_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PRODUCTS: lip-care
  {
    id: CategoryUnit3Id.LIP_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.LIP_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.LIP_CARE_LIP_SCRUB,
    name: i18n.t('lip-care-lip-scrub', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.LIP_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.LIP_CARE_LIP_MOISTURIZER,
    name: i18n.t('lip-care-lip-moisturizer', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.LIP_CARE,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PRODUCTS: combo
  {
    id: CategoryUnit3Id.COMBO_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.COMBO,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.COMBO_FACIAL_CARE,
    name: i18n.t('combo-facial-care', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.COMBO,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.COMBO_BODY_CARE,
    name: i18n.t('combo-body-care', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.COMBO,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.COMBO_HAIR_CARE,
    name: i18n.t('combo-hair-care', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.COMBO,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.COMBO_LIP_CARE,
    name: i18n.t('combo-lip-care', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.COMBO,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PROBLEMS: skin
  {
    id: CategoryUnit3Id.PROBLEMS_SKIN_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_SKIN,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_DRY_SKIN,
    name: i18n.t('problems-dry-skin', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_SKIN,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_OILY_ACNE_SKIN,
    name: i18n.t('problems-oily-acne-skin', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_SKIN,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_SENSITIVE_SKIN,
    name: i18n.t('problems-sensitive-skin', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_SKIN,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_DULL_SKIN,
    name: i18n.t('problems-dull-skin', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_SKIN,
    depth: 2,
    fetch_data_for_product_list: true,
  },

  // Unit3-PROBLEMS: hair
  {
    id: CategoryUnit3Id.PROBLEMS_HAIR_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_HAIR,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_DRY_FRIZZY_HAIR,
    name: i18n.t('problems-dry-frizzy-hair', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_HAIR,
    depth: 2,
    fetch_data_for_product_list: true,
  },
  {
    id: CategoryUnit3Id.PROBLEMS_HAIR_LOSS,
    name: i18n.t('problems-hair-loss', { ns: 'server-categories' }),
    group_id: CategoryUnit2Id.PROBLEMS_HAIR,
    depth: 2,
    fetch_data_for_product_list: true,
  },
];
