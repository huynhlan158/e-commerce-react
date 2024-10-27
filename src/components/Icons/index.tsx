import clsx from 'clsx';
import {
  Bars2Icon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

import { StyleProps } from '~/types/Styles';

type IconType =
  | 'PLUS'
  | 'PENCIL_SQUARE'
  | 'TRASH'
  | 'MAGNIFYING_GLASS'
  | 'BARS_2'
  | 'SHOPPING_BAG';

type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

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
}

/**
 * A UI component to render icon base on provided type.
 */
export function Icon({ type, size, variant = 'dark', className }: IconProps) {
  const iconClassName = clsx(
    size === 'xs' && 'size-12',
    size === 'sm' && 'size-14',
    size === 'md' && 'size-16',
    size === 'lg' && 'size-22',
    size === 'xl' && 'size-24',
    size === '2xl' && 'size-26',
    size === undefined && 'size-12 laptop:size-14',
    variant === 'light' ? 'text-peach-200' : 'text-gray-900',
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
  }
}
