import { Text } from '@chakra-ui/react';
import { Container } from '../../components/layout';

export function Home() {
  return (
    <Container.Main>
      <Container.Header title="Home" />
      <Container.Wrapper>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
      </Container.Wrapper>
    </Container.Main>
  );
}
