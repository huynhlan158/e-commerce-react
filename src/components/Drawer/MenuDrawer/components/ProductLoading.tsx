import { Stack } from '~/components/Layouts';
import { Spinner } from '~/components/Spinner';
import { Heading } from '~/components/TypoGraphy';

export function ProductLoading({ title }: { title: string }) {
  return (
    <>
      <Heading text={title} level={5} variant="secondary" size="xs" />
      <Stack w="full" h="full" justifyContent="center" alignItems="center">
        <Spinner size="md" thickness="4px" />
      </Stack>
    </>
  );
}
