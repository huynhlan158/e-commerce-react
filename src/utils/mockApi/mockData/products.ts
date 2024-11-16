import i18n from '~/config/localization/i18n';
import { Product } from '~/services/product/models/Product';
import { CategoryUnitId } from '~/services/config/models/Category';
import { productImages } from './images';
import { CategoryUnit2Id, CategoryUnit3Id } from './categories';

export const productList: Product[] = [
  {
    id: 'c480f017-3df7-4e50-8be8-32815f098407',
    created_at: '2024-07-12T10:46:47.343Z',
    updated_at: '2024-07-22T03:04:32.651Z',
    name: i18n.t('winter-melon-sunscreen-milk-50ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_OILY_ACNE_SKIN,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-oily-acne-skin', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_SQUASH,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-squash', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_SUNSCREEN,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-sunscreen', { ns: 'server-categories' }),
      },
    ],
    main_ingredients: '',
    functionality: i18n.t('winter-melon-sunscreen-milk-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('winter-melon-sunscreen-milk-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t('winter-melon-sunscreen-milk-description-content', {
          ns: 'server-products',
        }),
        effects: i18n.t('winter-melon-sunscreen-milk-description-effects', {
          ns: 'server-products',
        }),
        suitable: i18n.t('winter-melon-sunscreen-milk-description-suitable', {
          ns: 'server-products',
        }),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          'AQUA/WATER, TRIETHYL CITRATE, CYCLOPENTASILOXANE, DIBUTYL ADIPATE, ISODODECANE, BUTYLOCTYL SALICYLATE, ETHYLHEXYL METHOXYCRYLENE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, SILICA, METHYLENE BIS-BENZOTRIAZOLYL TETRAMETHYLBUTYLPHENOL, DISODIUM PHENYL DIBENZIMIDAZOLE TETRASULFONATE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, BUTYL METHOXYDIBENZOYLMETHANE, METHYL METHACRYLATE CROSSPOLYMER, DIMETHICONE, TRIS-BIPHENYL TRIAZINE, SODIUM POTASSIUM ALUMINUM SILICATE, TRIMETHYLSILOXYSILICATE, ETHYLHEXYL TRIAZONE, 1,2-HEXANEDIOL, PROPANEDIOL, ACETYL ZINGERONE, MELANIN, BENINCASA CERIFERA FRUIT EXTRACT, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, POLYPROPYLSILSESQUIOXANE, BUTYLENE GLYCOL, PROPYLENE GLYCOL, TOCOPHERYL ACETATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROXYMETHOXYPHENYL DECANONE, XANTHAN GUM, TITANIUM DIOXIDE, DEXTRIN PALMITATE, POLYHYDROXYSTEARIC ACID, C13-15 ALKANE, DISTEARDIMONIUM HECTORITE, POLYGLYCERYL-3 POLYRICINOLEATE, DIMETHICONE/PEG-10 /15 CROSSPOLYMER, DECYL GLUCOSIDE, DISODIUM PHOSPHATE, CETYL ALCOHOL, HYDROXYACETOPHENONE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, TROMETHAMINE, CITRIC ACID.',
        lines: [
          {
            title: 'Synoxyl AZ',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-1',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Melanin',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-2',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-title-line-3',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-3',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Tinosorb M (Methylene Bis-Benzotriazolyl Tetramethylbutylphenol)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-4',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Neo Heliopan AP (Disodium Phenyl Dibenzimidazole Tetrasulfonate)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-5',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Uvinul A Plus (Diethylamino Hydroxybenzoyl Hexyl Benzoate)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-6',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Tinosorb A2B (Tris-Biphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-7',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Eclipsogen EHT (Ethylhexyl Triazone)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-8',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Eclipsogen Sorb S (Bis- Ethyhexyloxyphenol Methoxyphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-9',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Parsol 1789 (Avobenzone - Butyl Methoxydibenzoylmethane)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-10',
              {
                ns: 'server-products',
              }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'winter-melon-sunscreen-milk-usage-description-content',
          {
            ns: 'server-products',
          }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-dosage',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-texture',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-fragrance',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-note',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t('winter-melon-sunscreen-milk-short-description', {
      ns: 'server-products',
    }),
    original_price: 439000,
    price: 439000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.winterMelonSunscreenMilk50,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: '78cf5aa6-e74c-4c23-a76c-6ebbeeaf0a61',
    created_at: '2024-07-12T10:46:47.343Z',
    updated_at: '2024-07-22T03:04:32.651Z',
    name: i18n.t('winter-melon-sunscreen-milk-15ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_OILY_ACNE_SKIN,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-oily-acne-skin', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_SQUASH,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-squash', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_SUNSCREEN,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-sunscreen', { ns: 'server-categories' }),
      },
    ],
    main_ingredients: '',
    functionality: i18n.t('winter-melon-sunscreen-milk-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('winter-melon-sunscreen-milk-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t('winter-melon-sunscreen-milk-description-content', {
          ns: 'server-products',
        }),
        effects: i18n.t('winter-melon-sunscreen-milk-description-effects', {
          ns: 'server-products',
        }),
        suitable: i18n.t('winter-melon-sunscreen-milk-description-suitable', {
          ns: 'server-products',
        }),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          'AQUA/WATER, TRIETHYL CITRATE, CYCLOPENTASILOXANE, DIBUTYL ADIPATE, ISODODECANE, BUTYLOCTYL SALICYLATE, ETHYLHEXYL METHOXYCRYLENE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, SILICA, METHYLENE BIS-BENZOTRIAZOLYL TETRAMETHYLBUTYLPHENOL, DISODIUM PHENYL DIBENZIMIDAZOLE TETRASULFONATE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, BUTYL METHOXYDIBENZOYLMETHANE, METHYL METHACRYLATE CROSSPOLYMER, DIMETHICONE, TRIS-BIPHENYL TRIAZINE, SODIUM POTASSIUM ALUMINUM SILICATE, TRIMETHYLSILOXYSILICATE, ETHYLHEXYL TRIAZONE, 1,2-HEXANEDIOL, PROPANEDIOL, ACETYL ZINGERONE, MELANIN, BENINCASA CERIFERA FRUIT EXTRACT, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, POLYPROPYLSILSESQUIOXANE, BUTYLENE GLYCOL, PROPYLENE GLYCOL, TOCOPHERYL ACETATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROXYMETHOXYPHENYL DECANONE, XANTHAN GUM, TITANIUM DIOXIDE, DEXTRIN PALMITATE, POLYHYDROXYSTEARIC ACID, C13-15 ALKANE, DISTEARDIMONIUM HECTORITE, POLYGLYCERYL-3 POLYRICINOLEATE, DIMETHICONE/PEG-10 /15 CROSSPOLYMER, DECYL GLUCOSIDE, DISODIUM PHOSPHATE, CETYL ALCOHOL, HYDROXYACETOPHENONE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, TROMETHAMINE, CITRIC ACID.',
        lines: [
          {
            title: 'Synoxyl AZ',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-1',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Melanin',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-2',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-title-line-3',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-3',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Tinosorb M (Methylene Bis-Benzotriazolyl Tetramethylbutylphenol)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-4',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Neo Heliopan AP (Disodium Phenyl Dibenzimidazole Tetrasulfonate)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-5',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Uvinul A Plus (Diethylamino Hydroxybenzoyl Hexyl Benzoate)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-6',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Tinosorb A2B (Tris-Biphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-7',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Eclipsogen EHT (Ethylhexyl Triazone)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-8',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Eclipsogen Sorb S (Bis- Ethyhexyloxyphenol Methoxyphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-9',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Parsol 1789 (Avobenzone - Butyl Methoxydibenzoylmethane)',
            description: i18n.t(
              'winter-melon-sunscreen-milk-ingredient-description-line-10',
              {
                ns: 'server-products',
              }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'winter-melon-sunscreen-milk-usage-description-content',
          {
            ns: 'server-products',
          }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-dosage',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-texture',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-fragrance',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-milk-usage-description-note',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t('winter-melon-sunscreen-milk-short-description', {
      ns: 'server-products',
    }),
    original_price: 185000,
    price: 120000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.winterMelonSunscreenMilk15,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: '3cb2b01a-61bf-4cfa-80ed-c0bb8457a6d7',
    created_at: '2024-07-12T10:46:47.343Z',
    updated_at: '2024-07-22T03:04:32.651Z',
    name: i18n.t('winter-melon-sunscreen-50ml-name', { ns: 'server-products' }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_OILY_ACNE_SKIN,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-oily-acne-skin', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_SQUASH,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-squash', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_SUNSCREEN,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-sunscreen', { ns: 'server-categories' }),
      },
    ],
    main_ingredients: '',
    functionality: i18n.t('winter-melon-sunscreen-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('winter-melon-sunscreen-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t('winter-melon-sunscreen-description-content', {
          ns: 'server-products',
        }),
        effects: i18n.t('winter-melon-sunscreen-description-effects', {
          ns: 'server-products',
        }),
        suitable: i18n.t('winter-melon-sunscreen-description-suitable', {
          ns: 'server-products',
        }),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          'AQUA/WATER, TRIETHYL CITRATE, CYCLOPENTASILOXANE, DIBUTYL ADIPATE, ISODODECANE, BUTYLOCTYL SALICYLATE, ETHYLHEXYL METHOXYCRYLENE, DIETHYLAMINO HYDROXYBENZOYL HEXYL BENZOATE, SILICA, METHYLENE BIS-BENZOTRIAZOLYL TETRAMETHYLBUTYLPHENOL, DISODIUM PHENYL DIBENZIMIDAZOLE TETRASULFONATE, BIS-ETHYLHEXYLOXYPHENOL METHOXYPHENYL TRIAZINE, BUTYL METHOXYDIBENZOYLMETHANE, METHYL METHACRYLATE CROSSPOLYMER, DIMETHICONE, TRIS-BIPHENYL TRIAZINE, SODIUM POTASSIUM ALUMINUM SILICATE, TRIMETHYLSILOXYSILICATE, ETHYLHEXYL TRIAZONE, 1,2-HEXANEDIOL, PROPANEDIOL, ACETYL ZINGERONE, MELANIN, BENINCASA CERIFERA FRUIT EXTRACT, HDI/TRIMETHYLOL HEXYLLACTONE CROSSPOLYMER, POLYPROPYLSILSESQUIOXANE, BUTYLENE GLYCOL, PROPYLENE GLYCOL, TOCOPHERYL ACETATE, CAPRYLIC/CAPRIC TRIGLYCERIDE, HYDROXYMETHOXYPHENYL DECANONE, XANTHAN GUM, TITANIUM DIOXIDE, DEXTRIN PALMITATE, POLYHYDROXYSTEARIC ACID, C13-15 ALKANE, DISTEARDIMONIUM HECTORITE, POLYGLYCERYL-3 POLYRICINOLEATE, DIMETHICONE/PEG-10 /15 CROSSPOLYMER, DECYL GLUCOSIDE, DISODIUM PHOSPHATE, CETYL ALCOHOL, HYDROXYACETOPHENONE, TRISODIUM ETHYLENEDIAMINE DISUCCINATE, TROMETHAMINE, CITRIC ACID.',
        lines: [
          {
            title: 'Synoxyl AZ',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-1',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Melanin',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-2',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('winter-melon-sunscreen-ingredient-title-line-3', {
              ns: 'server-products',
            }),
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-3',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Tinosorb M (Methylene Bis-Benzotriazolyl Tetramethylbutylphenol)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-4',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Neo Heliopan AP (Disodium Phenyl Dibenzimidazole Tetrasulfonate)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-5',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Uvinul A Plus (Diethylamino Hydroxybenzoyl Hexyl Benzoate)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-6',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Tinosorb A2B (Tris-Biphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-7',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Eclipsogen EHT (Ethylhexyl Triazone)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-8',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title:
              'Eclipsogen Sorb S (Bis- Ethyhexyloxyphenol Methoxyphenyl Triazine)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-9',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: 'Parsol 1789 (Avobenzone - Butyl Methoxydibenzoylmethane)',
            description: i18n.t(
              'winter-melon-sunscreen-ingredient-description-line-10',
              {
                ns: 'server-products',
              }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t('winter-melon-sunscreen-usage-description-content', {
          ns: 'server-products',
        }),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-usage-description-dosage',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-usage-description-texture',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-usage-description-fragrance',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'winter-melon-sunscreen-usage-description-note',
              {
                ns: 'server-products',
              }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t('winter-melon-sunscreen-short-description', {
      ns: 'server-products',
    }),
    original_price: 395000,
    price: 395000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.winterMelonSunscreen50,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: '498c9a12-00b9-413b-b5cb-b14aec676586',
    created_at: '2023-01-30T09:39:43.503Z',
    updated_at: '2024-07-22T03:04:32.651Z',
    name: i18n.t('daklak-coffee-facial-cleansing-gel-140ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_CLEANSER,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_DAKLAK_COFFEE,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-daklak-coffee', { ns: 'server-categories' }),
      },
    ],
    main_ingredients: i18n.t(
      'daklak-coffee-facial-cleansing-gel-main-ingredients',
      { ns: 'server-products' }
    ),
    functionality: i18n.t('daklak-coffee-facial-cleansing-gel-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('daklak-coffee-facial-cleansing-gel-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-content',
          { ns: 'server-products' }
        ),
        effects: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-effects',
          { ns: 'server-products' }
        ),
        suitable: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-suitable',
          { ns: 'server-products' }
        ),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          '<p>Aqua/Water, Coffea Robusta Seed Extract, Sodium Cocoyl Glycinate, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Peg-7 Glyceryl Cocoate, Peg-120 Methyl Glucose Triisostearate, Polyquaternium-39, Coffea Arabica Seed Oil, Caffeine, Sodium Pca, Pca, Arginine, Glycine, Alanine, Aspartic Acid, Serine, Valine, Proline, Threonine, Ethylhexylglycerin, Isoleucine, Sodium Lactate, Histidine, Phenylalanine, Hydroxypropyl Starch Phosphate, Maltodextrin, Xanthan Gum, Hydroxyethylcellulose, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Menthyl Lactate.</p>',
        lines: [
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-1',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-1',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-2',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-2',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-3',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-3',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-4',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-4',
              { ns: 'server-products' }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'daklak-coffee-facial-cleansing-gel-usage-description-content',
          { ns: 'server-products' }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-dosage',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-texture',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-fragrance',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-note',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t(
      'daklak-coffee-facial-cleansing-gel-short-description',
      {
        ns: 'server-products',
      }
    ),
    original_price: 195000,
    price: 195000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.daklakCoffeeFacialCleansingGel140,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: '1f9af297-d943-4ad7-a67c-eae1762f3d87',
    created_at: '2023-01-30T09:39:43.503Z',
    updated_at: '2024-07-22T03:04:32.651Z',
    name: i18n.t('daklak-coffee-facial-cleansing-gel-310ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit3Id.COMBO_FACIAL_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_CLEANSER,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_DAKLAK_COFFEE,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-daklak-coffee', { ns: 'server-categories' }),
      },
    ],
    main_ingredients: i18n.t(
      'daklak-coffee-facial-cleansing-gel-main-ingredients',
      { ns: 'server-products' }
    ),
    functionality: i18n.t('daklak-coffee-facial-cleansing-gel-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('daklak-coffee-facial-cleansing-gel-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-content',
          { ns: 'server-products' }
        ),
        effects: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-effects',
          { ns: 'server-products' }
        ),
        suitable: i18n.t(
          'daklak-coffee-facial-cleansing-gel-description-suitable',
          { ns: 'server-products' }
        ),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          '<p>Aqua/Water, Coffea Robusta Seed Extract, Sodium Cocoyl Glycinate, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Peg-7 Glyceryl Cocoate, Peg-120 Methyl Glucose Triisostearate, Polyquaternium-39, Coffea Arabica Seed Oil, Caffeine, Sodium Pca, Pca, Arginine, Glycine, Alanine, Aspartic Acid, Serine, Valine, Proline, Threonine, Ethylhexylglycerin, Isoleucine, Sodium Lactate, Histidine, Phenylalanine, Hydroxypropyl Starch Phosphate, Maltodextrin, Xanthan Gum, Hydroxyethylcellulose, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Menthyl Lactate.</p>',
        lines: [
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-1',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-1',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-2',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-2',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-3',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-3',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-title-line-4',
              { ns: 'server-products' }
            ),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-ingredient-description-line-4',
              { ns: 'server-products' }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'daklak-coffee-facial-cleansing-gel-usage-description-content',
          { ns: 'server-products' }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-dosage',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-texture',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-fragrance',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'daklak-coffee-facial-cleansing-gel-usage-description-note',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t(
      'daklak-coffee-facial-cleansing-gel-short-description',
      {
        ns: 'server-products',
      }
    ),
    original_price: 295000,
    price: 295000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.daklakCoffeeFacialCleansingGel310,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: 'a0c99f5e-2bed-4a15-9eaa-7a1c657c31ac',
    created_at: '2021-12-23T07:16:40.019Z',
    updated_at: '2024-11-11T04:07:23.063Z',
    name: i18n.t('hungyen-turmeric-facial-cleanser-140ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_CLEANSER,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_SKIN_PROBLEMS,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-skin-problems', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_DULL_SKIN,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-dull-skin', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_HUNGYEN_TURMERIC,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-hungyen-turmeric', {
          ns: 'server-categories',
        }),
      },
    ],
    main_ingredients: i18n.t(
      'hungyen-turmeric-facial-cleanser-main-ingredients',
      {
        ns: 'server-products',
      }
    ),
    functionality: i18n.t('hungyen-turmeric-facial-cleanser-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('hungyen-turmeric-facial-cleanser-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-content',
          {
            ns: 'server-products',
          }
        ),
        effects: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-effects',
          {
            ns: 'server-products',
          }
        ),
        suitable: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-suitable',
          {
            ns: 'server-products',
          }
        ),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          '<p>Aqua/Water, Coffea Robusta Seed Extract, Sodium Cocoyl Glycinate, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Peg-7 Glyceryl Cocoate, Peg-120 Methyl Glucose Triisostearate, Polyquaternium-39, Coffea Arabica Seed Oil, Caffeine, Sodium Pca, Pca, Arginine, Glycine, Alanine, Aspartic Acid, Serine, Valine, Proline, Threonine, Ethylhexylglycerin, Isoleucine, Sodium Lactate, Histidine, Phenylalanine, Hydroxypropyl Starch Phosphate, Maltodextrin, Xanthan Gum, Hydroxyethylcellulose, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Menthyl Lactate.</p>',
        lines: [
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-1',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-1',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-2',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-2',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-3',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-3',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-4',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-4',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-5',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-5',
              { ns: 'server-products' }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'hungyen-turmeric-facial-cleanser-usage-description-content',
          {
            ns: 'server-products',
          }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-dosage',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-texture',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-fragrance',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-note',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t(
      'hungyen-turmeric-facial-cleanser-short-description',
      {
        ns: 'server-products',
      }
    ),
    original_price: 195000,
    price: 195000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.hungyenTurmericFacialCleanser140,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
  {
    id: '2b792ad1-a637-4897-943b-70ca90e57231',
    created_at: '2021-12-23T07:16:40.019Z',
    updated_at: '2024-11-11T04:07:23.063Z',
    name: i18n.t('hungyen-turmeric-facial-cleanser-310ml-name', {
      ns: 'server-products',
    }),
    categories: [
      {
        id: CategoryUnit2Id.SKIN_CARE,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('products-skin-care', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.SKIN_CARE_CLEANSER,
        group_id: CategoryUnitId.PRODUCTS,
        name: i18n.t('skin-care-cleanser', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_SKIN_PROBLEMS,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-skin-problems', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.PROBLEMS_DULL_SKIN,
        group_id: CategoryUnitId.PROBLEMS,
        name: i18n.t('problems-dull-skin', { ns: 'server-categories' }),
      },
      {
        id: CategoryUnit3Id.INGREDIENTS_HUNGYEN_TURMERIC,
        group_id: CategoryUnitId.INGREDIENTS,
        name: i18n.t('ingredients-hungyen-turmeric', {
          ns: 'server-categories',
        }),
      },
    ],
    main_ingredients: i18n.t(
      'hungyen-turmeric-facial-cleanser-main-ingredients',
      {
        ns: 'server-products',
      }
    ),
    functionality: i18n.t('hungyen-turmeric-facial-cleanser-functionality', {
      ns: 'server-products',
    }),
    suitable: i18n.t('hungyen-turmeric-facial-cleanser-suitable', {
      ns: 'server-products',
    }),
    properties: [
      'ALCOHOL_FREE',
      'SULFATE_FREE',
      'NO_MINERAL_OIL',
      'NO_PARABENS',
    ],
    descriptions: {
      product_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-content',
          {
            ns: 'server-products',
          }
        ),
        effects: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-effects',
          {
            ns: 'server-products',
          }
        ),
        suitable: i18n.t(
          'hungyen-turmeric-facial-cleanser-description-suitable',
          {
            ns: 'server-products',
          }
        ),
      },
      ingredients_description: {
        image: {
          default: '/',
        },
        content:
          '<p>Aqua/Water, Coffea Robusta Seed Extract, Sodium Cocoyl Glycinate, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Glycerin, Peg-7 Glyceryl Cocoate, Peg-120 Methyl Glucose Triisostearate, Polyquaternium-39, Coffea Arabica Seed Oil, Caffeine, Sodium Pca, Pca, Arginine, Glycine, Alanine, Aspartic Acid, Serine, Valine, Proline, Threonine, Ethylhexylglycerin, Isoleucine, Sodium Lactate, Histidine, Phenylalanine, Hydroxypropyl Starch Phosphate, Maltodextrin, Xanthan Gum, Hydroxyethylcellulose, Polysorbate 20, Trisodium Ethylenediamine Disuccinate, Phenoxyethanol, Menthyl Lactate.</p>',
        lines: [
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-1',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-1',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-2',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-2',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-3',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-3',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-4',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-4',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-title-line-5',
              {
                ns: 'server-products',
              }
            ),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-ingredient-description-line-5',
              { ns: 'server-products' }
            ),
          },
        ],
      },
      usage_description: {
        image: {
          default: '/',
        },
        content: i18n.t(
          'hungyen-turmeric-facial-cleanser-usage-description-content',
          {
            ns: 'server-products',
          }
        ),
        lines: [
          {
            title: i18n.t('usage-title-dosage', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-dosage',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-texture', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-texture',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-fragrance', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-fragrance',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-note', { ns: 'server-products' }),
            description: i18n.t(
              'hungyen-turmeric-facial-cleanser-usage-description-note',
              { ns: 'server-products' }
            ),
          },
          {
            title: i18n.t('usage-title-origin', { ns: 'server-products' }),
            description: i18n.t('usage-origin-vietnam', {
              ns: 'server-products',
            }),
          },
        ],
      },
    },
    short_description: i18n.t(
      'hungyen-turmeric-facial-cleanser-short-description',
      {
        ns: 'server-products',
      }
    ),
    original_price: 295000,
    price: 295000,
    product_stamp: true,
    out_of_stock: false,
    certifications: ['PETA', 'CRUELTY_FREE', 'VEGAN'],
    front_image: {
      default: '/',
      thumbnail: productImages.hungyenTurmericFacialCleanser310,
    },
    back_image: {
      default: '/',
    },
    slider_images: [
      {
        default: '/',
      },
    ],
  },
];
