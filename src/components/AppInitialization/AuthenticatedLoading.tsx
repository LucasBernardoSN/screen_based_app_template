import { Center, Flex } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import { Logo } from '../Logo';
import { Container } from './components/Container';
import { InitializationError } from './components/InitializationErrorAlert';
import { InitializationStepCard } from './components/InitializationStepCard';
import { StateIndicator } from './components/StateIndicator';
import { useAppInitializationRoutine } from './useAppInitializationRoutine';

/**
 * Objeto contendo as mensagens de cada etapa do processo de inicialização.
 * - pendingLabel: exibida enquanto a etapa estiver em andamento.
 * - successLabel: exibida quando a etapa for concluída com sucesso.
 */
const stepsMessages = {
  error: {
    pendingLabel: 'Error',
    successLabel: 'Error',
  },
  networkConnection: {
    pendingLabel: 'Conectando na rede...',
    successLabel: 'Conectado na rede',
  },
  serverConnection: {
    pendingLabel: 'Conectando ao servidor...',
    successLabel: 'Conectado ao servidor',
  },
  sessionValidation: {
    pendingLabel: 'Validando sessão...',
    successLabel: 'Sessão validada',
  },
  userCreatingOrUpdating: {
    pendingLabel: 'Criando ou atualizando usuário...',
    successLabel: 'Usuário criado ou atualizado',
  },
  suportChatsCreating: {
    pendingLabel: 'Criando chats de suporte...',
    successLabel: 'Chats de suporte criados',
  },
  contactsFetching: {
    pendingLabel: 'Carregando lista de contatos...',
    successLabel: 'Lista de contatos carregada',
  },
  chatsFetching: {
    pendingLabel: 'Carregando lista de conversas...',
    successLabel: 'Lista de conversas carregada',
  },
  socketConnection: {
    pendingLabel: 'Conectando no socket...',
    successLabel: 'Conectado no socket',
  },
  finished: {
    pendingLabel: 'Finalizando inicialização...',
    successLabel: 'Finalizado',
  },
};

/**
 * Objeto contendo as mensagens de erro de cada etapa do processo de inicialização.
 */
export const errorMessages = {
  networkConnection: 'Erro ao conectar na rede',
  serverConnection: 'Erro ao conectar ao servidor',
  sessionValidation: 'Erro ao validar sessão',
  userCreatingOrUpdating: 'Erro ao criar ou atualizar usuário',
  suportChatsCreating: 'Erro ao criar conversas de suporte',
  contactsFetching: 'Erro ao carregar lista de usuários',
  chatsFetching: 'Erro ao carregar lista de chats',
  socketConnection: 'Erro ao conectar no socket',
  finished: 'Erro ao finalizar',
  undefined: 'Erro desconhecido',
};

export type InitializationErrors = keyof typeof errorMessages;
export type InitializationSteps = keyof typeof stepsMessages;

/**
 * Componente da tela de inicialização da aplicação.
 * - Fica por cima de todas as outras telas para que os componentes carreguem enquanto ocorre a inicialização.
 */
export function AuthenticatedLoading() {
  const { currentStep, stepList, initializationError } =
    useAppInitializationRoutine();

  const hasError = Boolean(initializationError);

  if (stepList.includes('finished')) return null;

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
              hasError={hasError}
              pendingLabel={stepsMessages[currentStep].pendingLabel}
            />
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          align="center"
          justifyContent="end"
          gap="2"
          p="2"
        >
          <AnimatePresence>
            {stepList.map((stepItem) => (
              <InitializationStepCard
                key={stepItem}
                stepDescription={stepsMessages[stepItem].successLabel}
              />
            ))}
            {hasError && (
              <InitializationError
                key="error"
                errorDescription={
                  errorMessages[initializationError || 'undefined']
                }
              />
            )}
          </AnimatePresence>
        </Flex>
      </Flex>
    </Container>
  );
}
