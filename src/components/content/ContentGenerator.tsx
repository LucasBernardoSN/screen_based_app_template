import { ListContent, ListContentProps } from './ListContent/ListContent';
import { TableContent, TableContentProps } from './TableContent/TableContent';
import { NotFound } from '../../pages/Common/NotFound';
import { FormContent, FormContentProps } from './FormContent/FormContent';

export type CommonScreenProps = {
  getEndPoint?: string;
  title?: string;
};

export type CommonContentProps = Required<CommonScreenProps> & {
  otherHeaderButtons?: React.ReactNode;
};

type ContentGeneratorProps = CommonContentProps & {
  variant:
    | {
        type: 'table';
        variantProps: TableContentProps;
      }
    | {
        type: 'list';
        variantProps: ListContentProps;
      }
    | {
        type: 'form';
        variantProps: FormContentProps;
      };
};

export function ContentGenerator({ variant, ...props }: ContentGeneratorProps) {
  if (variant.type === 'table')
    return (
      <TableContent
        {...props}
        {...variant.variantProps}
      />
    );

  if (variant.type === 'list')
    return (
      <ListContent
        {...props}
        {...variant.variantProps}
      />
    );

  if (variant.type === 'form')
    return (
      <FormContent
        {...props}
        {...variant.variantProps}
      />
    );

  if (!variant) return <NotFound />;

  return <NotFound />;
}
