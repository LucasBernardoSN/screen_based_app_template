import { ButtonGroup, Flex, Heading } from '@chakra-ui/react';
import { SignOutButton } from './SignOutButton';
import { ToogleColorModeButton } from './ToogleColorModeButton';

export function Header() {
  return (
    <Flex
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      px="8"
    >
      <Heading fontSize="2xl">React Router</Heading>
      <ButtonGroup>
        <SignOutButton />
        <ToogleColorModeButton />
      </ButtonGroup>
    </Flex>
  );
}
