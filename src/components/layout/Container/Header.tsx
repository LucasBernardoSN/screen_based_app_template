import { Flex, Heading, Spinner } from '@chakra-ui/react';

type HeaderProps = {
  children?: React.ReactNode;
  isFetching?: boolean;
  title: string;
};

export function Header({ children, isFetching, title }: HeaderProps) {
  return (
    <Flex
      alignContent={{ base: 'center' }}
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between"
    >
      <Heading
        fontWeight="medium"
        mb="0"
        size="lg"
        color="primary"
      >
        {title}

        {isFetching && (
          <Spinner
            color="primary"
            ml="4"
          />
        )}
      </Heading>
      <Flex
        flexWrap="wrap"
        gap="2"
        justifyContent={{ base: 'flex-start', sm: 'flex-end' }}
        p="1"
      >
        {children}
      </Flex>
    </Flex>
  );
}
