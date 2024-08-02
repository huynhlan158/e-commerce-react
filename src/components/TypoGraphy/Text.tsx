import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface TextProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The size of the component
   * @default 14
   */
  size?: FontSize;
}

/** The text component to render text */
export function Text(props: TextProps) {
  const { className, text, size = 14 } = props;

  return <span className={clsx(`text-${size}`, className)}>{text}</span>;
}
