import {
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  LightMode,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { useAuth } from '../../contexts/Auth.context';

export function SingIn() {
  const [loading, setLoading] = useState(false);

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { signIn } = useAuth();

  async function handleSignIn(formEvent: React.FormEvent<HTMLDivElement>) {
    formEvent.preventDefault();

    setLoading(true);

    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    if (!username || !password) {
      // eslint-disable-next-line no-alert
      alert('You must fill all fields');
    } else {
      await signIn({
        username,
        password,
      });
    }

    setLoading(false);
  }

  return (
    <Grid
      m="0 auto"
      maxW="48em"
      h="100vh"
      templateColumns="repeat(3 1fr)"
    >
      <Grid
        templateColumns={{ base: '1fr', md: '1fr 1fr' }}
        templateRows={{ base: '30% 1fr', md: '1fr' }}
        p={['4']}
        gap="8"
      >
        <Flex
          alignItems={{ base: 'end', md: 'center' }}
          justifyContent={{ base: 'center', md: 'start' }}
        >
          <Heading
            color="primary"
            fontSize={{ base: '4xl', md: '5xl' }}
          >
            React Router
          </Heading>
        </Flex>
        <Flex
          justifyContent={{ base: 'center', md: 'end' }}
          alignItems={{ base: 'start', md: 'center' }}
        >
          <Flex
            as="form"
            flexDir="column"
            minW="240px"
            maxW="400px"
            flex="1"
            p="8"
            borderRadius={8}
            bg="slate4"
            boxShadow="md"
            onSubmit={(event) => handleSignIn(event)}
          >
            <FormLabel>
              Username
              <Input
                mt="1"
                name="login"
                type="login"
                ref={usernameRef}
                _focus={{ bgColor: 'slate1' }}
                _hover={{ bgColor: 'slate1' }}
                _focusVisible={{
                  boxShadow: `0px 0px 0px 2px var(--chakra-colors-primary)`,
                }}
                _placeholder={{ color: 'slate11', fontStyle: 'italic' }}
                autoComplete="off"
                spellCheck={false}
                bgColor="slate1"
                border="none"
                borderRadius="md"
                variant="outline"
              />
            </FormLabel>
            <FormLabel>
              Password
              <Input
                mt="1"
                name="password"
                type="password"
                ref={passwordRef}
                _focus={{ bgColor: 'slate1' }}
                _hover={{ bgColor: 'slate1' }}
                _focusVisible={{
                  boxShadow: `0px 0px 0px 2px var(--chakra-colors-primary)`,
                }}
                _placeholder={{ color: 'slate11', fontStyle: 'italic' }}
                autoComplete="off"
                spellCheck={false}
                bgColor="slate1"
                border="none"
                borderRadius="md"
                variant="outline"
              />
            </FormLabel>

            <LightMode>
              <Button
                colorScheme="green"
                mt="4"
                type="submit"
                isLoading={loading}
              >
                Sign In
              </Button>
            </LightMode>
          </Flex>
        </Flex>
      </Grid>
    </Grid>
  );
}
