import clsx from 'clsx';
import {
  PencilSquareIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import { StyleProps } from '~/types/Styles';

type IconType = 'PLUS' | 'PENCIL_SQUARE' | 'TRASH';

type IconSize = 'sm' | 'md' | 'lg';

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
    size === 'sm' && 'size-12',
    size === 'md' && 'size-14',
    size === 'lg' && 'size-16',
    size === undefined && 'size-12 md:size-14',
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
  }
}
