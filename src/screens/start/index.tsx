import React from 'react';
import { ScrollView } from 'react-native';

import LogoImage from '~/assets/icons/logo3.png';
import LifeStatus from '~/components/common/LifeStatus';

import { CustomSafeAreaView, Description, Logo, LogoContainer } from './styles';

function Start() {
  return (
    <CustomSafeAreaView>
      <ScrollView>
        <LogoContainer>
          <Logo source={LogoImage} />
        </LogoContainer>
        <LifeStatus />
        <Description>
          Vamos transformar sua vida em jogo, buscando sempre o melhor nível
        </Description>
      </ScrollView>
    </CustomSafeAreaView>
  );
}

export default Start;
