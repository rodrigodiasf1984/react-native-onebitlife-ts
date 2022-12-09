import React from 'react';
import { View } from 'react-native';

import {
  EditHabitButton,
  EditHabitCheck,
  EditHabitFrequency,
  EditHabitTitle,
} from './styles';

type EditHabitProps = {
  habit: string;
  frequency: string;
  habitArea: string;
  checkColor: string;
};

export default function EditHabit({
  habit,
  frequency,
  habitArea,
  checkColor,
}: EditHabitProps) {
  const handleEdit = () => {
    console.log('Botão de editar clicado');
  };

  const handleCheck = () => {
    console.log('Botão de check do $(habitArea');
  };

  return (
    <EditHabitButton activeOpacity={0.9} onPress={handleEdit}>
      <View>
        <EditHabitTitle> {habit} </EditHabitTitle>
        <EditHabitFrequency>{frequency}</EditHabitFrequency>
      </View>

      <EditHabitCheck borderColor={checkColor} onPress={handleCheck} />
    </EditHabitButton>
  );
}
