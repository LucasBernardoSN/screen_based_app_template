import { Select as ChakraSelect } from '@chakra-ui/react';
import { FormElementControl } from './FormElementControl';
import { getColorPropsCommonToInputLikeForms } from './getColorPropsCommonToInputLikeForms';

type SelectProps = {
  options?: { display: string; value: string }[];
  name: string;
  label: string;
  error?: { message: string };
};

export function Select({ label, name, options, error }: SelectProps) {
  return (
    <FormElementControl
      error={error}
      htmlFor={name}
      isInvalid={!!error}
      label={label}
    >
      <ChakraSelect
        {...getColorPropsCommonToInputLikeForms()}
        id={name}
        placeholder={`Selecione ${label}...`}
      >
        {options?.map(({ display, value }) => {
          return (
            <option
              style={{
                backgroundColor: 'var(--chakra-colors-slate1)',
                color: 'var(--chakra-colors-slate12)',
              }}
              key={value}
              value={value}
            >
              {display}
            </option>
          );
        })}
      </ChakraSelect>
    </FormElementControl>
  );
}
