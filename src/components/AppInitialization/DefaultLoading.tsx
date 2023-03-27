import { Center, Flex } from '@chakra-ui/react';
import { Logo } from '../Logo';
import { Container } from './components/Container';
import { StateIndicator } from './components/StateIndicator';

/**
 * Componente da tela de inicialização da aplicação.
 * - Fica por cima de todas as outras telas para que os componentes carreguem enquanto ocorre a inicialização.
 */
export function DefaultLoading() {
  return (
    <Container>
      <Flex
        flexDirection="column"
        h="100%"
        maxW="360px"
        py="8"
      >
        <Flex
          flexDirection="column"
          h="100%"
          textAlign="center"
          py="16"
        >
          <Flex
            flexDirection="column"
            w="100%"
          >
            <Center>
              <Logo fontSize={['3xl', '5xl']} />
            </Center>
            <StateIndicator
              hasError={false}
              pendingLabel="Carregando..."
            />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}
