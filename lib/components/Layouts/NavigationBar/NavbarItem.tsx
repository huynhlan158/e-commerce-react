import clsx from 'clsx';
import { ReactNode } from 'react';

import { StyleProps } from '~/types/Styles';
import { Button } from '~/components/Forms';

export interface NavbarItemProps extends StyleProps {
  /**
   * The main content of the navbar item.
   */
  content: string | ReactNode;
  /**
   * The handler for onClick event of the navbar item.
   */
  action: () => void;
  /**
   * Whether the navbar item is currently active.
   * @default 'false'
   */
  isActive?: boolean;
}

/**
 * A UI component for a navbar item.
 */
export function NavbarItem({
  action,
  content,
  isActive = false,
  className,
}: NavbarItemProps) {
  switch (typeof content) {
    case 'string':
      return (
        <Button
          variant="ghost"
          size="md"
          label={content}
          onClick={action}
          isActive={isActive}
          className={className}
        />
      );
    default:
      return (
        <button onClick={action} className={clsx('text-16 h-fit', className)}>
          {content}
        </button>
      );
  }
}
