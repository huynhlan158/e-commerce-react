import { Stack as ChakraStack, StackProps } from '@chakra-ui/react';

/**
 * A custom Stack component from Chakra Stack.
 */
export function Stack({ children, gap, ...otherProps }: StackProps) {
  return (
    <ChakraStack gap={gap === 0 ? 0 : gap ? gap : [8, 12, 24]} {...otherProps}>
      {children}
    </ChakraStack>
  );
}
