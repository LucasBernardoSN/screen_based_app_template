import { X } from 'phosphor-react';
import { forwardRef, ForwardRefRenderFunction, MouseEvent } from 'react';
import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
import { IconButton } from './IconButton';

type CloseButtonProps = ChakraButtonProps & {
  onClick: (event: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: 'ghost' | 'solid' | 'discreet';
};

const CloseButtonFoward: ForwardRefRenderFunction<
  HTMLButtonElement,
  CloseButtonProps
> = ({ variant = 'ghost', ...props }, ref) => {
  return (
    <IconButton
      position="absolute"
      top="2"
      right="2"
      variant={variant}
      {...props}
      ref={ref}
      aria-label="Fechar"
      tooltipText="Clique para fechar"
      icon={<X weight="bold" />}
    />
  );
};

/**
 * Componente do botão de fechar.
 * - Usado em toda a aplicação para fechar modais, popups, etc.
 */
export const CloseButton = forwardRef(CloseButtonFoward);
