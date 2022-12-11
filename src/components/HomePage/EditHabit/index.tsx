import React from 'react';
import { View } from 'react-native';

import { HabitProps } from '../types';
import {
  EditHabitButton,
  EditHabitCheck,
  EditHabitFrequency,
  EditHabitTitle,
} from './styles';

type EditHabitProps = {
  habit: HabitProps;
  checkColor: string;
};

export default function EditHabit({ habit, checkColor }: EditHabitProps) {
  const handleEdit = () => {
    console.log('Botão de editar clicado');
  };

  const handleCheck = () => {
    console.log('Botão de check do $(habit.habitArea');
  };

  return (
    <EditHabitButton activeOpacity={0.9} onPress={handleEdit}>
      <View>
        <EditHabitTitle> {habit?.habitName} </EditHabitTitle>
        <EditHabitFrequency>{habit?.habitFrequency}</EditHabitFrequency>
      </View>

      <EditHabitCheck borderColor={checkColor} onPress={handleCheck} />
    </EditHabitButton>
  );
}
