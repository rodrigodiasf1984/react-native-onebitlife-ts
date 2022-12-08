import React from 'react';

import {
  CustomImage,
  Description,
  Label,
  MainExplanationContainer,
} from './styles';
import { ExplanationContainerProps } from './types';

function ExplanationContainer({
  description,
  imageSource,
  label,
  color,
}: ExplanationContainerProps) {
  return (
    <MainExplanationContainer>
      <CustomImage source={imageSource} />
      <Description>
        <Label color={color}>{label}:</Label> {description}
      </Description>
    </MainExplanationContainer>
  );
}

export default ExplanationContainer;
