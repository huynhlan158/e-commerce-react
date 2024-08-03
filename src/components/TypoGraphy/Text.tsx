import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface TextProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The font size of the text
   * @default 14
   */
  fontSize?: FontSize;
}

/** The text component to render text */
export function Text(props: TextProps) {
  const { className, text, fontSize = 14 } = props;

  return <span className={clsx(`text-${fontSize}`, className)}>{text}</span>;
}
