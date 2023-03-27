import { Button, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { CommonContentProps } from '../ContentGenerator';
import { Container } from '../../layout';

export type TableContentProps = {
  tableHeaders: string[];
};

const TABLE_VALUES = [
  {
    name: 'Test',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test2',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test3',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test4',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test5',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test6',
    values: ['Test', 'Test1', 'Test2'],
  },
  {
    name: 'Test7',
    values: ['Test', 'Test1', 'Test2'],
  },
];

export function TableContent({
  title,
  otherHeaderButtons,
  tableHeaders,
  getEndPoint,
}: TableContentProps & CommonContentProps) {
  const navigate = useNavigate();

  return (
    <Container.Main>
      <Container.Header title={title}>
        <Button
          onClick={() => {
            navigate(`${getEndPoint}/create`);
          }}
          colorScheme="blue"
        >
          New
        </Button>
        {otherHeaderButtons}
      </Container.Header>

      <Container.Wrapper>
        <Table
          variant="striped"
          colorScheme="blackAlpha"
        >
          <Thead>
            <Tr>
              {tableHeaders.map((header) => (
                <Th key={header}>{header}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {TABLE_VALUES.map((row) => (
              <Tr key={row.name}>
                {row.values.map((value) => (
                  <Td key={value}>{value}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container.Wrapper>
    </Container.Main>
  );
}
