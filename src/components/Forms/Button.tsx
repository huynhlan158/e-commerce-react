import clsx from 'clsx';
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  /**
   * The label of the button.
   */
  label: string;
  /**
   * The variant of the button's lable.
   * @default 'dark'
   */
  lableVariant?: 'light' | 'dark';
}

/**
 * A custom Button component from Chakra Button.
 */
export function Button({
  variant,
  label,
  lableVariant = 'dark',
  size,
  className,
  ...otherProps
}: ButtonProps) {
  switch (variant) {
    case 'ghost':
      return (
        <button
          className={clsx(
            'relative',
            'after:content-[""] after:absolute after:left-0 after:bottom-0',
            'after:w-full after:h-1',
            'after:transition-[transform] after:transform after:scale-x-0 after:hover:scale-x-100 after:duration-200',
            size === 'sx' && 'text-12 leading-14',
            size === 'sm' && 'text-14 leading-16',
            size === 'md' && 'text-16 leading-18',
            size === undefined && 'text-12 md:text-14',
            lableVariant === 'light' && 'text-peach-200 after:bg-peach-200',
            lableVariant === 'dark' && 'text-gray-900 after:bg-gray-900',
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
          className={className}
          {...otherProps}
        >
          {label}
        </ChakraButton>
      );
  }
}
