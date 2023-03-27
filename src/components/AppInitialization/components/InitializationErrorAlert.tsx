import { Box, Flex, Text } from '@chakra-ui/react';
import { WarningCircle } from 'phosphor-react';
import { useEffect } from 'react';
import { Button } from '../../Buttons/Button';

type InitializationErrorProps = {
  errorDescription: string;
};

/**
 * Componente do card de erro da inicialização da aplicação.
 * - Usado na tela de inicialização da aplicação.
 * - Mostra uma mensagem de erro, um botão para tentar novamente e um botão para sair da aplicação.
 * @param errorDescription - Texto do erro.
 */
export function InitializationError({
  errorDescription,
}: InitializationErrorProps) {
  /**
   * UseEffect que recarrega automaticamente a página após 5 minutos da ocorrência do erro.
   */
  useEffect(() => {
    const reloadTimeout = setTimeout(() => {
      document.location.reload();
    }, 300000); // 60 * 1000 * 5 = 300000 = 5 minutos em milissegundos.

    return () => {
      clearTimeout(reloadTimeout);
    };
  }, []);

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      p={3}
      borderRadius="md"
      bg="red9"
      color="slate12"
      gap="2"
      flexDirection="column"
    >
      <Flex gap="2">
        <Box>
          <WarningCircle
            size="24"
            weight="bold"
          />
        </Box>
        <Text fontWeight="medium">{errorDescription}</Text>
      </Flex>
      <Flex gap="2">
        <Button
          onClick={() => window.location.reload()}
          text="Tentar novamente"
          colorVariant="red"
          variant="discreet"
        />
        <Button
          // onClick={() => {
          //   signOut();
          // }}
          text="Sair"
          colorVariant="red"
          variant="discreet"
        />
      </Flex>
    </Flex>
  );
}
