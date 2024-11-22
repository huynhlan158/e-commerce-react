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
   * @default 2
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** The size of the heading text.
   * @default 'md'
   */
  size?: FontSize;
  /**
   * The font weight of the heading text.
   * @default '600'
   */
  weight?: 600 | 700;
  /**
   * The variant of the heading text.
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'gray';
}

/**
 * A UI component to reder heading.
 */
export function Heading(props: HeadingProps) {
  const {
    className,
    text,
    level = 2,
    weight = 600,
    size = 'md',
    variant = 'primary',
  } = props;
  const ElementType = `h${level}` as ElementType;

  return (
    <ElementType
      className={clsx(
        'cursor-default',
        variant === 'primary' && 'text-brown-600',
        variant === 'secondary' && 'text-gray-900',
        variant === 'gray' && 'text-gray-500',
        weight === 700 ? 'font-700' : 'font-600',
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
