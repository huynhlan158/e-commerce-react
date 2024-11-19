import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { logOut } from '~/state/auth/authSlice';
import { AppDispatch, RootState } from '~/state/store';
import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';

import { Icon, IconType } from '~/components/Icons';
import { HStack } from '~/components/Layouts';
import { Text } from '~/components/TypoGraphy';

/**
 * A UI component to render the current user profile.
 */
export function UserProfile() {
  const { t } = useTranslation(['navigation-bar']);

  const dispatch = useDispatch<AppDispatch>();
  const { userProfile } = useSelector((state: RootState) => state.auth);

  const { onDrawerClose } = useDisclosureStore();

  return (
    <>
      <UserProfileItem
        iconType="PHONE"
        label={userProfile?.phoneNumber || ''}
        variant="dark"
      />
      <UserProfileItem iconType="USER" label={t('item-account-info')} />
      <UserProfileItem
        iconType="ARCHIVE_BOX"
        label={t('item-shopping-history')}
      />
      <UserProfileItem
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

interface AccountDetailProps {
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
function UserProfileItem({
  label,
  variant = 'light',
  iconType,
  action,
}: AccountDetailProps) {
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
