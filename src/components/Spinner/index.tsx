import { Spinner as ChakraSpiner, SpinnerProps } from '@chakra-ui/react';

/**
 * The spinner icon to display when there is a loading state.
 */
export function Spinner({ size = 'md', ...otherProps }: SpinnerProps) {
  return (
    <ChakraSpiner speed="0.8s" color="brown.600" size={size} {...otherProps} />
  );
}
