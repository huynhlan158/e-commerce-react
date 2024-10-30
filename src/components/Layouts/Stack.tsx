import {
  Stack as ChakraStack,
  VStack as ChakraVStack,
  HStack as ChakraHStack,
  StackProps,
} from '@chakra-ui/react';

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

/**
 * A custom VStack component from Chakra Stack.
 */
export function VStack({ children, gap, ...otherProps }: StackProps) {
  return (
    <ChakraVStack gap={gap ? gap : 0} {...otherProps}>
      {children}
    </ChakraVStack>
  );
}

/**
 * A custom HStack component from Chakra Stack.
 */
export function HStack({ children, gap, ...otherProps }: StackProps) {
  return (
    <ChakraHStack gap={gap ? gap : 0} {...otherProps}>
      {children}
    </ChakraHStack>
  );
}
