import { ReactNode } from 'react';
import clsx from 'clsx';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  /**
   * The label of the button.
   */
  label: string | ReactNode;
  /**
   * The variant of the button's lable.
   * @default 'dark'
   */
  lableVariant?: 'light' | 'dark' | 'gray';
  /**
   * The font weight of the button's lable.
   * @default 'normal'
   */
  lableWeight?: 'normal' | 'bold';
  /**
   * Whether the button is currently active.
   */
  isActive?: boolean;
}

/**
 * A custom Button component from Chakra Button.
 */
export function Button({
  variant,
  label,
  lableVariant = 'dark',
  lableWeight = 'normal',
  isActive = false,
  size = 'md',
  className,
  onClick,
  ...otherProps
}: ButtonProps) {
  switch (variant) {
    case 'ghost':
      return (
        <button
          onClick={onClick}
          className={clsx(
            'relative h-fit',
            'after:content-[""] after:absolute after:left-0 after:bottom-0',
            'after:w-full after:h-1',
            !isActive &&
              'after:transition-[transform] after:transform after:scale-x-0 hover:after:scale-x-100 after:duration-200',
            size === 'sx' && 'TextFontSizeResponsive--xs',
            size === 'sm' && 'TextFontSizeResponsive--sm',
            size === 'md' && 'TextFontSizeResponsive--md',
            size === 'lg' && 'TextFontSizeResponsive--lg',
            size === 'xl' && 'TextFontSizeResponsive--xl',
            size === '2xl' && 'TextFontSizeResponsive--2xl',
            size === undefined && 'TextFontSizeResponsive--default',
            lableVariant === 'light' && 'text-peach-200 after:bg-peach-200',
            lableVariant === 'dark' && 'text-gray-900 after:bg-gray-900',
            lableVariant === 'gray' && 'text-gray-500 after:bg-gray-500',
            lableWeight === 'bold' && 'font-700',
            className
          )}
        >
          {label}
        </button>
      );
    default:
      return (
        <ChakraButton
          size={size || ['xs', 'sm']}
          variant={variant}
          onClick={onClick}
          className={className}
          {...otherProps}
        >
          {label}
        </ChakraButton>
      );
  }
}
