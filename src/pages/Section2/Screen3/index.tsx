import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen3({ getEndPoint = '', title = '' }: CommonScreenProps) {
  return (
    <ContentGenerator
      getEndPoint={getEndPoint}
      title={title}
      variant={{
        type: 'list',
        variantProps: {
          color: 'primary',
        },
      }}
    />
  );
}
