import {
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from '@chakra-ui/react';

type TooltipProps = Pick<ChakraTooltipProps, 'openDelay' | 'closeDelay'> & {
  tooltipText: string;
  children: React.ReactNode;
};

/**
 * Componente de tooltip padrão da aplicação.
 * - Baseado no componente Tooltip do Chakra UI.
 * - É usado para mostrar informações adicionais sobre um componente.
 * - Quando é realizado um comportamento de `hover` ou `focus` no componente children, o tooltip é aberto.
 * @param tooltipText Texto do tooltip.
 * @param children Conteúdo do tooltip.
 * @param openDelay Delay para abrir o tooltip.
 * @param closeDelay Delay para fechar o tooltip.
 */
export function Tooltip({
  tooltipText,
  children,
  openDelay,
  closeDelay,
}: TooltipProps) {
  return (
    <ChakraTooltip
      label={tooltipText}
      openDelay={openDelay || 500}
      closeDelay={closeDelay || 100}
      bg="slate9"
      color="white"
      borderRadius="lg"
      hasArrow
    >
      {children}
    </ChakraTooltip>
  );
}
