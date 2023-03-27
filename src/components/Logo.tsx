import { Text, TextProps } from '@chakra-ui/react';

/**
 *  Componente que mostra o logo da aplicação
 * @param props Propriedades do Text do Chakra UI
 */
export function Logo({ ...props }: TextProps) {
  return (
    <Text
      fontWeight="bold"
      letterSpacing="tight"
      maxW="64"
      {...props}
    >
      App
      <Text
        as="span"
        ml="1"
        color="primary"
      >
        .
      </Text>
    </Text>
  );
}
