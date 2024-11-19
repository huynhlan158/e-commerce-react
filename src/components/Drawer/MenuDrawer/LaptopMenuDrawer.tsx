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

import { Icon } from '~/components/Icons';
import { HStack, VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { MenuCategoryList } from './components/MenuCategoryList';

/**
 * The menu drawer conent of the navigation in laptop view.
 */
export function LaptopMenuDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath } = useSelector(
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

  const handleChildCategoryClick = useCallback(
    (category: Category) => {
      const newNavigationPath = [...navigationPath];
      newNavigationPath[category.depth] = {
        id: category.id,
        selectedCategory: category,
      };
      dispatch(setNavigationPath(newNavigationPath));
      if (category.fetch_data_for_product_list) {
        dispatch(setCategoryIdForProductList(category.id));
      }
    },
    [navigationPath]
  );

  return (
    <>
      <ChakraDrawer
        placement="left"
        size="sm"
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <HStack
            justifyContent="flex-end"
            className="h-64 mt-96 desktop:mt-128 px-20 desktop:px-32"
          >
            {/* The close button. */}
            <IconButton
              aria-label="Close"
              variant="ghost"
              size="md"
              icon={<Icon size="2xl" type="X_MARK" />}
              onClick={onDrawerClose}
            />
          </HStack>

          <DrawerBody>
            <VStack
              alignItems="flex-start"
              gap={12}
              className="px-20 desktop:px-32"
            >
              {productCategories && (
                // Top-level category list: Products.
                <MenuCategoryList
                  category={productCategories}
                  childCategoryAction={handleChildCategoryClick}
                />
              )}

              {problemsCategories && (
                // Top-level category list: Interest.
                <MenuCategoryList
                  category={problemsCategories}
                  childCategoryAction={handleChildCategoryClick}
                />
              )}

              {ingredientCategories && (
                // Top-level category button: Ingredients.
                <MenuCategoryList
                  category={ingredientCategories}
                  childCategoryAction={handleChildCategoryClick}
                />
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
