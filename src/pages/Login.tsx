import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { Button, Stack } from '@chakra-ui/react';

import { getErrorMessage } from '~/services/fetch.server';
import { getAccessToken } from '~/services/auth/fetch.auth';
import { LoginRequestSchema } from '~/services/auth/models/LoginRequest';

import { Heading } from '~/components/TypoGraphy';
import { useToast } from '~/components/Toast';
import { Status } from '~/types/Styles';
import { InputField } from '~/components/Forms/InputField';

export function Login() {
  const { t } = useTranslation(['authentication', 'zod']);
  const toast = useToast();

  const {
    errors,
    values,
    handleSubmit,
    handleChange,
    isSubmitting,
    isValidating,
  } = useFormik({
    initialValues: LoginRequestSchema.parse({}),
    validationSchema: toFormikValidationSchema(LoginRequestSchema),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        await getAccessToken(values);
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        toast({ text: errorMessage, status: Status.ERROR });
      }
    },
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <Heading text={t('login')} />

      <Stack>
        <InputField
          name="username"
          value={values.username}
          onChange={handleChange}
          title={t('username')}
        />

        <InputField
          name="password"
          value={values.username}
          onChange={handleChange}
          title={t('password')}
        />
      </Stack>

      <Button>{t('login')}</Button>
    </form>
  );
}
