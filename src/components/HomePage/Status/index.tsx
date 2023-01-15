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

type StatusProps = {
  mindHabit: number;
  moneyHabit: number;
  bodyHabit: number;
  funHabit: number;
};

export default function Status({
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit,
}: StatusProps) {
  return (
    <StatusContainer>
      <ProgressBarContainer>
        <CustomImage source={EducationImage} />
        <CustomProgressBar progress={mindHabit} color={THEME.COLORS.MIND} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FinancesImage} />
        <CustomProgressBar
          progress={moneyHabit}
          color={THEME.COLORS.FINANCIAL}
        />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={BodyImage} />
        <CustomProgressBar progress={bodyHabit} color={THEME.COLORS.BODY} />
      </ProgressBarContainer>
      <ProgressBarContainer>
        <CustomImage source={FunImage} />
        <CustomProgressBar progress={funHabit} color={THEME.COLORS.FUN} />
      </ProgressBarContainer>
    </StatusContainer>
  );
}
