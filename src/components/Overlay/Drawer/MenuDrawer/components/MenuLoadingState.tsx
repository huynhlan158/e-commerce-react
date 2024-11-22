import { Stack } from '~/components/Layouts';
import { Spinner } from '~/components/Spinner';
import { Heading } from '~/components/TypoGraphy';

/**
 * A UI component to render the loading state when loading product list in menu drawer.
 */
export function MenuLoadingState({ title }: { title: string }) {
  return (
    <>
      <Heading
        text={title}
        level={5}
        variant="secondary"
        size="xs"
        weight={700}
      />
      <Stack w="full" h="full" justifyContent="center" alignItems="center">
        <Spinner size="md" thickness="4px" />
      </Stack>
    </>
  );
}
