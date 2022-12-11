import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import ArrowDropDown from '~/assets/icons/arrowDropdown.png';

import { styles } from './styles';

type SelectFrequencyProps = {
  habitFrequency: string | undefined;
  frequencyInput: (v: string) => void;
};

type GenericData = {
  key: string;
  value: string;
};

function SelectFrequency({
  habitFrequency,
  frequencyInput,
}: SelectFrequencyProps) {
  const [selected, setSelected] = useState(habitFrequency ?? '-');
  const data: GenericData[] = [
    { key: 'Daily', value: 'Diário' },
    { key: 'weekly', value: 'Semanal' },
    { key: 'monthly', value: 'Mensal' },
  ];

  useEffect(() => {
    if (habitFrequency !== undefined) frequencyInput(habitFrequency);
  }, [frequencyInput, habitFrequency]);

  return (
    <View style={{ marginBottom: 30 }}>
      <SelectList
        setSelected={setSelected}
        data={data ?? []}
        search={false}
        onSelect={() => {
          frequencyInput(selected);
        }}
        placeholder={selected}
        boxStyles={styles.boxStyle}
        inputStyles={styles.inputStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyle}
        arrowicon={<Image source={ArrowDropDown} style={styles.arrow} />}
      />
    </View>
  );
}

export default SelectFrequency;
