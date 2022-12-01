import React from 'react';
import { View } from 'react-native';

import DefaultButton from '~/components/common/DefaultButton';

import {
  CustomSafeAreaView,
  Description,
  DescriptionCta,
  Title,
} from './styles';

export default function AppExplanation() {
  return (
    <CustomSafeAreaView>
      <View style={{ alignItems: 'center' }}>
        <Title>Antes, deixa {'\n'} eu te explicar...</Title>
        <DescriptionCta>Pronto(a) para subir de nível na vida?</DescriptionCta>
        <Description>
          Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma
          individual.
        </Description>
        <DefaultButton buttonText="Continuar" width={250} height={50} />
      </View>
    </CustomSafeAreaView>
  );
}