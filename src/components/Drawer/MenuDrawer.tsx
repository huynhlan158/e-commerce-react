import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import { logOut } from '~/state/auth/authSlice';
import {
  updateNavigationPath,
  setProductsByCategory,
} from '~/state/navigation/navigationSlice';
import { useCategoryById } from '~/services/config/resources';
import { Category, CategoryUnitId } from '~/services/config/models/Category';
import { useProducts } from '~/services/product/resources';

import { Icon, IconType } from '../Icons';
import { HStack, LoadingState, VStack } from '../Layouts';
import { IconButton } from '../Forms/IconButton';
import { Button } from '../Forms';
import { Modal } from '../Modal';
import { Heading, Text } from '../TypoGraphy';

type MobileMenuType = 'MENU' | 'CONTACT';

/**
 * The menu drawer of the navigation.
 */
export function MenuDrawer() {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const { isDrawerOpen, onDrawerClose, onModalOpen } = useDisclosureStore();

  const [menuType, setMenuType] = useState<MobileMenuType>('MENU');

  const [isLaptop] = useMediaQuery('min-width: 1024px');

  useEffect(() => {
    return () => {
      if (menuType === 'CONTACT') setMenuType('MENU');
    };
  }, []);

  return (
    <>
      <ChakraDrawer
        placement="left"
        size={['full', 'full', 'full', 'sm']}
        isOpen={isDrawerOpen}
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <HStack
            justifyContent="space-between"
            className="h-64 laptop:mt-96 desktop:mt-128 px-20"
          >
            <HStack gap={28} className="w-full laptop:justify-end">
              <IconButton
                aria-label="Close"
                variant="ghost"
                size="md"
                icon={<Icon size="2xl" type="X_MARK" />}
                onClick={onDrawerClose}
              />
              {(menuType === 'CONTACT' || navigationPath[1]) && !isLaptop && (
                <IconButton
                  aria-label="Back"
                  variant="ghost"
                  size="md"
                  icon={<Icon size="lg" type="ARROW_LEFT" />}
                  onClick={() => {
                    if (menuType === 'CONTACT') {
                      setMenuType('MENU');
                    } else if (navigationPath.length) {
                      const newNavigationPath = navigationPath.slice(0, -1);
                      dispatch(updateNavigationPath(newNavigationPath));
                      dispatch(setProductsByCategory(null));
                    }
                  }}
                />
              )}
            </HStack>
            <IconButton
              className="laptop:hidden"
              aria-label="User"
              variant="ghost"
              size="md"
              icon={
                <Icon
                  size="2xl"
                  type="USER"
                  iconColorClassname={clsx(
                    menuType === 'CONTACT' && 'text-gold-500'
                  )}
                />
              }
              onClick={() => {
                if (isAuthenticated) {
                  setMenuType('CONTACT');
                } else {
                  onDrawerClose();
                  onModalOpen();
                }
              }}
            />
          </HStack>

          <DrawerBody className="">
            {menuType === 'CONTACT' ? <ContactContent /> : <MenuContent />}
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

/**
 * A UI component to render the menu content that contains menu lists.
 */
function MenuContent() {
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

/**
 * A UI component to render the contact content.
 */
function ContactContent() {
  const { t } = useTranslation(['navigation-bar']);

  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector((state: RootState) => state.auth);

  const { onDrawerClose } = useDisclosureStore();

  return (
    <>
      <MobileAccountDetail
        iconType="PHONE"
        label={userProfile?.phoneNumber || ''}
        variant="dark"
      />
      <MobileAccountDetail iconType="USER" label={t('item-account-info')} />
      <MobileAccountDetail
        iconType="ARCHIVE_BOX"
        label={t('item-shopping-history')}
      />
      <MobileAccountDetail
        iconType="ARROW_RIGHT_START_ON_RECTANGLE"
        label={t('item-log-out')}
        action={() => {
          onDrawerClose();
          dispatch(logOut());
        }}
      />
    </>
  );
}

interface MobileAccountDetailProps {
  /**
   * The label of the navigation item.
   */
  label: string;
  /**
   * The icon type of the navigation item.
   */
  iconType: IconType;
  /**
   * The variant of the icon.
   * @default 'light'
   */
  variant?: 'dark' | 'light';
  /**
   * The handler for onClick event of the navbar item.
   */
  action?: () => void;
}

/**
 * A UI component to render the account detail item.
 */
function MobileAccountDetail({
  label,
  variant = 'light',
  iconType,
  action,
}: MobileAccountDetailProps) {
  return (
    <HStack
      className={clsx(
        'px-22 py-24',
        variant === 'dark'
          ? 'bg-gray-900 text-peach-200'
          : 'hover:bg-peach-400',
        action && 'cursor-pointer'
      )}
      gap={24}
      alignItems="center"
      onClick={action}
    >
      <Icon
        size="md"
        type={iconType}
        iconColorClassname={clsx(variant === 'dark' && 'text-peach-200')}
      />
      <Text size="md" text={label} className="font-600" />
    </HStack>
  );
}
