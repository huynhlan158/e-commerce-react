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
  /** The size of the heading text.
   * @default 'md'
   */
  size?: FontSize;
  /** The variant of the heading text.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
}

/** The heading component to use for headers */
export function Heading(props: HeadingProps) {
  const {
    className,
    text,
    level = 1,
    size = 'md',
    variant = 'primary',
  } = props;
  const ElementType = `h${level}` as ElementType;

  return (
    <ElementType
      className={clsx(
        `font-600`,
        variant === 'primary' && 'text-brown-600',
        size === 'lg' && 'HeadingFontSizeResponsive--lg',
        size === 'md' && 'HeadingFontSizeResponsive--md',
        size === 'sm' && 'HeadingFontSizeResponsive--sm',
        size === 'xs' && 'HeadingFontSizeResponsive--xs',
        className
      )}
    >
      {text}
    </ElementType>
  );
}
