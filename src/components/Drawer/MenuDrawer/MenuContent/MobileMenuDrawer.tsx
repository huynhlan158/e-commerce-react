import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
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
import { HStack, LoadingState, VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { Modal } from '~/components/Modal';
import { Heading } from '~/components/TypoGraphy';
import { ContactContent } from '../ContactContent';
import { MenuCategoryList } from '../MenuContent/MenuCategoryList';
import { MenuProductList } from '../MenuContent/MenuProductList';

type MenuDrawerType = 'MENU' | 'PROFILE';

/**
 * The menu drawer of the navigation in mobile view.
 */
export function MobileMenuDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { navigationPath, categoryIdForProductList } = useSelector(
    (state: RootState) => state.navigation
  );
  const { isDrawerOpen, onDrawerClose, onModalOpen } = useDisclosureStore();

  const [menuDrawerType, setMenuDrawerType] = useState<MenuDrawerType>('MENU');

  // TODO: move theses API calls to a initiate provider
  // which will load all needed values and show the loading icon during that process.
  const { data: productCategories } = useCategoryById(CategoryUnitId.PRODUCTS);
  const { data: interestCategories } = useCategoryById(CategoryUnitId.INTEREST);
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

  const selectedChildCategory = useMemo(() => {
    return (
      navigationPath.length > 1 &&
      navigationPath[navigationPath.length - 1]?.selectedCategory
    );
  }, [navigationPath]);

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
        size="full"
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />

        <DrawerContent>
          <HStack justifyContent="space-between" className="h-64 px-20">
            {/* Left part: The action buttons. */}
            <HStack gap={28} className="w-full">
              {/* The close button. */}
              <IconButton
                aria-label="Close"
                variant="ghost"
                size="md"
                icon={<Icon size="2xl" type="X_MARK" />}
                onClick={onDrawerClose}
              />

              {/* The back button to bring back the previous category. */}
              {(menuDrawerType === 'PROFILE' || navigationPath.length > 1) && (
                <IconButton
                  aria-label="Back"
                  variant="ghost"
                  size="md"
                  icon={<Icon size="lg" type="ARROW_LEFT" />}
                  onClick={() => {
                    if (menuDrawerType === 'PROFILE') {
                      setMenuDrawerType('MENU');
                    } else {
                      const newNavigationPath = navigationPath.slice(0, -1);
                      dispatch(setNavigationPath(newNavigationPath));
                      dispatch(setCategoryIdForProductList(null));
                    }
                  }}
                />
              )}
            </HStack>

            {/* Right part: The user's profile button. */}
            <IconButton
              aria-label="User"
              variant="ghost"
              size="md"
              icon={
                <Icon
                  size="2xl"
                  type="USER"
                  iconColorClassname={clsx(
                    menuDrawerType === 'PROFILE' && 'text-gold-500'
                  )}
                />
              }
              onClick={() => {
                if (isAuthenticated) {
                  setMenuDrawerType('PROFILE');
                } else {
                  onDrawerClose();
                  onModalOpen();
                }
              }}
            />
          </HStack>

          <DrawerBody>
            {menuDrawerType === 'PROFILE' ? (
              <ContactContent />
            ) : (
              <VStack alignItems="flex-start" gap={12} className="px-20">
                {/*
                 ** Show the product list by selected category if available (1);
                 ** otherwise, show the child category list if available (2);
                 ** if not, show the top-level category list (3)).
                 */}
                {isFetchingSearchedProductList && selectedChildCategory ? (
                  <>
                    <Heading
                      text={selectedChildCategory.name}
                      level={5}
                      variant="secondary"
                      size="xs"
                    />
                    <LoadingState />
                  </>
                ) : searchedProductList &&
                  categoryIdForProductList &&
                  selectedChildCategory ? (
                  // (1) Product list by selected category.
                  <MenuProductList
                    categoryName={selectedChildCategory.name}
                    productList={searchedProductList}
                  />
                ) : selectedChildCategory ? (
                  // (2) Child category list.
                  <MenuCategoryList
                    category={selectedChildCategory}
                    childCategoryAction={handleChildCategoryClick}
                  />
                ) : (
                  <>
                    {productCategories && (
                      // (3) Top-level category list: Products.
                      <MenuCategoryList
                        category={productCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {interestCategories && (
                      // (3) Top-level category list: Interest.
                      <MenuCategoryList
                        category={interestCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {ingredientCategories && (
                      // (3) Top-level category list: Ingredients.
                      <MenuCategoryList
                        category={ingredientCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}
                  </>
                )}
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>

      {/* TODO: Login modal */}
      <Modal
        title="Login"
        description="Login description"
        mainContent={<div>Login content</div>}
      />
    </>
  );
}
