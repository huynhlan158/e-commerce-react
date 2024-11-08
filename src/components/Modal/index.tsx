import { ReactNode } from 'react';
import {
  Button,
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

import { useDisclosureStore } from '~/contexts/disclosure/useDisclosureStore';

import { Text } from '../TypoGraphy';

export interface ModalAction {
  /**
   * The label of the button.
   */
  buttonLabel: string;
  /**
   * The type of the button.
   */
  buttonType?: 'solid' | 'outline';
  /**
   * Handler that is called when the value changes.
   */
  onClick: () => void;
}

export interface ModalProps {
  /**
   * The size of the modal.
   */
  size?: 'sm' | 'md' | 'xl';
  /**
   * The title of the modal.
   */
  title: string;
  /**
   * The description of the modal.
   */
  description?: string | ReactNode;
  /**
   * The main content of the modal.
   */
  mainContent?: ReactNode;
  /**
   * The button to cancle the modal.
   */
  cancel?: ModalAction;
  /**
   * The button to handle action of the modal.
   */
  action?: ModalAction;
  /**
   * The handler action of the modal.
   */
  resetAction?: () => void;
}

/**
 * A component that renders infomation in a popup to focus the users's attention.
 */
export function Modal({
  size = 'sm',
  title,
  description,
  mainContent,
  cancel,
  action,
  resetAction,
}: ModalProps) {
  const { isModalOpen, onModalClose } = useDisclosureStore();

  return (
    <ChakraModal
      size={size}
      isCentered
      onClose={() => {
        onModalClose();
        resetAction?.();
      }}
      isOpen={isModalOpen}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          {typeof description == 'string' ? (
            <Text className="text-14" text={description} />
          ) : (
            description
          )}
          {mainContent && mainContent}
        </ModalBody>

        {(cancel || action) && (
          <ModalFooter>
            {cancel && (
              <Button
                variant={cancel.buttonType || 'outline'}
                onClick={cancel.onClick}
              >
                {cancel.buttonLabel}
              </Button>
            )}
            {action && (
              <Button
                type="submit"
                variant={action.buttonType || 'solid'}
                mr={3}
                onClick={action.onClick}
              >
                {action.buttonLabel}
              </Button>
            )}
          </ModalFooter>
        )}
      </ModalContent>
    </ChakraModal>
  );
}
