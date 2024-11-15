import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Image, useMediaQuery, VStack } from '@chakra-ui/react';

import { AppDispatch, RootState } from '~/state/store';
import {
  setProductsByCategory,
  updateNavigationPath,
} from '~/state/navigation/navigationSlice';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { useCategoryById } from '~/services/config/resources';
import { useProducts } from '~/services/product/resources';

import { Button } from '~/components/Forms';
import { LoadingState } from '~/components/Layouts';
import { Heading, Text } from '~/components/TypoGraphy';

/**
 * A UI component to render the menu content that contains list of categories
 * and/or products by selected category.
 */
export function MenuContent() {
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const { data: productCategories } = useCategoryById(CategoryUnitId.PRODUCTS);

  let mobileProductCategories = productCategories;
  for (const path of navigationPath.slice(1)) {
    mobileProductCategories = productCategories?.data.find(
      (category) => category.id === path.id
    );
    if (!mobileProductCategories) break;
  }

  const [isLaptop] = useMediaQuery('min-width: 1024px');
  if (isLaptop) {
    return (
      <VStack alignItems="flex-start" gap={16} className="px-40">
        {productCategories && <MenuList category={productCategories} />}
      </VStack>
    );
  }

  return (
    <VStack alignItems="flex-start" gap={12} className="px-20">
      {productCategories && (
        <MenuList category={mobileProductCategories || productCategories} />
      )}
    </VStack>
  );
}

/**
 * A UI component to render the menu list.
 */
function MenuList({ category }: { category: Category }) {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath, productsByCategory } = useSelector(
    (state: RootState) => state.navigation
  );

  const { onDrawerClose } = useDisclosureStore();

  const [currentCategory, setCurrentCategory] = useState<{
    id: string;
    name: string;
  }>();

  const {
    data: productList,
    refetch: refetchProductList,
    isFetching,
  } = useProducts(
    currentCategory ? { categoryId: currentCategory?.id } : undefined
  );

  useEffect(() => {
    if (productList) {
      dispatch(
        setProductsByCategory({
          depth: category.depth + 2,
          data: productList,
        })
      );
    }
  }, [isFetching]);

  const [isLaptop] = useMediaQuery('min-width: 1024px');
  const isActive = category.id === navigationPath[category.depth].id;

  /**
   * Loading state when fetching product list in mobile view.
   */
  if (isFetching && currentCategory && !isLaptop) {
    return (
      <>
        <Heading
          text={currentCategory.name}
          level={5}
          variant="secondary"
          size="xs"
        />
        <LoadingState />
      </>
    );
  }

  /**
   * Product list by category in mobile view.
   */
  if (productsByCategory && currentCategory && !isLaptop) {
    return (
      <>
        <Heading
          text={currentCategory.name}
          level={5}
          variant="secondary"
          size="xs"
          weight={700}
        />

        {productsByCategory.data.length ? (
          <>
            <Text
              text={t('result-count', {
                count: productsByCategory.data.length,
              })}
              size="xl"
              className="text-gray-500 mt-4"
            />
            <VStack gap={40} className="w-full my-40">
              {productsByCategory.data.map((product) => (
                // TODO: navigate to the product detail page
                <NavLink
                  to="#"
                  key={product.id}
                  onClick={onDrawerClose}
                  className="w-full flex justify-between items-center"
                >
                  <VStack alignItems="flex-start" gap={8}>
                    <Heading
                      text={product.name}
                      level={6}
                      size="xs"
                      variant="secondary"
                    />
                    <Text text={product.functionality} size="sm" />
                    {/* TODO: monetary format */}
                    <Text
                      text={product.price.toString()}
                      size="sm"
                      variant="gray"
                      className="mt-4"
                    />
                  </VStack>

                  <Image
                    src={product.front_image.thumbnail}
                    h="72px"
                    w="72px"
                  />
                </NavLink>
              ))}
            </VStack>
          </>
        ) : (
          <Text text={t('no-results')} size="xl" className="text-gray-500" />
        )}
      </>
    );
  }

  /**
   * Product category list in drawer menu for all screen sizes.
   */
  return (
    <>
      {isLaptop && isActive ? (
        <Heading text={category.name} level={5} variant="gray" size="xs" />
      ) : (
        <Button
          variant="ghost"
          label={category.name}
          lableWeight="bold"
          className="leading-26"
          isActive={isActive}
        />
      )}
      {isActive &&
        category.data.map((childCategory) => (
          <Button
            key={childCategory.id}
            variant="ghost"
            size={isLaptop ? '2xl' : 'xl'}
            label={childCategory.name}
            lableVariant="gray"
            className="leading-26"
            isActive={
              navigationPath[category.depth + 1]?.id === childCategory.id
            }
            onClick={() => {
              const newNavigationPath = [...navigationPath];
              newNavigationPath[category.depth + 1] = {
                id: childCategory.id,
              };
              dispatch(updateNavigationPath(newNavigationPath));
              if (childCategory.fetch_data_for_product_list) {
                if (childCategory.id === currentCategory?.id) {
                  refetchProductList();
                } else {
                  setCurrentCategory({
                    id: childCategory.id,
                    name: childCategory.name,
                  });
                }
              }
            }}
          />
        ))}
    </>
  );
}
