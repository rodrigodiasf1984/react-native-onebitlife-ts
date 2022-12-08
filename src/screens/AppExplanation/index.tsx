import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '@types';

import DefaultButton from '~/components/common/DefaultButton';
import ExplanationCard from '~/components/ExplanationCard';

import {
  CustomSafeAreaView,
  Description,
  DescriptionCta,
  Title,
} from './styles';

export default function AppExplanation() {
  const navigation = useNavigation<navigationProps>();
  return (
    <CustomSafeAreaView>
      <Title>Antes, deixa {'\n'} eu te explicar...</Title>
      <ExplanationCard />
      <DescriptionCta>Pronto(a) para subir de nível na vida?</DescriptionCta>
      <Description>
        Na próxima tela você vai poder escolher {'\n'} seus 4 hábitos de forma
        individual.
      </Description>
      <DefaultButton
        buttonText="Continuar"
        width={250}
        height={50}
        onPress={() => navigation.navigate('Home')}
      />
    </CustomSafeAreaView>
  );
}
