import clsx from 'clsx';
import { FormControl, Input, InputProps } from '@chakra-ui/react';

import { Text } from '../TypoGraphy';

interface InputFieldProps extends InputProps {
  /**
   * The title of the input field.
   */
  title?: string;
  /**
   * The message that shows up to describe about the input field.
   */
  helperText?: string;
  /**
   * The message that shows up when an error occurs.
   */
  errorMessage?: string;
}

/**
 * A component for input field in forms.
 */
export function InputField({
  title,
  helperText,
  errorMessage,
  size,
  isInvalid = false,
  className,
  ...otherProps
}: InputFieldProps) {
  return (
    <FormControl
      isInvalid={!!errorMessage || isInvalid}
      className="w-full flex flex-col gap-6"
    >
      {title && <Text text={title} className="font-500" />}

      <Input
        {...otherProps}
        width="w-full"
        size={size || ['sm', 'sm', 'md']}
        borderColor="brown.100"
        errorBorderColor="red.600"
        className={clsx('placeholder-gray-300', className)}
        backgroundColor="white"
      />

      {!errorMessage && !!helperText ? (
        <Text text={helperText} />
      ) : errorMessage ? (
        <Text text={errorMessage} className="text-red-600" />
      ) : (
        ''
      )}
    </FormControl>
  );
}
