import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FormControl,
  Input,
  InputGroup,
  InputProps,
  InputRightElement,
} from '@chakra-ui/react';

import { Button } from './Button';
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
  type,
  isInvalid = false,
  size = ['sm', 'sm', 'md'],
  className,
  ...otherProps
}: InputFieldProps) {
  const { t } = useTranslation('authentication');

  const [showingPassword, setShowingPassword] = useState(false);
  const handleToggleShowingPassword = () =>
    setShowingPassword(!showingPassword);

  return (
    <FormControl
      isInvalid={!!errorMessage || isInvalid}
      className="w-full flex flex-col gap-4 md:gap-6"
    >
      {title && <Text text={title} className="font-500" />}

      {type === 'password' ? (
        <InputGroup size={size} width="100%">
          <Input
            type={showingPassword ? 'text' : 'password'}
            width="100%"
            pr={[52, 56]}
            borderColor="brown.100"
            errorBorderColor="red.600"
            className={clsx('placeholder-gray-300', className)}
            backgroundColor="white"
            {...otherProps}
          />
          <InputRightElement right={10}>
            <Button
              size="xs"
              variant="ghost"
              height={30}
              label={showingPassword ? t('hide') : t('show')}
              onClick={handleToggleShowingPassword}
            />
          </InputRightElement>
        </InputGroup>
      ) : (
        <Input
          type={type}
          size={size}
          width="100%"
          borderColor="brown.100"
          errorBorderColor="red.600"
          className={clsx('placeholder-gray-300', className)}
          backgroundColor="white"
          {...otherProps}
        />
      )}

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
