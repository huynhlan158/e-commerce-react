import clsx from 'clsx';
import { FontSize, StyleProps } from '~/types/Styles';

interface ParagraphProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The font size of the text
   * @default 14
   */
  fontSize?: FontSize;
}

/** The paragraph component to render text as paragraph */
export function Paragraph(props: ParagraphProps) {
  const { className, text, fontSize = 14 } = props;

  return <p className={clsx(`text-${fontSize}`, className)}>{text}</p>;
}
