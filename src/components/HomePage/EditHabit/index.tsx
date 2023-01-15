import React from 'react';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import { HabitProps } from '../types';
import {
  EditHabitButton,
  EditHabitCheck,
  EditHabitContainer,
  EditHabitFrequency,
  EditHabitTitle,
} from './styles';

type EditHabitProps = {
  habit: HabitProps;
  checkColor: string;
};

export default function EditHabit({ habit, checkColor }: EditHabitProps) {
  const navigation = useNavigation<NavigationProp<any, any>>();

  const handleEdit = () => {
    navigation.navigate('Habit', {
      create: false,
      habit,
    });
  };

  const handleCheck = () => {
    console.log(`Clicando no check do ${habit?.habitArea}`);
  };

  const textNotification =
    habit?.habitNotificationTime === null
      ? `Sem notificação - ${habit?.habitFrequency}`
      : `${habit?.habitNotificationTime} - ${habit?.habitFrequency}`;

  return (
    <EditHabitButton activeOpacity={0.9} onPress={handleEdit}>
      <EditHabitContainer>
        <EditHabitTitle> {habit?.habitName} </EditHabitTitle>
        <EditHabitFrequency>{textNotification}</EditHabitFrequency>
      </EditHabitContainer>
      <EditHabitCheck borderColor={checkColor} onPress={handleCheck} />
    </EditHabitButton>
  );
}
