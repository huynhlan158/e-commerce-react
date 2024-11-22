import clsx from 'clsx';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import routes from '~/config/routes';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import {
  NavbarItemId,
  setCategoryIdForProductList,
  setNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useCategoryById } from '~/services/config/resources';
import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { useProducts } from '~/services/product/resources';

import { Icon } from '~/components/Icons';
import { HStack, VStack } from '~/components/Layouts';
import { IconButton } from '~/components/Forms/IconButton';
import { Button } from '~/components/Forms';
import { MenuCategoryList } from './components/MenuCategoryList';
import { MenuProductList } from './components/MenuProductList';
import { UserProfile } from './components/UserProfile';
import { MenuLoadingState } from './components/MenuLoadingState';

type MenuDrawerType = 'MENU' | 'PROFILE';

/**
 * The menu drawer content of the navigation in mobile view.
 */
export function MobileMenuDrawer() {
  const { t } = useTranslation(['navigation-bar', 'common']);
  const navigate = useNavigate();
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
              <UserProfile />
            ) : (
              <VStack h="full" alignItems="flex-start" gap={12} px={20}>
                {/*
                 ** Show the product list by selected category if available (1);
                 ** otherwise, show the child category list if available (2);
                 ** if not, show the top-level category list (3)).
                 */}
                {isFetchingSearchedProductList && selectedChildCategory ? (
                  <MenuLoadingState title={selectedChildCategory.name} />
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
                    {/* (3) Top-level category list: Products. */}
                    {productCategories && (
                      <MenuCategoryList
                        category={productCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {/* (3) Top-level category list: Interest. */}
                    {problemsCategories && (
                      <MenuCategoryList
                        category={problemsCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {/* (3) Top-level category list: Ingredients. */}
                    {ingredientCategories && (
                      <MenuCategoryList
                        category={ingredientCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {/* (3) Top-level category list: Brand. */}
                    {brandCategories && (
                      <MenuCategoryList
                        category={brandCategories}
                        childCategoryAction={handleChildCategoryClick}
                      />
                    )}

                    {/* (3) Button for routing to 'Articles' page. */}
                    <Button
                      variant="ghost"
                      label={t('navbar-articles')}
                      lableWeight="bold"
                      className="Animation--fadeSlideIn leading-26"
                      onClick={() => {
                        navigate(routes.article);
                        dispatch(
                          setNavigationPath([{ id: NavbarItemId.ARTICLES }])
                        );
                        onDrawerClose();
                      }}
                    />

                    {/* (3) Button for opening the contact modal. */}
                    <Button
                      variant="ghost"
                      label={t('navbar-contact')}
                      lableWeight="bold"
                      className="Animation--fadeSlideIn leading-26"
                      onClick={() => {
                        onDrawerClose();
                        // TODO: contact modal
                      }}
                    />

                    {/* (3) Button for toggling languages. */}
                    <Button
                      variant="ghost"
                      label={t('language-vi', { ns: 'common' })}
                      lableWeight="bold"
                      className="Animation--fadeSlideIn leading-26"
                      onClick={() => {
                        // TODO: language switcher
                      }}
                    />
                  </>
                )}
              </VStack>
            )}
          </DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
}
