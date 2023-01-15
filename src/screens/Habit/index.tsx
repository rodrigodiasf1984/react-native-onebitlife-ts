/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { format } from 'date-fns';

import ArrowBackImage from '~/assets/icons/arrowBack.png';
import DefaultButton from '~/components/common/DefaultButton';
import CustomDateTimePicker from '~/components/HabitPage/CustomDateTimePicker';
import Notification from '~/components/HabitPage/Notification';
import SelectFrequency from '~/components/HabitPage/SelectFrequency';
import SelectHabit from '~/components/HabitPage/SelectHabit';
import UpdateExcludeButtons from '~/components/HabitPage/UpdateExcludeButtons';
import habitsService from '~/services/habitsService.js';

import {
  ArrowBack,
  ButtonBack,
  HabitAreaText,
  HabitExcludeButtonsContaier,
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
  const formatDate = format(new Date(), 'yyyy-MM-dd');

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
      habitsService
        .createHabit({
          habitArea: habit?.habitArea,
          habitName: habitInput,
          habitFrequency: frequencyInput,
          habitHasNotification: notificationToggle,
          habitNotificationFrequency: dayNotification,
          habitNotificationTime: timeNotification,
          lastCheck: formatDate,
          daysWithoutChecks: 0,
          habitIsChecked: 0,
          progressBar: 1,
        })
        .then(() => {
          Alert.alert('Sucesso na criação do hábito!');

          navigation.navigate('Home', {
            createdHabit: `Created in ${habit?.habitArea}`,
          });
        });
    }
  };

  const handleUpdateHabit = () => {
    if (notificationToggle === true && !dayNotification && !timeNotification) {
      Alert.alert('Você precisa colocar a frequência e horário da notificação');
    } else {
      habitsService
        .updateHabit({
          habitArea: habit?.habitArea,
          habitName: habitInput,
          habitFrequency: frequencyInput,
          habitHasNotification: notificationToggle,
          habitNotificationFrequency: dayNotification,
          habitNotificationTime: timeNotification,
          habitNotificationId: notificationToggle ? habitInput : null,
        })
        .then(() => {
          Alert.alert('Sucesso na atualização do hábito');
          navigation.navigate('Home', {
            updatedHabit: `Updated in ${habit?.habitArea}`,
          });
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
      <HabitExcludeButtonsContaier>
        <UpdateExcludeButtons
          handleUpdate={handleUpdateHabit}
          habitArea={habit?.habitArea}
          habitInput={habitInput}
        />
      </HabitExcludeButtonsContaier>
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

  useEffect(() => {
    const handleToogle = () => {
      if (habit?.habitHasNotification === 1) {
        setNotificationToggle(true);
        setDayNotification(habit?.habitNotificationFrequency);
        setTimeNotification(habit?.habitNotificationTime);
      }
    };
    return () => {
      handleToogle();
    };
  }, [
    habit?.habitHasNotification,
    habit?.habitNotificationFrequency,
    habit?.habitNotificationTime,
  ]);

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
          {renderExcludedButtons()}
        </MainContent>
      </ScrollView>
    </HabitPageContainer>
  );
}

export default Habit;
