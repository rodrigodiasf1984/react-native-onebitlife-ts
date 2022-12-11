import React, { useState } from 'react';

import BodyImage from '~/assets/icons/bodyIcon.png';
import EducationImage from '~/assets/icons/educationIcon.png';
import FunImage from '~/assets/icons/funIcon.png';
import FinancesImage from '~/assets/icons/moneyIcon.png';
import { THEME } from '~/utils/Theme';

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
        <CustomProgressBar progress={1} color={THEME.COLORS.MIND} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FinancesImage} />
        <CustomProgressBar progress={0} color={THEME.COLORS.FINANCIAL} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={BodyImage} />
        <CustomProgressBar progress={0} color={THEME.COLORS.BODY} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FunImage} />
        <CustomProgressBar progress={0} color={THEME.COLORS.FUN} />
      </ProgressBarContainer>
    </StatusContainer>
  );
}
