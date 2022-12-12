/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import ArrowBackImage from '~/assets/icons/arrowBack.png';
import CustomDateTimePicker from '~/components/HabitPage/CustomDateTimePicker';
import Notification from '~/components/HabitPage/Notification';
import SelectFrequency from '~/components/HabitPage/SelectFrequency';
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
  const [habitInput, setHabitInput] = useState('');
  const [frequencyInput, setFrequencyInput] = useState('');
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [dayNotification, setDayNotification] = useState('');
  const [timeNotification, setTimeNotification] = useState('');

  const route = useRoute();
  const { create, habit } = route.params as any;

  const renderDateTimePicker = () =>
    frequencyInput === 'Mensal' ? null : (
      <CustomDateTimePicker
        frequency={frequencyInput}
        dayNotification={dayNotification}
        timeNotification={timeNotification}
        setDayNotification={setDayNotification}
        setTimeNotification={setTimeNotification}
      />
    );

  return (
    <HabitPageContainer>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <ButtonBack onPress={() => navigation.goBack()}>
          <ArrowBack source={ArrowBackImage} />
        </ButtonBack>
        <MainContent>
          <HabitTitle>Configurações {'\n'} de hábito</HabitTitle>
          <HabitInputText>Área</HabitInputText>
          <HabitInputContainer>
            <HabitAreaText>{habit.habitArea}</HabitAreaText>
          </HabitInputContainer>
          <HabitInputText>Hábito</HabitInputText>
          <SelectHabit habit={habit} habitInput={setHabitInput} />
          <HabitInputText>Frequência</HabitInputText>
          <SelectFrequency
            frequencyInput={setFrequencyInput}
            habitFrequency={habit?.habitFrequency}
          />
          {frequencyInput === 'Mensal' ? null : (
            <Notification
              notificationToggle={notificationToggle}
              setNotificationToggle={setNotificationToggle}
            />
          )}
          {notificationToggle ? renderDateTimePicker() : null}
        </MainContent>
      </ScrollView>
    </HabitPageContainer>
  );
}

export default Habit;
