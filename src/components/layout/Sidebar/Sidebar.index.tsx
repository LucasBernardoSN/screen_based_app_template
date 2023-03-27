import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useSidebar } from '../../../contexts/Sidebar.context';
import { Nav } from './Nav';

export function Sidebar() {
  const { isOpen, onClose } = useSidebar();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isDrawerSidebar) return <Nav />;

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
    >
      <DrawerOverlay>
        <DrawerContent bg="slate2">
          <DrawerHeader
            pb="-4"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Heading
              fontSize={{
                base: '2xl',
                md: '3xl',
              }}
            >
              React Router
            </Heading>
            <CloseButton
              onClick={onClose}
              position="unset"
            />
          </DrawerHeader>
          <DrawerBody>
            <Nav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
