/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import ArrowBackImage from '~/assets/icons/arrowBack.png';

import {
  ArrowBack,
  ButtonBack,
  HabitAreaText,
  HabitInputContainer,
  HabitInputText,
  HabitPageContainer,
  HabitTitle,
  MainContent,
} from './styles';

function HabitPage() {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const route = useRoute();
  const { create, habit } = route.params as any;
  return (
    <HabitPageContainer>
      <ButtonBack onPress={() => navigation.goBack()}>
        <ArrowBack source={ArrowBackImage} />
      </ButtonBack>
      <MainContent>
        <HabitTitle>Configurações {'\n'} de hábito</HabitTitle>
        <HabitInputText>Área</HabitInputText>
        <HabitInputContainer>
          <HabitAreaText>{habit}</HabitAreaText>
        </HabitInputContainer>
      </MainContent>
    </HabitPageContainer>
  );
}

export default HabitPage;
