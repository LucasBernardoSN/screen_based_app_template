import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';

type FormElementControl = {
  children: React.ReactNode;
  error?: {
    message: string;
  };
  htmlFor?: string;
  label?: string;
  isInvalid?: boolean;
  disabled?: boolean;
};

export function FormElementControl({
  children,
  error,
  htmlFor,
  label,
  disabled = false,
  isInvalid,
}: FormElementControl) {
  return (
    <FormControl
      isInvalid={isInvalid}
      isDisabled={disabled}
      display="flex"
      flexDirection="column"
    >
      {!!label && (
        <FormLabel
          alignSelf="start"
          mb="1"
          htmlFor={htmlFor}
        >
          {label}
        </FormLabel>
      )}

      {children}

      {!!error && (
        <FormErrorMessage
          mt="0.5"
          color="error9"
        >
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
