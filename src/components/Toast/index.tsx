import clsx from 'clsx';
import toast from 'react-hot-toast';
import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

import { Status } from '~/types/Styles';
import { Text } from '../TypoGraphy';
import { Stack } from '../Layouts';
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
          alignItems="center"
          gap={10}
          className={clsx(
            `ToastContainer ToastContainer--${status}`,
            t.visible ? 'top-0' : '-top-96'
          )}
        >
          <Stack direction="row" alignItems="center" gap={[8, 12]}>
            {status === Status.ERROR && (
              <ExclamationCircleIcon className="size-16 laptop:size-20 text-red-600" />
            )}

            {status === Status.SUCCESS && (
              <CheckCircleIcon className="size-16 laptop:size-20 text-green-600" />
            )}

            <Text text={text} />
          </Stack>

          <button type="button" onClick={() => toast.dismiss(t.id)}>
            <XMarkIcon
              className={clsx(
                'size-16 laptop:size-20',
                status === Status.ERROR
                  ? 'text-red-900'
                  : status === Status.SUCCESS
                    ? 'text-green-900'
                    : 'text-gray-900'
              )}
            />
          </button>
        </Stack>
      ),
      { position: 'top-center', duration: 5000 }
    );
}
