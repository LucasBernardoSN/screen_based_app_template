import { IconButton, useColorMode } from '@chakra-ui/react';
import { Moon, Sun } from 'phosphor-react';

export function ToogleColorModeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Button to toggle color mode"
      icon={
        colorMode === 'light' ? (
          <Sun
            weight="bold"
            width={20}
            height={20}
          />
        ) : (
          <Moon
            width={20}
            height={20}
            weight="bold"
          />
        )
      }
      onClick={toggleColorMode}
      variant="ghost"
      size="md"
    />
  );
}
