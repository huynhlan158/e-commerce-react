import clsx from 'clsx';
import { ElementType } from 'react';
import { FontSize, StyleProps } from '~/types/Styles';

interface HeadingProps extends StyleProps {
  /**
   * The text of the component.
   */
  text: string;
  /**
   * The level of the component.
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The size of the text
   * @default 'md'
   */
  size?: FontSize;
}

/** The heading component to use for headers */
export function Heading(props: HeadingProps) {
  const { className, text, level = 1, size = 'md' } = props;
  const ElementType = `h${level}` as ElementType;

  return (
    <ElementType
      className={clsx(
        `text-brown-600 font-600`,
        size === 'lg' && 'text-36',
        size === 'md' && 'text-28',
        size === 'sm' && 'text-20',
        className
      )}
    >
      {text}
    </ElementType>
  );
}
