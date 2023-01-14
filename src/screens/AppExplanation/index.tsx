/* eslint-disable import/no-duplicates */
import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';
import { navigationProps } from '@types';
import { format } from 'date-fns';

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
  // const appStartData = `${startDate.getFullYear()}-${startDate.getMonth()}-${startDate.getDay()}`;
  const appStartData = format(new Date(), 'yyyy-MM-dd');
  function handleNavHome() {
    navigation.navigate('Home');
  }

  function handleSetShowHome() {
    if (showHome !== 'true') {
      ChangeNavigationService.setShowHome({ showHome: 'true', appStartData })
        .then(() => console.log(`Sucesso! ${showHome} ${appStartData}`))
        .catch(err => console.log(err));
      setShowHome('true');
      handleNavHome();
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
