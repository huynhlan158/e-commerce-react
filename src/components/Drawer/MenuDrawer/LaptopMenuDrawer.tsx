import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
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
  NavbarItemId,
  setCategoryIdForProductList,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useCategoryById } from '~/services/config/resources';
import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { Product } from '~/services/product/models/Product';
import { useProducts } from '~/services/product/resources';

import { Icon } from '~/components/Icons';
import { VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { MenuCategoryList } from './components/MenuCategoryList';
import { MenuProductList } from './components/MenuProductList';
import { MenuLoadingState } from './components/MenuLoadingState';
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
  const { data: brandCategories } = useCategoryById(CategoryUnitId.BRAND);
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

      // Update navigation path based on category depth.
      switch (category.depth) {
        case 0:
          dispatch(setNavigationPath([currentNavigationPath]));
          break;
        case 1:
          dispatch(
            setNavigationPath([
              { id: category.group_id || '' },
              currentNavigationPath,
            ])
          );
          break;
        case 2:
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
            'CategoryCloseButton--laptop',
            navigationPath.length === 1 && 'left-[88%]',
            navigationPath.length === 2 && 'left-[188%]',
            navigationPath.length === 3 && 'left-[288%]'
          )}
        />

        {/* The main top-level categories. */}
        <DrawerBody zIndex={100}>
          <VStack
            alignItems="flex-start"
            gap={20}
            pb={36}
            className="CategoryWrapper"
          >
            {navigationPath[0]?.id === NavbarItemId.COCOON &&
            brandCategories ? (
              <MenuCategoryList
                category={brandCategories}
                childCategoryAction={handleChildCategoryClick}
              />
            ) : (
              <>
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
              </>
            )}
          </VStack>
        </DrawerBody>

        {/* The second-level categories. */}
        <ExpandedMenuDrawer
          level={2}
          isFetching={
            isFetchingSearchedProductList && navigationPath.length === 2
          }
          productList={searchedProductList}
          category={navigationPath[1]?.selectedCategory}
          childCategoryAction={handleChildCategoryClick}
        />

        {/* The third(last)-level categories. */}
        <ExpandedMenuDrawer
          level={3}
          isFetching={isFetchingSearchedProductList}
          productList={searchedProductList}
          category={navigationPath[2]?.selectedCategory}
          childCategoryAction={handleChildCategoryClick}
        />
      </DrawerContent>
    </ChakraDrawer>
  );
}

interface ExpandedMenuDrawerProps {
  /**
   * The level of the expanded menu drawer.
   */
  level: 2 | 3;
  /**
   * Whether there is a running fetch request to retrieve the list of items.
   */
  isFetching: boolean;
  /**
   * The product list of the current category.
   */
  productList?: Product[];
  /**
   * The current category item.
   */
  category?: Category;
  /**
   * The hander for onClick event on the child category item.
   */
  childCategoryAction: (category: Category) => void;
}

/**
 * A UI to render the expanded part in nested level of menu drawer in laptop view and upper.
 */
function ExpandedMenuDrawer({
  level,
  isFetching,
  productList,
  category,
  childCategoryAction,
}: ExpandedMenuDrawerProps) {
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );
  const isVisible = useMemo(
    () => navigationPath.length + 1 > level,
    [navigationPath, level]
  );

  return (
    <VStack
      alignItems="flex-start"
      gap={20}
      pb={36}
      zIndex={100 - level * 1}
      width="100%"
      className={clsx(
        'CategoryWrapper CategoryWrapper--Expanded',
        isVisible ? (level === 3 ? 'left-[200%]' : 'left-full') : 'left-0'
      )}
    >
      {isFetching ? (
        <MenuLoadingState title={category?.name || ''} />
      ) : category?.fetch_data_for_product_list && productList ? (
        <MenuProductList
          categoryName={category.name}
          productList={productList}
        />
      ) : category ? (
        <MenuCategoryList
          category={category}
          childCategoryAction={childCategoryAction}
        />
      ) : null}
    </VStack>
  );
}
