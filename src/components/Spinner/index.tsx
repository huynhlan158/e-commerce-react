import { Spinner as ChakraSpiner, SpinnerProps } from '@chakra-ui/react';

/**
 * A UI component to render a spinner icon when there is a loading state.
 */
export function Spinner({ size = 'md', ...otherProps }: SpinnerProps) {
  return (
    <ChakraSpiner speed="0.8s" color="brown.600" size={size} {...otherProps} />
  );
}
