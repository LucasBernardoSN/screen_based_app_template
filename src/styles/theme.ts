import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { colors } from './colors';

// Configurações do tema do Chakra UI
// Aqui são deifinidas configurações globais do tema

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: {
    ':root': {
      scrollbarColor: `slate8 transparent`,
    },
    body: {
      backgroundColor: 'slate1',
    },
    'select > option:first-of-type': {
      backgroundColor: 'slate1',
    },
    '&::-webkit-scrollbar': {
      width: '8px',
      height: '8px',
    },
    '::-webkit-scrollbar-thumb:horizontal': {
      height: '9999px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'slate8',
      borderRadius: '9999px',
    },
  },
};

const semanticTokens = {
  colors,
};

const breakpoints = {
  '2xs': '12em',
  xs: '20em',
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
  '3xl': '120em',
  '4xl': '160em',
};

export const theme = extendTheme({
  config,
  styles,
  semanticTokens,
  breakpoints,
});
