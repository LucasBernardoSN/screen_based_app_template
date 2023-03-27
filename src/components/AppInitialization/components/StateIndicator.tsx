import { Box, Progress, Text } from '@chakra-ui/react';

type StateIndicatorProps = {
  hasError: boolean;
  pendingLabel: string;
};

/**
 * Componente de mensagem contendo o estado atual da inicialização da aplicação.
 * - Usuado na tela de inicialização da aplicação.
 * @param hasError - Indica se houve algum erro na inicialização da aplicação.
 * @param pendingLabel - Mensagem que será mostrada enquanto a aplicação estiver sendo inicializada.
 */
export function StateIndicator({
  hasError,
  pendingLabel,
}: StateIndicatorProps) {
  if (hasError) {
    return (
      <Text
        mt="4"
        color="error"
        fontWeight="medium"
        letterSpacing="wide"
      >
        Ocorreu um erro ao carregar a aplicação!
      </Text>
    );
  }

  return (
    <>
      <Box>
        <Progress
          size="xs"
          isIndeterminate
          colorScheme="primary"
        />
      </Box>
      <Text
        mt="4"
        color="primary"
        fontWeight="medium"
        letterSpacing="wide"
      >
        {pendingLabel}
      </Text>
    </>
  );
}
