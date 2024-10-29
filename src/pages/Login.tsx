import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { setCookie, StorageKeys } from '~/utils/cookie';
import { getErrorMessage } from '~/services/fetch.server';
import { getAccessToken } from '~/services/auth/fetch.auth';
import {
  loginInitialValues,
  LoginRequestSchema,
} from '~/services/auth/models/LoginRequest';
import { useStore } from '~/state/useStore';
import { logIn } from '~/state/auth/authSlice';

import { Heading } from '~/components/TypoGraphy';
import { useToast } from '~/components/Toast';
import { Button, InputField } from '~/components/Forms';
import { LoadingState, Stack } from '~/components/Layouts';
import { Status } from '~/types/Styles';

export function Login() {
  const { t } = useTranslation(['authentication', 'zod']);
  const { dispatch } = useStore('auth');

  const toast = useToast();

  const {
    errors,
    values,
    handleSubmit,
    handleChange,
    isSubmitting,
    setValues,
  } = useFormik({
    initialValues: loginInitialValues,
    validationSchema: toFormikValidationSchema(LoginRequestSchema),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const userProfile = await getAccessToken(values);
        setCookie(StorageKeys.ACCESS_TOKEN, userProfile.id);
        dispatch(logIn(userProfile));
      } catch (error) {
        const errorMessage = getErrorMessage(error);
        setValues(loginInitialValues);
        toast({ text: errorMessage, status: Status.ERROR });
      }
    },
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={clsx(
          'ModalWidthResponsive StackPaddingResponsive',
          'bg-peach-50 gap-16 laptop:gap-24',
          'flex flex-col items-center justify-center',
          'border-1 rounded-4 border-brown-200'
        )}
      >
        <Heading text={t('login')} />

        <Stack className="w-full">
          <InputField
            name="username"
            value={values.username}
            onChange={handleChange}
            title={t('username')}
            errorMessage={errors.username}
          />

          <InputField
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            title={t('password')}
            errorMessage={errors.password}
          />
        </Stack>

        <Button
          label={t('login')}
          type="submit"
          size={['sm', 'md']}
          width="100%"
        />
      </form>

      {isSubmitting && <LoadingState />}
    </>
  );
}
