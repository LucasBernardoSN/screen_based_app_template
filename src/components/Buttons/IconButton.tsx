import {
  IconButtonProps as ChakraIconButtonProps,
  IconButton as ChakraIconButton,
  Spinner,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { useAppSizes } from '../../contexts/AppSizes.context';
import { Tooltip } from '../Tooltip';
import { ColorVariantType, getButtonColorProps } from './getButtonColorProps';

type IconButtonProps = ChakraIconButtonProps & {
  tooltipText?: string;
  variant?: 'ghost' | 'solid' | 'discreet';
  colorVariant?: ColorVariantType;
  icon: React.ReactNode;
};

const IconButtonFoward: ForwardRefRenderFunction<
  HTMLButtonElement,
  IconButtonProps
> = (
  { colorVariant, tooltipText, variant, isLoading, icon, onClick, ...props },
  ref
) => {
  const { responsiveSize, iconButtonSize } = useAppSizes();

  if (tooltipText) {
    return (
      <Tooltip tooltipText={tooltipText}>
        <ChakraIconButton
          {...getButtonColorProps({
            colorVariant,
            variant,
          })}
          size={responsiveSize}
          ref={ref}
          css={{
            '> *': {
              width: iconButtonSize,
              height: iconButtonSize,
            },
          }}
          onClick={isLoading ? (event) => event.stopPropagation() : onClick}
          icon={isLoading ? <Spinner size={responsiveSize} /> : icon}
          {...props}
        />
      </Tooltip>
    );
  }

  return (
    <ChakraIconButton
      {...getButtonColorProps({
        colorVariant,
        variant,
      })}
      size={responsiveSize}
      ref={ref}
      css={{
        '> *': {
          width: iconButtonSize,
          height: iconButtonSize,
        },
      }}
      onClick={isLoading ? (event) => event.stopPropagation() : onClick}
      icon={isLoading ? <Spinner size={responsiveSize} /> : icon}
      {...props}
    />
  );
};

/**
 * Componente de botão de ícone.
 * - Usado em toda a aplicação para abrir modais, popups, etc.
 * - Ele é um botão que recebe um ícone como filho.
 */
export const IconButton = forwardRef(IconButtonFoward);
