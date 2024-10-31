import clsx from 'clsx';
import {
  IconButton as ChakraIconButton,
  IconButtonProps,
} from '@chakra-ui/react';

/**
 * A custom IconButton component from Chakra IconButton.
 */
export function IconButton({
  variant,
  icon,
  onClick,
  size,
  className,
  ...otherProps
}: IconButtonProps) {
  switch (variant) {
    case 'ghost':
      return (
        <button
          onClick={onClick}
          className={clsx(
            size === 'sx' && 'TextFontSizeResponsive--xs',
            size === 'sm' && 'TextFontSizeResponsive--sm',
            size === 'md' && 'TextFontSizeResponsive--md',
            size === 'lg' && 'TextFontSizeResponsive--lg',
            size === undefined && 'TextFontSizeResponsive--default',
            className
          )}
        >
          {icon}
        </button>
      );
    default:
      return (
        <ChakraIconButton
          variant={variant}
          icon={icon}
          onClick={onClick}
          size={size}
          className={className}
          {...otherProps}
        />
      );
  }
}
