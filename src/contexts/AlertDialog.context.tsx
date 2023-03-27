import {
  Box,
  Button,
  ButtonProps,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { CheckCircle, WarningCircle } from 'phosphor-react';
import {
  ReactNode,
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
  cloneElement,
  ReactElement,
} from 'react';

type AlertDialogProviderProps = {
  children: ReactNode;
};

type AlertButtonType = {
  label: string;
  colorScheme?: ButtonProps['colorScheme'];
};

type AlertDialogProps = {
  title: string;
  description: string;
  singleButton?: 'confirm' | 'cancel';
  icon?: ReactElement | 'error' | 'success';
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmButton?: AlertButtonType;
  cancelButton?: AlertButtonType & {
    variant?: 'ghost';
  };
};

type AlertDialogContextType = {
  alertDialog: (confirmDialogProps: AlertDialogProps) => Promise<boolean>;
};

export const AlertDialogContext = createContext<AlertDialogContextType>(
  {} as AlertDialogContextType
);

export function AlertDialogProvider({ children }: AlertDialogProviderProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const [alertDialogProps, setAlertDialogProps] = useState<AlertDialogProps>({
    title: '',
    description: '',
  });

  const alertDialog = useCallback(
    async (confirmDialogProps: AlertDialogProps) => {
      onOpen();

      const promise = new Promise<void>((resolve, reject) => {
        setAlertDialogProps({
          ...confirmDialogProps,
          onConfirm: () => {
            confirmDialogProps.onConfirm?.();
            resolve();
          },
          onCancel: () => {
            confirmDialogProps.onCancel?.();
            reject();
          },
        });
      });

      return promise.then(
        () => {
          onClose();
          return true;
        },
        () => {
          onClose();
          return false;
        }
      );
    },
    [onClose, onOpen]
  );

  async function handleConfirmAction() {
    if (alertDialogProps.onConfirm) alertDialogProps.onConfirm();
  }
  async function handleCancelAction() {
    if (alertDialogProps.onCancel) alertDialogProps.onCancel();
  }

  const providerValue = useMemo(() => ({ alertDialog }), [alertDialog]);

  return (
    <AlertDialogContext.Provider value={providerValue}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        blockScrollOnMount={false}
      >
        <ModalOverlay bg="modal_overlay" />
        <ModalContent bg="slate1">
          <ModalHeader>
            <Text fontSize="lg">{alertDialogProps.title}</Text>
          </ModalHeader>
          <ModalBody py="0">
            <Flex
              gap="2"
              alignItems="center"
            >
              <Box>
                {alertDialogProps.icon &&
                  typeof alertDialogProps.icon !== 'string' &&
                  cloneElement(alertDialogProps.icon, {
                    size: 32,
                  })}

                {alertDialogProps.icon === 'error' && (
                  <WarningCircle
                    size={32}
                    color="var(--chakra-colors-error)"
                  />
                )}
                {alertDialogProps.icon === 'success' && (
                  <CheckCircle
                    size={32}
                    color="var(--chakra-colors-success)"
                  />
                )}
              </Box>

              <Text fontSize="md">{alertDialogProps.description}</Text>
            </Flex>
          </ModalBody>
          <ModalFooter
            display="flex"
            justifyContent="flex-end"
          >
            <Box
              display="flex"
              justifyContent="flex-end"
            >
              <HStack spacing="2">
                {alertDialogProps.singleButton !== 'confirm' && (
                  <Button
                    colorScheme={alertDialogProps.cancelButton?.colorScheme}
                    onClick={() => handleCancelAction()}
                    variant="ghost"
                  >
                    {alertDialogProps.cancelButton?.label || 'Cancel'}
                  </Button>
                )}
                {alertDialogProps.singleButton !== 'cancel' && (
                  <Button
                    colorScheme={
                      alertDialogProps.confirmButton?.colorScheme || 'blue'
                    }
                    onClick={() => handleConfirmAction()}
                  >
                    {alertDialogProps.confirmButton?.label || 'Comfirm'}
                  </Button>
                )}
              </HStack>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {children}
    </AlertDialogContext.Provider>
  );
}

export const useAlertDialog = () => useContext(AlertDialogContext);
