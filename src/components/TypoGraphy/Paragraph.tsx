import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface ParagraphProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The size of the component
   * @default 14
   */
  size?: FontSize;
}

/** The paragraph component to render text as paragraph */
export function Paragraph(props: ParagraphProps) {
  const { className, text, size = 14 } = props;

  return <p className={clsx(`text-${size}`, className)}>{text}</p>;
}
