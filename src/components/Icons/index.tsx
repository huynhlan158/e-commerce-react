import clsx from 'clsx';
import {
  Bars2Icon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
  XMarkIcon,
  UserIcon,
  ArrowLeftIcon,
  ArrowLongLeftIcon,
  ArrowRightIcon,
  ArrowLongRightIcon,
  PhoneIcon,
  ArchiveBoxIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';

import { StyleProps } from '~/types/Styles';

export type IconType =
  | 'PLUS'
  | 'PENCIL_SQUARE'
  | 'TRASH'
  | 'MAGNIFYING_GLASS'
  | 'BARS_2'
  | 'SHOPPING_BAG'
  | 'X_MARK'
  | 'USER'
  | 'ARROW_LEFT'
  | 'ARROW_LONG_LEFT'
  | 'ARROW_RIGHT'
  | 'ARROW_LONG_RIGHT'
  | 'ARROW_RIGHT_START_ON_RECTANGLE'
  | 'PHONE'
  | 'ARCHIVE_BOX';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface IconProps extends StyleProps {
  /**
   * The type of the icon.
   */
  type: IconType;
  /**
   * The size of the icon.
   */
  size?: IconSize;
  /**
   * The variant of the icon.
   * @default 'dark'
   */
  variant?: 'dark' | 'light';
  /**
   * The class color of the icon.
   * @default 'dark'
   */
  iconColorClassname?: string;
}

/**
 * A UI component to render icon base on provided type.
 */
export function Icon({
  type,
  size,
  variant = 'dark',
  className,
  iconColorClassname,
}: IconProps) {
  const iconClassName = clsx(
    size === 'xs' && 'size-12',
    size === 'sm' && 'size-14',
    size === 'md' && 'size-16',
    size === 'lg' && 'size-18',
    size === 'xl' && 'size-22',
    size === '2xl' && 'size-24',
    size === '3xl' && 'size-26',
    size === undefined && 'size-12 laptop:size-14',
    iconColorClassname
      ? iconColorClassname
      : variant === 'light'
        ? 'text-peach-200'
        : 'text-gray-900',
    className
  );

  switch (type) {
    case 'PLUS':
      return <PlusIcon className={iconClassName} />;
    case 'PENCIL_SQUARE':
      return <PencilSquareIcon className={iconClassName} />;
    case 'TRASH':
      return <TrashIcon className={iconClassName} />;
    case 'MAGNIFYING_GLASS':
      return <MagnifyingGlassIcon className={iconClassName} />;
    case 'BARS_2':
      return <Bars2Icon className={iconClassName} />;
    case 'SHOPPING_BAG':
      return <ShoppingBagIcon className={iconClassName} />;
    case 'X_MARK':
      return <XMarkIcon className={iconClassName} />;
    case 'USER':
      return <UserIcon className={iconClassName} />;
    case 'ARROW_LEFT':
      return <ArrowLeftIcon className={iconClassName} />;
    case 'ARROW_LONG_LEFT':
      return <ArrowLongLeftIcon className={iconClassName} />;
    case 'ARROW_RIGHT':
      return <ArrowRightIcon className={iconClassName} />;
    case 'ARROW_LONG_RIGHT':
      return <ArrowLongRightIcon className={iconClassName} />;
    case 'ARROW_RIGHT_START_ON_RECTANGLE':
      return <ArrowRightStartOnRectangleIcon className={iconClassName} />;
    case 'PHONE':
      return <PhoneIcon className={iconClassName} />;
    case 'ARCHIVE_BOX':
      return <ArchiveBoxIcon className={iconClassName} />;
  }
}
