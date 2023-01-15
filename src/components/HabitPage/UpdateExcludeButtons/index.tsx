/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Alert } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import TrashImage from '~/assets/icons/trash.png';
import HabitsService from '~/services/habitsService.js';
import { THEME } from '~/utils/Theme';

import {
  ExcludeButtonsContainer,
  UpdateButton,
  UpdateButtonText,
  TrashIcon,
} from './styles';

function UpdateExcludeButtons({ habitInput, handleUpdate, habitArea }) {
  const navigation = useNavigation<NavigationProp<any, any>>();

  function handleDeleteHabit() {
    HabitsService.deleteByName(habitArea)
      .then(() => {
        Alert.alert('Exclusão feita com sucesso');
        navigation.navigate('Home', {
          excludeArea: `${habitArea}`,
        });
      })

      .catch(err => console.log(err));
  }
  return (
    <ExcludeButtonsContainer>
      <UpdateButton
        activeOpacity={0.8}
        onPress={() =>
          Alert.alert(
            'Ao prosseguir você vai atualizar o hábito, tem certeza?',
            'Ao fazer isso você vai pode mudar o hábito, frequência e notificação.',
            [
              {
                text: 'Cancelar',
              },
              {
                text: 'Atualizar',
                onPress: handleUpdate,
              },
            ],
          )
        }
      >
        <UpdateButtonText>Atualizar</UpdateButtonText>
      </UpdateButton>
      <UpdateButton
        borderColor={THEME.COLORS.INACTIVE}
        activeOpacity={0.8}
        onPress={() =>
          Alert.alert(
            'Você tem certeza que quer excluir o hábito?',
            'Ao fazer isso você perderá todo o progresso ou falha do hábito.',
            [
              {
                text: 'Cancelar',
              },
              {
                text: 'Excluir',
                onPress: handleDeleteHabit,
              },
            ],
          )
        }
      >
        <TrashIcon source={TrashImage} />
      </UpdateButton>
    </ExcludeButtonsContainer>
  );
}

export default UpdateExcludeButtons;
