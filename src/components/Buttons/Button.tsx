import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { useAppSizes } from '../../contexts/AppSizes.context';
import { Tooltip } from '../Tooltip';
import { ColorVariantType, getButtonColorProps } from './getButtonColorProps';

export type ButtonProps = {
  text: string;
  variant?: 'ghost' | 'discreet';
  colorVariant?: ColorVariantType;
  tooltipText?: string;
} & ChakraButtonProps;

const ButtonFoward: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { colorVariant, variant, text, tooltipText, ...props },
  ref
) => {
  const { responsiveSize, leftOrRightIconSize } = useAppSizes();

  if (tooltipText) {
    return (
      <Tooltip tooltipText={tooltipText}>
        <ChakraButton
          {...getButtonColorProps({
            colorVariant,
            variant,
            leftOrRightIconSize,
          })}
          size={responsiveSize}
          ref={ref}
          {...props}
        >
          {text}
        </ChakraButton>
      </Tooltip>
    );
  }

  return (
    <ChakraButton
      {...getButtonColorProps({
        colorVariant,
        variant,
        leftOrRightIconSize,
      })}
      size={responsiveSize}
      ref={ref}
      transition="all 0.2s"
      {...props}
    >
      {text}
    </ChakraButton>
  );
};

/**
 * Componente de botão padrão da aplicação.
 * - Usado em toda a aplicação para ações de confirmação, cancelamento, etc.
 * - Possui variantes de cores e variantes de estilo.
 */
export const Button = forwardRef(ButtonFoward);
