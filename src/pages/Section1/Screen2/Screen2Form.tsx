import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen2Form({
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
          subTitle: 'This is a form to create a new... 🎉🎉🎉',
        },
      }}
    />
  );
}
