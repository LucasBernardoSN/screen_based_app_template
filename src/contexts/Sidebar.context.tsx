import { UseDisclosureReturn, useDisclosure } from '@chakra-ui/react';
import { createContext, useContext } from 'react';

type SidebarContext = UseDisclosureReturn;

const SidebarContext = createContext({} as SidebarContext);

type Provider = {
  children: React.ReactNode;
};

export function SidebarProvider({ children }: Provider) {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => useContext(SidebarContext);
