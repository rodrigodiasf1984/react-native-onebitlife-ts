import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';

import LogoImage from '~/assets/icons/logo3.png';

import { CustomSafeAreaView, Description, Logo, LogoContainer } from './styles';

function Start() {
  return (
    <CustomSafeAreaView>
      <ScrollView>
        <LogoContainer>
          <Logo source={LogoImage} />
        </LogoContainer>
        <Description>
          Vamos transformar sua vida {'\n'} em jogo, buscando sempre {'\n'} o
          melhor nível
        </Description>
      </ScrollView>
    </CustomSafeAreaView>
  );
}

export default Start;
