import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface TextProps extends StyleProps {
  /**
   * The text of the component
   */
  text: string;
  /**
   * The font size of the text.
   * @default 'md'
   */
  size?: FontSize;
  /**
   * The param values of the text.
   */
  params?: string[];
  /**
   * The variant of the heading text.
   * @default 'secondary'
   */
  variant?: 'secondary' | 'gray' | 'danger';
  /**
   * The font weight of the text.
   * @default '400'
   */
  weight?: 400 | 500 | 600 | 700;
}

/**
 * A UI component to render text.
 */
export function Text(props: TextProps) {
  const {
    className,
    text,
    size = 'md',
    variant = 'secondary',
    weight,
    params,
  } = props;
  if (!text || typeof text !== 'string') return text;

  const textArray = text.split('{}');
  const firstTextItem = textArray.shift();

  const joinedText = params
    ? params
        .reduce((acc, cur) => [...acc, cur, textArray.shift()], [firstTextItem])
        .join('')
    : text;

  if (joinedText.includes('<b>')) {
    return (
      <span
        className={className}
        dangerouslySetInnerHTML={{ __html: joinedText }}
      />
    );
  }

  return (
    <span
      className={clsx(
        variant === 'gray' && 'text-gray-500',
        variant === 'danger' && 'text-red-600',
        size === '2xl' && 'TextFontSizeResponsive--2xl',
        size === 'xl' && 'TextFontSizeResponsive--xl',
        size === 'lg' && 'TextFontSizeResponsive--lg',
        size === 'md' && 'TextFontSizeResponsive--md',
        size === 'sm' && 'TextFontSizeResponsive--sm',
        size === 'xs' && 'TextFontSizeResponsive--xs',
        weight === 400 && 'font-400',
        weight === 500 && 'font-500',
        weight === 600 && 'font-600',
        weight === 700 && 'font-700',
        className
      )}
    >
      {joinedText}
    </span>
  );
}
