import React, { useState } from 'react';
import { Platform, View } from 'react-native';
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
  frequency: string;
  dayNotification: string;
  timeNotification: string;
  setDayNotification: (v: any) => void;
  setTimeNotification: (v: any) => void;
};

export const WEEK_DAYS = [
  { key: 'Sunday', value: 'Dom' },
  { key: 'Monday', value: 'Seg' },
  { key: 'Tuesday', value: 'Ter' },
  { key: 'Wed', value: 'Qua' },
  { key: 'Thu', value: 'Qui' },
  { key: 'Fri', value: 'Sex' },
  { key: 'Sat', value: 'Sab' },
];

function CustomDateTimePicker({
  dayNotification,
  frequency,
  setDayNotification,
  setTimeNotification,
  timeNotification,
}: DateTimePickerProps) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<any>('date');
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('-');
  const [notificationDate, setNotificationDate] = useState();
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

  const showMode = (currentMode: React.SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };

  return (
    <View>
      <Button
        onPress={() => {
          setMode('time');
          setShow(true);
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
              console.log('Test');
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
