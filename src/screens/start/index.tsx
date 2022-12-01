import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '@types';

import LogoImage from '~/assets/icons/logo3.png';
import DefaultButton from '~/components/common/DefaultButton';
import LifeStatus from '~/components/common/LifeStatus';

import { CustomSafeAreaView, Description, Logo, LogoContainer } from './styles';

function Start() {
  const navigation = useNavigation<navigationProps>();
  return (
    <CustomSafeAreaView>
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
        onPress={() => navigation.navigate('AppExplanation')}
      />
    </CustomSafeAreaView>
  );
}

export default Start;
