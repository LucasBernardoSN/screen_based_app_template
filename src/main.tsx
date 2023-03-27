import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AlertDialogProvider } from './contexts/AlertDialog.context';
import { AuthProvider } from './contexts/Auth.context';
import { ComposeProviders } from './contexts/ComposeProviders';
import { SidebarProvider } from './contexts/Sidebar.context';
import { RoutesProvider } from './routes/Routes.context';

import { theme } from './styles/theme';

/**
 * Arquivo principal da aplicação
 * @see https://reactjs.org/docs/react-dom.html#render
 *
 * - Nele é feito o render do componente App.
 * - E também é feito o render dos providers globais da aplicação.
 * - O componente ComposeProviders é responsável por fazer o render dos providers em cascata a partir de um array de providers.
 * @see https://dev.to/fariasmateuss/compose-multiple-react-providers-4oc4
 *
 */
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <ComposeProviders
      with={[
        AuthProvider,
        RoutesProvider,
        SidebarProvider,
        AlertDialogProvider,
      ]}
    >
      <App />
    </ComposeProviders>
  </ChakraProvider>
);
