/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import ArrowBackImage from '~/assets/icons/arrowBack.png';
import SelectHabit from '~/components/HabitPage/SelectHabit';

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

function Habit() {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const [habitInput, setHabitInput] = useState();
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
        <HabitInputText>Hábito</HabitInputText>
        <SelectHabit habit={habit} habitInput={setHabitInput} />
      </MainContent>
    </HabitPageContainer>
  );
}

export default HabitPage;
