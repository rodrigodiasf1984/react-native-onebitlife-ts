/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Alert } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';

import TrashIcon from '~/assets/icons/trash.png';

import {
  ExcludeButtonsContainer,
  UpdateButton,
  UpdateButtonText,
} from './styles';

function UpdateExcludeButtons({ habitInput, handleUpdate, habitArea }) {
  const navigation = useNavigation<NavigationProp<any, any>>();

  const handleDeleteHabit = () => {
    navigation.navigate('Home', {
      exludedArea: `${habitArea}`,
    });
  };
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
        <TrashIcon source={TrashIcon} />
      </UpdateButton>
    </ExcludeButtonsContainer>
  );
}

export default UpdateExcludeButtons;
