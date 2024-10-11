import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface ButtonProps extends ChakraButtonProps {
  /**
   * The label of the button.
   */
  label: string;
}

/**
 * A custom Button component from Chakra Button.
 */
export function Button({ label, size, ...otherProps }: ButtonProps) {
  return (
    <ChakraButton size={size || ['xs', 'sm']} {...otherProps}>
      {label}
    </ChakraButton>
  );
}
