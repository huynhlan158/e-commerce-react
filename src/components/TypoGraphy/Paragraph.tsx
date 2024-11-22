import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface ParagraphProps extends StyleProps {
  /**
   * The text of the component.
   */
  text: string;
  /**
   * The font size of the text.
   * @default 'md'
   */
  size?: FontSize;
  /**
   * The font weight of the text.
   * @default '400'
   */
  weight?: 400 | 500 | 600 | 700;
}

/**
 * A UI component to render text.
 */
export function Paragraph(props: ParagraphProps) {
  const { className, text, size = 'md', weight } = props;

  return (
    <p
      className={clsx(
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
      {text}
    </p>
  );
}
