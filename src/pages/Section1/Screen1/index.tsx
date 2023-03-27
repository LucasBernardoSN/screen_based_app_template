import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen1({ getEndPoint = '', title = '' }: CommonScreenProps) {
  return (
    <ContentGenerator
      getEndPoint={getEndPoint}
      title={title}
      variant={{
        type: 'table',
        variantProps: {
          tableHeaders: [],
        },
      }}
    />
  );
}
