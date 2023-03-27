import {
  CommonScreenProps,
  ContentGenerator,
} from '../../../components/content/ContentGenerator';

export function Screen4Form({
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
          subTitle: 'Form... 🐱‍🚀🐱‍🚀🐱‍🚀🐱‍🚀',
        },
      }}
    />
  );
}
