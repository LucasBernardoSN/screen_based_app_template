import { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';

export type ColorVariantType =
  | 'dev'
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'slate'
  | 'primary';

export type GetButtonColorPropsArgs = {
  colorVariant?: ColorVariantType;
  leftOrRightIconSize?: number;
  variant?: 'ghost' | 'discreet' | 'solid';
};

type GetButtonColorReturnProps = Pick<
  ChakraButtonProps,
  'bg' | '_hover' | '_active' | '_focus' | '_disabled' | 'css' | 'color'
>;

/**
 * Retorna as propriedades de cor do botão.
 * @param colorVariant - Variante de cor do botão.
 * @param leftOrRightIconSize - Tamanho do ícone do botão.
 * @param variant - Variante de estilo do botão.
 */
export function getButtonColorProps({
  colorVariant = 'slate',
  leftOrRightIconSize,
  variant,
}: GetButtonColorPropsArgs): GetButtonColorReturnProps {
  const commonResponseProps: GetButtonColorReturnProps = {
    css: {
      '> * > *': {
        width: leftOrRightIconSize,
        height: leftOrRightIconSize,
      },
    },
  };

  if (variant === 'ghost') {
    return {
      ...commonResponseProps,
      bg: 'transparent',
      _hover: {
        bg: `${colorVariant}5`,
      },
      _active: {
        bg: `${colorVariant}6`,
      },
      // _focus: {
      //   boxShadow: `0 0 0 3px ${`var(--chakra-colors-${colorVariant}${
      //     colorMode === 'dark' ? '8' : '8' // @todo - arrumar borda de foco
      //   })`}`,
      // },
      _disabled: {
        cursor: 'inherit',
        opacity: 0.5,
        _hover: {
          bg: `${colorVariant}4`,
        },
      },
      color: `${colorVariant}12`,
      css: {
        '> * > *': {
          width: leftOrRightIconSize,
          height: leftOrRightIconSize,
        },
      },
    };
  }
  if (variant === 'discreet') {
    return {
      ...commonResponseProps,
      bg: `${colorVariant}4`,
      _hover: {
        bg: `${colorVariant}5`,
      },
      _active: {
        bg: `${colorVariant}6`,
      },
      // _focus: {
      //   boxShadow: `0 0 0 3px ${`var(--chakra-colors-${colorVariant}${
      //     colorMode === 'dark' ? '8' : '8' // @todo - arrumar borda de foco
      //   })`}`,
      // },
      _disabled: {
        cursor: 'inherit',
        opacity: 0.5,
        _hover: {
          bg: `${colorVariant}4`,
        },
      },
      color: `slate12`,
      css: {
        '> * > *': {
          width: leftOrRightIconSize,
          height: leftOrRightIconSize,
        },
      },
    };
  }

  return {
    ...commonResponseProps,
    bg: `${colorVariant}9`,
    _hover: {
      bg: `${colorVariant}10`,
    },
    _active: {
      bg: `${colorVariant}11`,
    },
    // _focus: {
    //   boxShadow: `0 0 0 3px ${`var(--chakra-colors-${colorVariant}${
    //     colorMode === 'dark' ? '8' : '8'
    //   })`}`, // @todo - arrumar borda de foco
    // },
    _disabled: {
      cursor: 'inherit',
      opacity: 0.5,
      _hover: {
        bg: `${colorVariant}9`,
      },
    },
    color: 'white',
    css: {
      '> * > *': {
        width: leftOrRightIconSize,
        height: leftOrRightIconSize,
      },
    },
  };
}
