import { ReactNode, useLayoutEffect, useMemo, useState } from 'react';
import { RouterProviderProps } from 'react-router-dom';
import { createContext, useContextSelector } from 'use-context-selector';
import { sleep } from '../utils/sleep';
import { Routes } from './routes';

type RoutesState = {
  routesConfig: Routes | null;
  router: RouterProviderProps['router'] | null;
};

type RoutesContext = RoutesState;

type ProviderProps = {
  children: ReactNode;
};

/**
 * Contexto das rotas.
 */
export const RoutesContext = createContext({} as RoutesContext);

/**
 * Estado inicial do contexto das rotas.
 * - routes: Rotas da aplicação.
 */
const initialState: RoutesState = {
  routesConfig: null,
  router: null,
};

/**
 * Provedor de contexto das rotas.
 */
export function RoutesProvider({ children }: ProviderProps) {
  const [state, setState] = useState(initialState);

  useLayoutEffect(() => {
    const initRoutesContext = async () => {
      const { routesConfig } = await import('./routesConfig');
      const { createRouter } = await import('./router');

      const asyncRoutes = routesConfig;

      await sleep(1000);

      setState({
        routesConfig: asyncRoutes,
        router: createRouter(asyncRoutes),
      });
    };

    initRoutesContext();
  }, []);

  const providerValue = useMemo(() => ({ ...state }), [state]);

  return (
    <RoutesContext.Provider value={providerValue}>
      {children}
    </RoutesContext.Provider>
  );
}

export const useRoutesContext = () => {
  const state = useContextSelector(RoutesContext, (value) => value);
  return { ...state };
};
