import { ReactNode } from 'react';

interface MainContentProps {
  /** The content of the main content */
  children: ReactNode;
}

/** The main content for all pages in the app */
export function MainContent({ children }: MainContentProps) {
  return (
    <div className="w-full max-w-screen-2xl flex flex-1 p-24">
      <div className="w-full flex-1 bg-white p-24 rounded-8">{children}</div>
    </div>
  );
}
