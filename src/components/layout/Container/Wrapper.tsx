import { Flex } from '@chakra-ui/react';

type WrapperProps = {
  children: React.ReactNode;
};

export function Wrapper({ children }: WrapperProps) {
  return (
    <Flex
      alignContent="stretch"
      gap="4"
      h="100%"
      overflow="auto"
      pr="0.5"
    >
      <Flex
        flex="1 0 0"
        flexDirection="column"
        w="100%"
      >
        {children}
      </Flex>
    </Flex>
  );
}
