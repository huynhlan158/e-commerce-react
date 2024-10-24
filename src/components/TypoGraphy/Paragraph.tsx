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
}

/** The paragraph component to render text as paragraph */
export function Paragraph(props: ParagraphProps) {
  const { className, text, size = 'md' } = props;

  return (
    <p
      className={clsx(
        size === 'lg' && 'TextFontSizeResponsive--lg',
        size === 'md' && 'TextFontSizeResponsive--md',
        size === 'sm' && 'TextFontSizeResponsive--sm',
        className
      )}
    >
      {text}
    </p>
  );
}
