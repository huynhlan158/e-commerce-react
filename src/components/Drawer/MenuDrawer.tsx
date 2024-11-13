import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useMediaQuery,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';
import { AppDispatch, RootState } from '~/state/store';
import { logOut } from '~/state/auth/authSlice';
import { updateNavigationPath } from '~/state/navigation/navigationSlice';
import { useCategoryById } from '~/services/config/resources';
import { Category, CategoryUnit } from '~/services/config/models/Category';

import { Icon, IconType } from '../Icons';
import { HStack, VStack } from '../Layouts';
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

  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

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
        mainContent={<div>Main content</div>}
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

  const { data: productCategories } = useCategoryById(CategoryUnit.PRODUCTS);

  let mobileProductCategories = productCategories;
  for (const path of navigationPath.slice(1)) {
    mobileProductCategories = productCategories?.data.find(
      (category) => category.id === path.id
    );
    if (!mobileProductCategories) {
      if (path.isFetchingData && path.slug) {
        try {
          // TODO: fetching API to get list of products
        } catch (error) {
          console.error({ error });
        }
      } else {
        break;
      }
    }
  }

  const [isLaptop] = useMediaQuery('(min-width: 1024px)');
  if (isLaptop) {
    return productCategories && <MenuList category={productCategories} />;
  }

  return (
    <>
      {productCategories && (
        <MenuList category={mobileProductCategories || productCategories} />
      )}
    </>
  );
}

/**
 * A UI component to render the menu list.
 */
function MenuList({ category }: { category: Category }) {
  const dispatch = useDispatch<AppDispatch>();
  const { navigationPath } = useSelector(
    (state: RootState) => state.navigation
  );

  const isActive = category.id === navigationPath[category.depth].id;

  const [isLaptop] = useMediaQuery('(min-width: 1024px)');

  return (
    <VStack
      key={category.id}
      alignItems="flex-start"
      gap={[12, 12, 12, 16]}
      className="px-20 laptop:px-40"
    >
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
              navigationPath[category.depth + 1].id === childCategory.id
            }
            onClick={() => {
              const newNavigationPath = [...navigationPath];
              newNavigationPath[category.depth + 1] = {
                id: childCategory.id,
              };
              dispatch(updateNavigationPath(newNavigationPath));
            }}
          />
        ))}
    </VStack>
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
