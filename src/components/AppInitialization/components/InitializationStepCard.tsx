import { Center, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'phosphor-react';

type InitializationStepCardProps = {
  stepDescription: string;
};

/**
 * Componente de card que exibe o nome de um passo da inicialização da aplicação.
 * @param stepDescription - Texto descritivo do passo.
 */
export function InitializationStepCard({
  stepDescription,
}: InitializationStepCardProps) {
  return (
    <Flex
      as={motion.div}
      alignItems="center"
      bg="primary"
      borderRadius="md"
      fontWeight="medium"
      gap="2"
      layout
      p="2"
      w="64"
      color="slate12"
    >
      <Center>
        <CheckCircle
          size="24"
          weight="bold"
        />
      </Center>
      {stepDescription}
    </Flex>
  );
}
