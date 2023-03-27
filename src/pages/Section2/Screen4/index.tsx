import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen4({ getEndPoint = '', title = '' }: CommonScreenProps) {
  return (
    <ContentGenerator
      getEndPoint={getEndPoint}
      title={title}
      variant={{
        type: 'table',
        variantProps: {
          tableHeaders: ['Id', 'Price', 'Rows'],
        },
      }}
    />
  );
}
