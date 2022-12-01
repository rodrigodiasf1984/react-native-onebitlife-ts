import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LogoImage from '~/assets/icons/logo3.png';
import DefaultButton from '~/components/common/DefaultButton';
import LifeStatus from '~/components/common/LifeStatus';

import { CustomSafeAreaView, Description, Logo, LogoContainer } from './styles';

function Start() {
  const navigation = useNavigation();
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
        <DefaultButton
          buttonText="Continuar"
          height={50}
          width={250}
          onPress={() => console.log('clicked')}
        />
      </ScrollView>
    </CustomSafeAreaView>
  );
}

export default Start;
