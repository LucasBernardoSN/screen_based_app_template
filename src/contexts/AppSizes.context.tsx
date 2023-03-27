import { ReactNode, useMemo, useState, useCallback } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

type AppSizesProviderProps = {
  children: ReactNode;
};

type AppSizesContextType = {
  currentSize: 0 | 1 | 2;
  responsiveSize: 'sm' | 'md' | 'lg';
  iconButtonSize: 20 | 24 | 28;
  leftOrRightIconSize: 16 | 20 | 24;
  drawerWidth: '320px' | '360px' | '400px';
  listItemHeight: '16' | '20' | '24';
  changeCurrentSize: (newSize: 0 | 1 | 2) => void;
};

const RESPONSIVE_SIZE = ['sm', 'md', 'lg'] as const;
const ICON_BUTTON_SIZE = [20, 24, 28] as const;
const LEFT_OR_RIGHT_ICON_SIZE = [16, 20, 24] as const;
const DRAWER_WIDTH = ['320px', '360px', '400px'] as const;
const LIST_ITEM_HEIGHT = ['16', '20', '24'] as const;

export const AppSizesContext = createContext<AppSizesContextType>(
  {} as AppSizesContextType
);

/**
 * Provedor de contexto para os componentes que precisam de tamanhos responsivos.
 */
export function AppSizesProvider({ children }: AppSizesProviderProps) {
  const [currentSize, setCurrentSize] = useState<
    AppSizesContextType['currentSize']
  >((Number(localStorage.getItem('erochat.fontSize')) as 0 | 1 | 2) ?? 0);

  const changeCurrentSize = useCallback((newSize: 0 | 1 | 2) => {
    localStorage.setItem('erochat.fontSize', String(newSize));
    setCurrentSize(newSize);
  }, []);

  const providerValue = useMemo(
    () => ({
      responsiveSize: RESPONSIVE_SIZE[currentSize],
      iconButtonSize: ICON_BUTTON_SIZE[currentSize],
      leftOrRightIconSize: LEFT_OR_RIGHT_ICON_SIZE[currentSize],
      drawerWidth: DRAWER_WIDTH[currentSize],
      listItemHeight: LIST_ITEM_HEIGHT[currentSize],
      currentSize,
      changeCurrentSize,
    }),
    [changeCurrentSize, currentSize]
  );

  return (
    <AppSizesContext.Provider value={providerValue}>
      {children}
    </AppSizesContext.Provider>
  );
}

/**
 * Hook para acessar os tamanhos responsivos.
 */
export const useAppSizes = () => {
  const {
    responsiveSize,
    iconButtonSize,
    leftOrRightIconSize,
    drawerWidth,
    listItemHeight,
    currentSize,
    changeCurrentSize,
  } = useContextSelector(AppSizesContext, (value) => value);

  return {
    /**
     * Tamanho atual da fonte. A partir dos tamanhos padrões.
     */
    responsiveSize,
    /**
     * Tamanho do icone dos botões que são apenas ícones.
     */
    iconButtonSize,
    /**
     * Tamanho do ícone que fica do lado esquerdo ou direito de um botão de texto com ícone.
     */
    leftOrRightIconSize,
    /**
     * Largura padrão do drawer.
     */
    drawerWidth,
    /**
     * Altura padrão de um item de lista.
     */
    listItemHeight,
    /**
     * Tamanho numérico atual da fonte. Serve para usar em arrays de outros tamanhos.
     */
    currentSize,
    /**
     * Função para alterar o tamanho atual da fonte.
     */
    changeCurrentSize,
  };
};
