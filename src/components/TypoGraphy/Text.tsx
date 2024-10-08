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
}

/** The text component to render text */
export function Text(props: TextProps) {
  const { className, text, size = 'md' } = props;

  return (
    <span
      className={clsx(
        size === 'lg' && 'text-20',
        size === 'md' && 'text-14',
        size === 'sm' && 'text-12',
        className
      )}
    >
      {text}
    </span>
  );
}
