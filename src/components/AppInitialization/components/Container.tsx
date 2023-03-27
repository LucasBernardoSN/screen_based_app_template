import { Flex } from '@chakra-ui/react';

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <Flex
      bg="slate1"
      flexDir="column"
      position="absolute"
      top="0"
      left="0"
      h="100vh"
      w="100vw"
      alignItems="center"
      zIndex={5}
      overflow="auto"
    >
      {children}
    </Flex>
  );
}
