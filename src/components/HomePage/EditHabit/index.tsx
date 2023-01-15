import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import format from 'date-fns/format';

import BodyCkeckImage from '~/assets/icons/Body.png';
import FunCkeckImage from '~/assets/icons/Fun.png';
import MindCkeckImage from '~/assets/icons/Mind.png';
import MoneyCkeckImage from '~/assets/icons/Money.png';

import { HabitProps } from '../types';
import {
  CheckedImage,
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
  const [habitCheck, setHabitCheck] = useState(0);
  const [checkImage, setCheckImage] = useState(MindCkeckImage);

  const checkData = format(new Date(), 'yyyy-MM-dd');

  const handleEdit = () => {
    navigation.navigate('Habit', {
      create: false,
      habit,
    });
  };

  const handleCheck = () => {
    if (habitCheck === 0) {
      setHabitCheck(1);
    }
  };

  useEffect(() => {
    setHabitCheck(habit?.habitChecks);
    if (habit?.habitArea === 'Financeiro') {
      setCheckImage(MoneyCkeckImage);
    }
    if (habit?.habitArea === 'Corpo') {
      setCheckImage(BodyCkeckImage);
    }
    if (habit?.habitArea === 'Humor') {
      setCheckImage(FunCkeckImage);
    }
  }, [habit?.habitArea, habit?.habitChecks]);

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
      {habitCheck === 0 ? (
        <EditHabitCheck borderColor={checkColor} onPress={handleCheck} />
      ) : (
        <EditHabitCheck borderColor={checkColor} onPress={handleCheck}>
          <CheckedImage source={checkImage} />
        </EditHabitCheck>
      )}
    </EditHabitButton>
  );
}
