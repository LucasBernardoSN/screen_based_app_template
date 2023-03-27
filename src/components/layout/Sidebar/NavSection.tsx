import { Box, Text } from '@chakra-ui/react';

interface INavSectionProps {
  title: string;
}

export function NavSection({ title }: INavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight="medium"
        color="slate11"
        fontStyle="italic"
      >
        {title}
      </Text>
    </Box>
  );
}
