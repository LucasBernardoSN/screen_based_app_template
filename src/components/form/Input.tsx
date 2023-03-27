import { Input as ChakraInput, Flex } from '@chakra-ui/react';

import { FormElementControl } from './FormElementControl';
import { getColorPropsCommonToInputLikeForms } from './getColorPropsCommonToInputLikeForms';

type InputProps = {
  label: string;
  error?: {
    message: string;
  };
  name: string;
};

export function Input({ label, error, name }: InputProps) {
  return (
    <FormElementControl
      error={error}
      htmlFor={name}
      isInvalid={!!error}
      label={label}
    >
      <Flex
        position="relative"
        alignItems="center"
      >
        <ChakraInput
          {...getColorPropsCommonToInputLikeForms()}
          variant="outline"
          autoComplete="off"
        />
      </Flex>
    </FormElementControl>
  );
}
