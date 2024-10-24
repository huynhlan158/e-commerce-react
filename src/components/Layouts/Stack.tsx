import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

/**
 * A custom Stack component from Chakra Stack.
 */
export function Stack({ children, gap, ...otherProps }: StackProps) {
  return (
    <ChakraStack gap={gap ? gap : 0} {...otherProps}>
      {children}
    </ChakraStack>
  );
}
