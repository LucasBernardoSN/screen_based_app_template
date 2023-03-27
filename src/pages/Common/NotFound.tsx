import { Center, Text } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export function NotFound() {
  const { pathname } = useLocation();

  return (
    <Center flexDir="column">
      <Text fontSize="2xl">404: Not Found</Text>
      <Text fontSize="2xl">{pathname}</Text>
    </Center>
  );
}
