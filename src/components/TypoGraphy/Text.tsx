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
}

/**
 * The text component to render text.
 */
export function Text(props: TextProps) {
  const { className, text, size = 'md', params } = props;
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
        size === 'lg' && 'text-20',
        size === 'md' && 'text-14',
        size === 'sm' && 'text-12',
        className
      )}
    >
      {joinedText}
    </span>
  );
}
