import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen1Form({
  getEndPoint = '',
  title = '',
}: CommonScreenProps) {
  return (
    <ContentGenerator
      getEndPoint={getEndPoint}
      title={title}
      variant={{
        type: 'form',
        variantProps: {
          subTitle: 'Form to create a new...',
        },
      }}
    />
  );
}
