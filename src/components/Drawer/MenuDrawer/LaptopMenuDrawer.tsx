import clsx from 'clsx';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import {
  setCategoryIdForProductList,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useCategoryById } from '~/services/config/resources';
import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { useProducts } from '~/services/product/resources';

import { Icon } from '~/components/Icons';
import { VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { MenuCategoryList } from './components/MenuCategoryList';
import { MenuProductList } from './components/MenuProductList';
import { ProductLoading } from './components/ProductLoading';
import './index.css';

/**
 * The menu drawer conent of the navigation in laptop view.
 */
export function LaptopMenuDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath, categoryIdForProductList } = useSelector(
    (state: RootState) => state.navigation
  );
  const { isDrawerOpen, onDrawerClose } = useDisclosureStore();

  // TODO: move theses API calls to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: productCategories } = useCategoryById(CategoryUnitId.PRODUCTS);
  const { data: problemsCategories } = useCategoryById(CategoryUnitId.PROBLEMS);
  const { data: ingredientCategories } = useCategoryById(
    CategoryUnitId.INGREDIENTS
  );
  const {
    data: searchedProductList,
    isFetching: isFetchingSearchedProductList,
  } = useProducts(
    categoryIdForProductList
      ? { categoryId: categoryIdForProductList }
      : undefined
  );

  const handleChildCategoryClick = useCallback(
    (category: Category) => {
      const currentNavigationPath = {
        id: category.id,
        selectedCategory: category,
      };

      switch (category.depth) {
        case 0:
          // Reset the navigationPath with the top-level category
          // if the clicked category is the top-level one.
          dispatch(setNavigationPath([currentNavigationPath]));
          break;
        case 1:
          // Reset the first navigation path item
          // if the clicked category is the second-level one.
          dispatch(
            setNavigationPath([
              { id: category.group_id || '' },
              currentNavigationPath,
            ])
          );
          break;
        case 2:
          // Update the last navigation path item
          // if the clicked category is the third(last)-level one.
          const newNavigationPath = [...navigationPath];
          newNavigationPath[2] = currentNavigationPath;
          dispatch(setNavigationPath(newNavigationPath));
          break;
      }

      // Update the category id to fetch data for product list
      // if 'fetch_data_for_product_list' is set to 'true'.
      if (category.fetch_data_for_product_list) {
        dispatch(setCategoryIdForProductList(category.id));
      }
    },
    [navigationPath]
  );

  return (
    <ChakraDrawer
      placement="left"
      size="sm"
      isOpen={isDrawerOpen}
      onClose={onDrawerClose}
    >
      <DrawerOverlay />

      <DrawerContent>
        {/* The close button. */}
        <IconButton
          aria-label="Close"
          variant="ghost"
          size="md"
          icon={<Icon size="2xl" type="X_MARK" />}
          onClick={onDrawerClose}
          className={clsx(
            'CategoryCloseButton',
            navigationPath.length === 1 && 'left-[88%]',
            navigationPath.length === 2 && 'left-[188%]',
            navigationPath.length === 3 && 'left-[288%]'
          )}
        />

        {/* The main top-level categories. */}
        <DrawerBody zIndex={90}>
          <VStack
            alignItems="flex-start"
            gap={12}
            mb={36}
            className="CategoryWrapper"
          >
            {productCategories && (
              <MenuCategoryList
                category={productCategories}
                childCategoryAction={handleChildCategoryClick}
              />
            )}

            {problemsCategories && (
              <MenuCategoryList
                category={problemsCategories}
                childCategoryAction={handleChildCategoryClick}
              />
            )}

            {ingredientCategories && (
              <MenuCategoryList
                category={ingredientCategories}
                childCategoryAction={handleChildCategoryClick}
              />
            )}
          </VStack>
        </DrawerBody>

        {/* The second-level categories. */}
        {navigationPath[1]?.selectedCategory && (
          <VStack
            alignItems="flex-start"
            gap={12}
            zIndex={80}
            left="100%"
            width="100%"
            className={clsx(
              'CategoryWrapper CategoryWrapper--Expanded',
              navigationPath.length > 1 ? 'translate-x-0' : '-translate-x-full'
            )}
          >
            {isFetchingSearchedProductList && navigationPath.length === 2 ? (
              <ProductLoading title={navigationPath[1].selectedCategory.name} />
            ) : navigationPath[1].selectedCategory
                .fetch_data_for_product_list &&
              searchedProductList &&
              navigationPath.length === 2 ? (
              <MenuProductList
                categoryName={navigationPath[1].selectedCategory.name}
                productList={searchedProductList}
              />
            ) : (
              <MenuCategoryList
                category={navigationPath[1].selectedCategory}
                childCategoryAction={handleChildCategoryClick}
              />
            )}
          </VStack>
        )}

        {/* The third(last)-level categories. */}
        {navigationPath[2]?.selectedCategory && (
          <VStack
            alignItems="flex-start"
            gap={12}
            zIndex={70}
            left="200%"
            width="100%"
            className={clsx(
              'CategoryWrapper CategoryWrapper--Expanded',
              navigationPath.length === 3
                ? 'translate-x-0'
                : navigationPath.length === 2
                  ? '-translate-x-full'
                  : '-translate-x-[200%]'
            )}
          >
            {isFetchingSearchedProductList && navigationPath.length === 3 ? (
              <ProductLoading title={navigationPath[2].selectedCategory.name} />
            ) : navigationPath[2].selectedCategory
                .fetch_data_for_product_list &&
              searchedProductList &&
              navigationPath.length === 3 ? (
              <MenuProductList
                categoryName={navigationPath[2].selectedCategory.name}
                productList={searchedProductList}
              />
            ) : (
              <MenuCategoryList
                category={navigationPath[2].selectedCategory}
                childCategoryAction={handleChildCategoryClick}
              />
            )}
          </VStack>
        )}
      </DrawerContent>
    </ChakraDrawer>
  );
}
