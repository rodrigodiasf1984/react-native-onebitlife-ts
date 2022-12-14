/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import ArrowBackImage from '~/assets/icons/arrowBack.png';
import DefaultButton from '~/components/common/DefaultButton';
import CustomDateTimePicker from '~/components/HabitPage/CustomDateTimePicker';
import Notification from '~/components/HabitPage/Notification';
import SelectFrequency from '~/components/HabitPage/SelectFrequency';
import SelectHabit from '~/components/HabitPage/SelectHabit';
import UpdateExcludeButtons from '~/components/HabitPage/UpdateExcludeButtons';

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
  const [habitInput, setHabitInput] = useState<string | undefined>(undefined);
  const [frequencyInput, setFrequencyInput] = useState<string | undefined>(
    undefined,
  );
  const [notificationToggle, setNotificationToggle] = useState(false);
  const [dayNotification, setDayNotification] = useState<string | undefined>(
    undefined,
  );
  const [timeNotification, setTimeNotification] = useState('');

  const route = useRoute();
  const { create, habit } = route.params as any;

  const handleCreateHabit = () => {
    if (habitInput === undefined || frequencyInput === undefined) {
      Alert.alert(
        'Você precisa selecionar um hábito e frequência para continuar',
      );
    } else if (
      notificationToggle === true &&
      frequencyInput === 'Diário' &&
      timeNotification === undefined
    ) {
      Alert.alert('Você precisa dizer o horário da notificação!');
    } else if (dayNotification === undefined) {
      Alert.alert(
        'Você precisa dizer a frequência e o horário da notificação!',
      );
    } else {
      navigation.navigate('Home', {
        createHabit: `Created in ${habit?.habitArea}`,
      });
    }
  };

  const handleUpdateHabit = () => {
    if (notificationToggle === true && !dayNotification && !timeNotification) {
      Alert.alert(
        'Você precisa colocar a frequência e o horário da notificação',
      );
    } else {
      navigation.navigate('Home', {
        updateHabit: `Updated in ${habit?.habitArea}`,
      });
    }
  };

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

  const renderExcludedButtons = () =>
    create === false ? (
      <UpdateExcludeButtons
        handleUpdate={handleUpdateHabit}
        habitArea={habit?.habitArea}
        habitInput={habitInput}
      />
    ) : (
      <View style={{ alignItems: 'center' }}>
        <DefaultButton
          buttonText="Criar"
          onPress={handleCreateHabit}
          width={250}
          height={50}
        />
      </View>
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
          {create ? renderExcludedButtons() : null}
        </MainContent>
      </ScrollView>
    </HabitPageContainer>
  );
}

export default Habit;
