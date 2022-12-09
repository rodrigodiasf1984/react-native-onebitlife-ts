import React from 'react';

import { ButtonCreateHabit, CreateHabitButtonText } from './styles';

type CreateHabitProps = {
  habitArea: any;
  borderColor: string;
};

function CreateHabit({ habitArea, borderColor }: CreateHabitProps) {
  const handleCreate = () => {
    console.log('clicou no botão', habitArea);
  };

  return (
    <ButtonCreateHabit
      activeOpacity={0.8}
      onPress={handleCreate}
      borderColor={borderColor}
    >
      <CreateHabitButtonText>
        Adicionar meta {habitArea === 'Mente' ? 'da' : 'do'} {habitArea}
      </CreateHabitButtonText>
    </ButtonCreateHabit>
  );
}

export default CreateHabit;
