import React, { useState } from 'react';

import BodyImage from '~/assets/icons/bodyIcon.png';
import EducationImage from '~/assets/icons/educationIcon.png';
import FunImage from '~/assets/icons/funIcon.png';
import FinancesImage from '~/assets/icons/moneyIcon.png';

import {
  CustomImage,
  CustomProgressBar,
  ProgressBarContainer,
  StatusContainer,
} from './styles';

export default function Status() {
  return (
    <StatusContainer>
      <ProgressBarContainer>
        <CustomImage source={EducationImage} />
        <CustomProgressBar progress={1} color="#90B7F3" />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FinancesImage} />
        <CustomProgressBar progress={0} color="#85BB65" />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={BodyImage} />
        <CustomProgressBar progress={0} color="#FF0043" />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FunImage} />
        <CustomProgressBar progress={0} color="#FE7F23" />
      </ProgressBarContainer>
    </StatusContainer>
  );
}
