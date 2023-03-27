import { Flex } from '@chakra-ui/react';

type MainProps = {
  children: React.ReactNode;
};

export function Main({ children }: MainProps) {
  return (
    <Flex
      bg="slate2"
      borderRadius={{ base: 'none', md: 'md' }}
      direction="column"
      flex="1"
      gap="2"
      outline="none"
      overflow="hidden"
      p={{ base: '2', sm: '4', md: '4' }}
    >
      {children}
    </Flex>
  );
}
