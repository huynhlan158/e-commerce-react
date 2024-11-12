import i18n from '~/config/localization/i18n';
import { CategoryUnit } from '~/services/config/models/Category';

enum CategoryUnit2 {
  PRODUCTS_NEW = 'PRODUCTS_NEW',
  SKIN_CARE = 'SKIN_CARE',
  BODY_LOTION = 'BODY_LOTION',
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
}

export const categoryUnitList = [
  {
    id: CategoryUnit.PRODUCTS,
    name: i18n.t('navbar-products', { ns: 'navigation-bar' }),
    ancestor_id: null,
    depth: 0,
  },
];

export const categoryUnit2List = [
  {
    id: CategoryUnit2.PRODUCTS_NEW,
    name: i18n.t('navbar-product-new', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.SKIN_CARE,
    name: i18n.t('navbar-product-skin-care', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
  {
    id: CategoryUnit2.BODY_LOTION,
    name: i18n.t('navbar-product-body-lotion', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit.PRODUCTS,
    depth: 1,
  },
];

export const categoryUnit3List = [
  {
    id: CategoryUnit3.SKIN_CARE_ALL,
    name: i18n.t('navbar-all', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
    slug: '',
  },
  {
    id: CategoryUnit3.SKIN_CARE_SUNSCREEN,
    name: i18n.t('navbar-skin-care-sunscreen', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MAKEUP_REMOVER,
    name: i18n.t('navbar-skin-care-makeup-remover', {
      ns: 'navigation-bar',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_CLEANSER,
    name: i18n.t('navbar-skin-care-cleanser', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_FACIAL_EXFOLIATION,
    name: i18n.t('navbar-skin-care-facial-exfoliation', {
      ns: 'navigation-bar',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MASK,
    name: i18n.t('navbar-skin-care-mask', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_BALANCING_WATER,
    name: i18n.t('navbar-skin-care-balancing-water', {
      ns: 'navigation-bar',
    }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_SERUM,
    name: i18n.t('navbar-skin-care-serum', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_CREAM,
    name: i18n.t('navbar-skin-care-cream', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },
  {
    id: CategoryUnit3.SKIN_CARE_MINERAL_SPRAY,
    name: i18n.t('navbar-skin-care-mineral-spray', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.SKIN_CARE,
    depth: 2,
  },

  {
    id: CategoryUnit3.BODY_LOTION_ALL,
    name: i18n.t('navbar-all', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_SCRUB,
    name: i18n.t('navbar-body-lotion-body-scrub', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_SHOWER_GEL,
    name: i18n.t('navbar-body-lotion-shower-gel', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_SPRAY,
    name: i18n.t('navbar-body-lotion-body-spray', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
  {
    id: CategoryUnit3.BODY_LOTION_BODY_CARE,
    name: i18n.t('navbar-body-lotion-body-care', { ns: 'navigation-bar' }),
    ancestor_id: CategoryUnit2.BODY_LOTION,
    depth: 2,
  },
];
