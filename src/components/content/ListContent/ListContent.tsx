import { Button, Center, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CommonContentProps } from '../ContentGenerator';
import { Container } from '../../layout';

export type ListContentProps = {
  color: 'primary' | 'red' | 'green';
};

export function ListContent({
  title,
  color,
  getEndPoint,
  otherHeaderButtons,
}: ListContentProps & CommonContentProps) {
  const navigate = useNavigate();

  return (
    <Container.Main>
      <Container.Header title={title}>
        <Button
          onClick={() => {
            navigate(`${getEndPoint}/create`);
          }}
        >
          New
        </Button>
        {otherHeaderButtons}
      </Container.Header>

      <Text
        fontSize="2xl"
        color={color}
        fontWeight="bold"
      >
        List
      </Text>

      <Container.Wrapper>
        <Flex
          bg="slate1"
          flex="1"
          flexDirection="column"
          gap="1"
          p="2"
        >
          {[...Array(100).keys()].map((item) => (
            <Center
              key={item}
              bg="slate4"
              p="1"
              borderRadius="md"
              color={color}
              fontWeight="bold"
            >
              {item}
            </Center>
          ))}
        </Flex>
      </Container.Wrapper>
    </Container.Main>
  );
}
