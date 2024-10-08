import clsx from 'clsx';
import toast from 'react-hot-toast';
import { Stack } from '@chakra-ui/react';
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { Status } from '~/types/Styles';
import { Text } from '../TypoGraphy';
import './index.css';

interface ToastProps {
  /**
   * The content of the toast.
   */
  text: string;
  /**
   * The status of the toast.
   */
  status: Status;
}

/**
 * A component for displaying information in a toast with appropriate highlighting.
 */
export function useToast() {
  return ({ text, status }: ToastProps) =>
    toast.custom(
      (t) => (
        <Stack
          direction="row"
          justifyContent="space-between"
          gap={10}
          className={clsx(
            `ToastContainer ToastContainer--${status}`,
            t.visible ? 'top-0' : '-top-96'
          )}
        >
          {status === Status.ERROR && (
            <ExclamationCircleIcon color="red-600" className="size-20" />
          )}

          {status === Status.SUCCESS && (
            <CheckCircleIcon color="green-600" className="size-20" />
          )}

          <Text text={text} className="flex-1" />

          <button type="button" onClick={() => toast.dismiss(t.id)}>
            <XMarkIcon
              color={
                status === Status.ERROR
                  ? 'red-900'
                  : status === Status.SUCCESS
                    ? 'green-900'
                    : 'gray-900'
              }
              className="size-20"
            />
          </button>
        </Stack>
      ),
      { position: 'top-center', duration: 5000 }
    );
}
