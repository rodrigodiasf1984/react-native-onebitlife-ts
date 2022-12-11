import React from 'react';

import BodyImage from '~/assets/icons/bodyIcon.png';
import EducationImage from '~/assets/icons/educationIcon.png';
import FunImage from '~/assets/icons/funIcon.png';
import FinancesImage from '~/assets/icons/moneyIcon.png';
import { THEME } from '~/utils/Theme';

import ExplanationContainer from './ExplanationContainer';
import { CustomTitle, ExplanationCardContainer } from './styles';

function ExplanationCard() {
  return (
    <ExplanationCardContainer>
      <CustomTitle>
        Através deste APP você vai consolidar {'\n'} 4 hábitos de áreas
        fundamentais:
      </CustomTitle>
      <ExplanationContainer
        color={THEME.COLORS.MIND}
        label="Mente"
        description="Hábitos para melhorar sua inteligência e sabedoria"
        imageSource={EducationImage}
      />
      <ExplanationContainer
        color={THEME.COLORS.FINANCIAL}
        label="Financeiro"
        description="Hábitos para te ajudar com o controle financeiro"
        imageSource={FinancesImage}
      />
      <ExplanationContainer
        color={THEME.COLORS.BODY}
        label="Corpo"
        description="Hábitos para te deixar mais saudável e forte"
        imageSource={BodyImage}
      />
      <ExplanationContainer
        color={THEME.COLORS.FUN}
        label="Humor"
        description="Hábitos para controlar o stress e aumentar a felicidade"
        imageSource={FunImage}
      />
    </ExplanationCardContainer>
  );
}

export default ExplanationCard;
