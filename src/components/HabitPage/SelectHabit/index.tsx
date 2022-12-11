import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import ArrowDropDown from '~/assets/icons/arrowDropdown.png';
import { dataBody, dataFun, dataMind, dataMoney } from '~/Database/HabitData';

import { styles } from './styles';

type SelectHabitProps = {
  habit: string | undefined;
  habitInput: (string) => void;
};

type GenericData = {
  key: string;
  value: string;
};

function SelectHabit({ habit, habitInput }: SelectHabitProps) {
  const [selected, setSelected] = useState(habit ?? '-');
  const [data, setData] = useState<GenericData[] | undefined>();
  useEffect(() => {
    switch (habit) {
      case 'Mente':
        setData(dataMind);
        break;
      case 'Financeiro':
        setData(dataMoney);
        break;
      case 'Corpo':
        setData(dataBody);
        break;
      case 'Humor':
        setData(dataFun);
        break;
      default:
        break;
    }

    habitInput(habit);
  }, [habit, habitInput]);

  return (
    <SelectList
      setSelected={setSelected}
      data={data ?? []}
      search={false}
      onSelect={() => {
        habitInput(selected);
      }}
      placeholder={selected}
      boxStyles={styles.boxStyle}
      inputStyles={styles.inputStyle}
      dropdownStyles={styles.dropdownStyle}
      dropdownItemStyles={styles.dropdownItemStyle}
      dropdownTextStyles={styles.dropdownTextStyle}
      arrowicon={<Image source={ArrowDropDown} style={styles.arrow} />}
    />
  );
}

export default SelectHabit;
