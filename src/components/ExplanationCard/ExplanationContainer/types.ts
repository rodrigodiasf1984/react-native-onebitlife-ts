import { ImageSourcePropType } from 'react-native';

export type LabelColor = {
  color: string;
};

export type ExplanationContainerProps = {
  label: string;
  color: string;
  description: string;
  imageSource: ImageSourcePropType;
};
