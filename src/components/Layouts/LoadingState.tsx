import { Stack } from '@chakra-ui/react';
import { Spinner } from '../Spinner';

/**
 * A component displays to freeze the page when there is a loading state
 * to prevent users from interacting with the UI.
 */
export function LoadingState() {
  return (
    <Stack className="w-screen h-screen fixed top-0 left-0 z-50 bg-white/40">
      <Spinner size="xl" thickness="4px" />
    </Stack>
  );
}
