import { ClientOnly } from './client';
import '~/app/global.css';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <ClientOnly />;
}
