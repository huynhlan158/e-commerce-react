import clsx from 'clsx';
import { ElementType, useMemo } from 'react';
import { StyleProps } from '~/types/Styles';

interface HeadingProps extends StyleProps {
  /** The text of the component */
  text: string;

  /** The level of the component
   * @default 1
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

/** The heading component to use for headers */
export function Heading(props: HeadingProps) {
  const { className, text, level = 1 } = props;
  const ElementType = `h${level}` as ElementType;

  const levelClassName = useMemo(() => {
    switch (level) {
      case 1:
        return 'text-28 font-600';
      default:
        return 'text-28 font-600';
    }
  }, [level]);

  return <ElementType className={clsx('text-blue-800', levelClassName, className)}>{text}</ElementType>;
}
