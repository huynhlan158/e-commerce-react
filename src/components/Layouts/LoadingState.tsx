import { Spinner } from '../Spinner';
import { Stack } from './Stack';

/**
 * A UI component to freeze the page when there is a loading state
 * to prevent users from interacting with the UI.
 */
export function LoadingState() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="w-screen h-screen fixed top-0 left-0 z-50 bg-white/40"
    >
      <Spinner size="lg" thickness="4px" />
    </Stack>
  );
}
