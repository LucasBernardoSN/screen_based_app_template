import { Checkbox as ChakraCheckbox, Flex, Text } from '@chakra-ui/react';

type CheckboxProps = {
  name: string;
  label: string;
};

export function Checkbox({ label, name }: CheckboxProps) {
  return (
    <Flex>
      <ChakraCheckbox
        id={name}
        name={name}
        h="8"
        color="slate12"
        colorScheme="gray"
        borderColor="slate8"
        size="lg"
        css={`
          > span:first-of-type[data-focus] {
            box-shadow: 0px 0px 1px 1px var(--chakra-colors-primary);
            border-color: var(--chakra-colors-primary);
          }
        `}
      >
        <Text fontSize="md">{label}</Text>
      </ChakraCheckbox>
    </Flex>
  );
}
