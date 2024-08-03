import clsx from 'clsx';
import { ElementType } from 'react';
import { FontSize, StyleProps } from '~/types/Styles';

interface HeadingProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The level of the component
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /** The font size of the text
   * @default 28
   */
  fontSize?: FontSize;
}

/** The heading component to use for headers */
export function Heading(props: HeadingProps) {
  const { className, text, level = 1, fontSize = 28 } = props;
  const ElementType = `h${level}` as ElementType;

  return <ElementType className={clsx(`text-blue-800 font-600 text-${fontSize}`, className)}>{text}</ElementType>;
}
