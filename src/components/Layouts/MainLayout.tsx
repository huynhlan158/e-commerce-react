import { ReactNode } from 'react';
import { StyleProps } from '~/types/Styles';

interface MainLayoutProps extends StyleProps {
  /** The content of the main layout */
  children: ReactNode;
}

/** The layout component for the main content area */
export function MainLayout(props: MainLayoutProps) {
  const { children } = props;
  return <div className="bg-gray-10 h-screen w-full flex flex-col items-center">{children}</div>;
}
