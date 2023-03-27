import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Stack,
} from '@chakra-ui/react';
import { Paperclip } from 'phosphor-react';
import React from 'react';
import { routesConfig } from '../../../routes/routesConfig';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function Nav() {
  const permitedRoutes = routesConfig;

  return (
    <Flex
      w={{ base: '100%', lg: '240px' }}
      bg="slate2"
      borderRadius={8}
      direction="column"
      alignContent="stretch"
      h="100%"
    >
      <Box
        id="sidebar-container"
        maxH="100%"
        overflowY="scroll"
        flex="1 0 0"
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '::-webkit-scrollbar-thumb:horizontal': {
            height: '9999px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'transparent',
            borderRadius: '9999px',
          },
          '&:hover::-webkit-scrollbar-thumb': {
            background: 'var(--chakra-colors-slate8)',
          },
        }}
      >
        <Accordion allowToggle>
          {permitedRoutes?.map((section) => (
            <AccordionItem
              aria-expanded="true"
              border="none"
              key={section.path}
            >
              <AccordionButton
                display="flex"
                justifyContent="space-between"
              >
                <NavSection title={section.title.toUpperCase()} />
                <AccordionIcon
                  fontSize="2xl"
                  color="slate11"
                />
              </AccordionButton>
              <AccordionPanel ml="2">
                <Stack spacing="4">
                  {section.screens.map((screen) => (
                    <React.Fragment key={screen.path}>
                      <NavLink
                        href={`/${section.path}/${screen.path}`}
                        icon={screen.icon ?? Paperclip}
                      >
                        {screen.title}
                      </NavLink>
                    </React.Fragment>
                  ))}
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  );
}
