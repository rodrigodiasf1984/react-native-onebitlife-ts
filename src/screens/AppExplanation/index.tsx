import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '@types';

import DefaultButton from '~/components/common/DefaultButton';
import ExplanationCard from '~/components/ExplanationCard';
import ChangeNavigationService from '~/services/changeNavigationService.js';

import {
  CustomSafeAreaView,
  Description,
  DescriptionCta,
  Title,
} from './styles';

export default function AppExplanation() {
  const navigation = useNavigation<navigationProps>();
  const [showHome, setShowHome] = useState('false');
  const startDate = new Date();
  const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDay()}`;

  function handleSetShowHome() {
    console.log('✅ ~  showHome', showHome);
    if (showHome !== 'true') {
      ChangeNavigationService.setShowHome({ showHome: 'true', appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch(err => console.log(err));
      setShowHome('true');
      navigation.navigate('Home');
    }
  }

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
        onPress={() => handleSetShowHome()}
      />
    </CustomSafeAreaView>
  );
}
