import i18n from '~/config/localization/i18n';
import { CategoryUnit } from '~/services/config/models/Category';

enum CategoryUnit2 {
  PRODUCTS_NEW = 'products-new',
  SKIN_CARE = 'skin-care',
  BODY_LOTION = 'body-lotion',
  HAIR_CARE = 'hair-care',
  LIP_CARE = 'lip-care',
  COMBO = 'combo',
}

enum CategoryUnit3 {
  SKIN_CARE_ALL = 'skin-care',
  SKIN_CARE_SUNSCREEN = 'skin-care-sunscreen',
  SKIN_CARE_MAKEUP_REMOVER = 'skin-care-makeup-remover',
  SKIN_CARE_CLEANSER = 'skin-care-cleanser',
  SKIN_CARE_FACIAL_EXFOLIATION = 'skin-care-facial-exfoliation',
  SKIN_CARE_MASK = 'skin-care-mask',
  SKIN_CARE_BALANCING_WATER = 'skin-care-balancing-water',
  SKIN_CARE_SERUM = 'skin-care-serum',
  SKIN_CARE_CREAM = 'skin-care-cream',
  SKIN_CARE_MINERAL_SPRAY = 'skin-care-mineral-spray',
  BODY_LOTION_ALL = 'body-lotion',
  BODY_LOTION_BODY_SCRUB = 'body-lotion-body-scrub',
  BODY_LOTION_SHOWER_GEL = 'body-lotion-shower-gel',
  BODY_LOTION_BODY_SPRAY = 'body-lotion-body-spray',
  BODY_LOTION_BODY_CARE = 'body-lotion-body-care',
  HAIR_CARE_ALL = 'hair-care-all',
  HAIR_CARE_SHAMPOO = 'hair-care-shampoo',
  HAIR_CARE_HAIR_CREAM = 'hair-care-hair-cream',
  HAIR_CARE_CONDITIONER = 'hair-care-conditioner',
  HAIR_CARE_HAIR_TONER = 'hair-care-hair-toner',
  HAIR_CARE_HAIR_ESSENCE = 'hair-care-hair-essence',
  LIP_CARE_ALL = 'lip-care-all',
  LIP_CARE_LIP_SCRUB = 'lip-care-lip-scrub',
  LIP_CARE_LIP_MOISTURIZER = 'lip-care-lip-moisturizer',
  COMBO_ALL = 'combo-all',
  COMBO_FACIAL_CARE = 'combo-facial-care',
  COMBO_BODY_CARE = 'combo-body-care',
  COMBO_HAIR_CARE = 'combo-hair-care',
  COMBO_LIP_CARE = 'combo-lip-care',
}

export const categoryUnitList = [
  {
    id: CategoryUnit.PRODUCTS,
    name: i18n.t('products', { ns: 'server-categories' }),
    ancestor_id: null,
    depth: 0,
  },
];

export const categoryUnit2List = [
  {
    id: CategoryUnit2.PRODUCTS_NEW,
    name: i18n.t('products-new', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.SKIN_CARE,
    name: i18n.t('products-skin-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.BODY_LOTION,
    name: i18n.t('products-body-lotion', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.HAIR_CARE,
    name: i18n.t('products-hair-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.LIP_CARE,
    name: i18n.t('products-lip-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.COMBO,
    name: i18n.t('products-combo', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
];

export const categoryUnit3List = [
  // skin-care
  {
    id: CategoryUnit3.SKIN_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
    slug: '',
  },
  {
    id: CategoryUnit3.SKIN_CARE_SUNSCREEN,
    name: i18n.t('skin-care-sunscreen', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MAKEUP_REMOVER,
    name: i18n.t('skin-care-makeup-remover', {
      ns: 'server-categories',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_CLEANSER,
    name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_FACIAL_EXFOLIATION,
    name: i18n.t('skin-care-facial-exfoliation', {
      ns: 'server-categories',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MASK,
    name: i18n.t('skin-care-mask', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_BALANCING_WATER,
    name: i18n.t('skin-care-balancing-water', {
      ns: 'server-categories',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_SERUM,
    name: i18n.t('skin-care-serum', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_CREAM,
    name: i18n.t('skin-care-cream', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MINERAL_SPRAY,
    name: i18n.t('skin-care-mineral-spray', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },

  // body-lotion
  {
    id: CategoryUnit3.BODY_LOTION_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_SCRUB,
    name: i18n.t('body-lotion-body-scrub', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_SHOWER_GEL,
    name: i18n.t('body-lotion-shower-gel', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_SPRAY,
    name: i18n.t('body-lotion-body-spray', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_CARE,
    name: i18n.t('body-lotion-body-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },

  // hair-care
  {
    id: CategoryUnit3.HAIR_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.HAIR_CARE_SHAMPOO,
    name: i18n.t('hair-care-shampoo', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.HAIR_CARE_HAIR_CREAM,
    name: i18n.t('hair-care-hair-cream', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.HAIR_CARE_CONDITIONER,
    name: i18n.t('hair-care-conditioner', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.HAIR_CARE_HAIR_TONER,
    name: i18n.t('hair-care-hair-toner', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.HAIR_CARE_HAIR_ESSENCE,
    name: i18n.t('hair-care-hair-essence', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.HAIR_CARE,
    depth: 2,
  },

  // lip-care
  {
    id: CategoryUnit3.LIP_CARE_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.LIP_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.LIP_CARE_LIP_SCRUB,
    name: i18n.t('lip-care-lip-scrub', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.LIP_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.LIP_CARE_LIP_MOISTURIZER,
    name: i18n.t('lip-care-lip-moisturizer', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.LIP_CARE,
    depth: 2,
  },

  // combo
  {
    id: CategoryUnit3.COMBO_ALL,
    name: i18n.t('all', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.COMBO,
    depth: 2,
  },
  {
    id: CategoryUnit3.COMBO_FACIAL_CARE,
    name: i18n.t('combo-facial-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.COMBO,
    depth: 2,
  },
  {
    id: CategoryUnit3.COMBO_BODY_CARE,
    name: i18n.t('combo-body-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.COMBO,
    depth: 2,
  },
  {
    id: CategoryUnit3.COMBO_HAIR_CARE,
    name: i18n.t('combo-hair-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.COMBO,
    depth: 2,
  },
  {
    id: CategoryUnit3.COMBO_LIP_CARE,
    name: i18n.t('combo-lip-care', { ns: 'server-categories' }),
    ancestor_id: CategoryUnit2.COMBO,
    depth: 2,
  },
];
