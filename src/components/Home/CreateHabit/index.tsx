/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ButtonCreateHabit, CreateHabitButtonText } from './styles';

type CreateHabitProps = {
  habitArea: string;
  borderColor: string;
};

function CreateHabit({ habitArea, borderColor }: CreateHabitProps) {
  const navigation = useNavigation<NavigationProp<any, any>>();
  const params = {
    create: true,
    habit: habitArea,
  };
  const handleCreate = () => {
    navigation.navigate('HabitPage', params);
  };

  return (
    <ButtonCreateHabit
      activeOpacity={0.8}
      onPress={handleCreate}
      borderColor={borderColor}
    >
      <CreateHabitButtonText>
        Adicionar meta {habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
      </CreateHabitButtonText>
    </ButtonCreateHabit>
  );
}

export default CreateHabit;
