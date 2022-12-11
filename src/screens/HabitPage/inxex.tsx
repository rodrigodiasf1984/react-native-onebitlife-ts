import React from 'react';

import { useNavigation } from '@react-navigation/native';

import ArrowBackImage from '~/assets/icons/arrowBack.png';

import {
  ArrowBack,
  ButtonBack,
  HabitPageContainer,
  MainContent,
} from './styles';

function HabitPage() {
  const navigation = useNavigation();
  return (
    <HabitPageContainer>
      <ButtonBack onPress={() => navigation.goBack()}>
        <ArrowBack source={ArrowBackImage} />
      </ButtonBack>
      <MainContent />
    </HabitPageContainer>
  );
}

export default HabitPage;
