import React, { useState } from 'react';
import { View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import ArrowIcon from '~/assets/icons/arrowDropdown.png';

import {
  Arrow,
  Button,
  ButtonText,
  NotificationText,
  otherStyles,
  TextContainer,
} from './styles';

type DateTimePickerProps = {
  frequency: string | undefined;
  dayNotification: string | undefined;
  timeNotification: string;
  setDayNotification: (v: string | undefined) => void;
  setTimeNotification: (v: string) => void;
};

export const WEEK_DAYS = [
  { key: 'Domingo', value: 'Dom' },
  { key: 'Segunda', value: 'Seg' },
  { key: 'Terça', value: 'Ter' },
  { key: 'Quarta', value: 'Qua' },
  { key: 'Quinta', value: 'Qui' },
  { key: 'Sexta', value: 'Sex' },
  { key: 'Sábado', value: 'Sab' },
];

function CustomDateTimePicker({
  dayNotification,
  frequency,
  setDayNotification,
  setTimeNotification,
  timeNotification,
}: DateTimePickerProps) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<'date' | 'time' | 'datetime' | undefined>(
    'date',
  );
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('-');
  const [notificationDate, setNotificationDate] = useState('');
  const [notificationTime, setNotificationTime] = useState('');

  const onChange = (selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    const tempDate = new Date(currentDate);
    const notificationHour = tempDate.getHours().toString().padStart(2, '0');
    const notificationMinutes = tempDate
      .getMinutes()
      .toString()
      .padStart(2, '0');

    let dateNotification;

    if (frequency === 'Semanal') {
      dateNotification = selected;
    }
    const tNotification = `${notificationHour}:${notificationMinutes}`;
    setNotificationDate(dateNotification);
    setNotificationTime(tNotification);

    if (frequency === 'Diário') {
      setDayNotification('Diário');
    } else {
      setDayNotification(dateNotification);
    }
    setTimeNotification(tNotification);
    setShow(false);
  };

  const showMode = (currentMode: 'date' | 'time' | 'datetime' | undefined) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Button
        onPress={() => {
          showMode('time');
        }}
      >
        <ButtonText>Selecione a hora</ButtonText>
      </Button>

      <TextContainer>
        {frequency === 'Diário' ? (
          <NotificationText>Dia do hábito: Diário</NotificationText>
        ) : null}
        {frequency === 'Semanal' ? (
          <SelectList
            data={WEEK_DAYS}
            search={false}
            setSelected={setSelected}
            onSelect={() => {
              setNotificationDate(selected);
            }}
            placeholder={selected}
            boxStyles={otherStyles.boxStyle}
            inputStyles={otherStyles.inputStyle}
            dropdownStyles={otherStyles.dropdownStyle}
            dropdownItemStyles={otherStyles.dropdownItemStyle}
            dropdownTextStyles={otherStyles.dropdownTextStyle}
            arrowicon={<Arrow source={ArrowIcon} />}
          />
        ) : null}

        {frequency === 'Semanal' ? (
          <NotificationText>Dia do hábito: {notificationDate}</NotificationText>
        ) : null}
        <NotificationText>
          Horário do hábito: {notificationTime}
        </NotificationText>
      </TextContainer>

      {show && (
        <DateTimePickerModal
          date={date}
          isVisible={show}
          mode={mode}
          onConfirm={onChange}
          onCancel={() => setShow(false)}
        />
      )}
    </View>
  );
}

export default CustomDateTimePicker;
