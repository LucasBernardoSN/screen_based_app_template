import { Button, ButtonGroup, Heading, SimpleGrid } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Warning } from 'phosphor-react';
import { CommonContentProps } from '../ContentGenerator';
import { Container } from '../../layout';
import { Input } from '../../form/Input';
import { Checkbox } from '../../form/Checkbox';
import { Select } from '../../form/Select';
import { useAlertDialog } from '../../../contexts/AlertDialog.context';

export type FormContentProps = {
  subTitle: string;
};

export function FormContent({
  title,
  subTitle,
}: FormContentProps & CommonContentProps) {
  const navigate = useNavigate();
  const { alertDialog } = useAlertDialog();

  return (
    <Container.Main>
      <Container.Header title={title} />

      <Heading
        as="h2"
        fontSize="xl"
        color="slate11"
        fontWeight="normal"
        px="1"
      >
        {subTitle}
      </Heading>

      <Container.Wrapper>
        <SimpleGrid
          minChildWidth="240px"
          gap="2"
          p="1"
        >
          <Input
            label="First Name"
            name="firstName"
          />
          <Input
            label="Last Name"
            name="lastName"
          />
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="240px"
          gap="2"
          px="1"
        >
          <Input
            label="Address"
            name="address"
          />
          <Input
            label="Number"
            name="number"
          />

          <Input
            label="Complement"
            name="complement"
          />
          <Input
            label="City"
            name="city"
          />
          <Select
            label="State"
            name="state"
            options={[
              {
                display: 'São Paulo',
                value: 'SP',
              },
              {
                display: 'Rio de Janeiro',
                value: 'RJ',
              },
              {
                display: 'Minas Gerais',
                value: 'MG',
              },
            ]}
          />
        </SimpleGrid>
        <SimpleGrid
          minChildWidth="240px"
          gap="2"
          px="1"
          flex="1"
          alignItems="end"
        >
          <Checkbox
            label="I agree to the terms and conditions"
            name="terms"
          />
        </SimpleGrid>
      </Container.Wrapper>

      <ButtonGroup justifyContent="end">
        <Button
          colorScheme="red"
          onClick={() =>
            alertDialog({
              title: 'Cancelar cadastro',
              description: 'Tem certeza que deseja cancelar o cadastro?',
              icon: 'error',
              confirmButton: {
                label: 'Sim',
                colorScheme: 'red',
              },
              cancelButton: {
                label: 'Não',
              },
              onConfirm: () => navigate(-1),
            })
          }
        >
          Cancel
        </Button>
        <Button
          colorScheme="green"
          onClick={() => navigate(-1)}
        >
          Save
        </Button>
      </ButtonGroup>
    </Container.Main>
  );
}
