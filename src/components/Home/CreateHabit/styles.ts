import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';

import { BorderColorProps } from '../types';

export const ButtonCreateHabit = styled.TouchableOpacity<BorderColorProps>`
  width: ${cw(315)}px;
  margin: ${ch(10)}px 0;
  padding: ${ch(10)}px ${cw(20)}px;
  border-width: 2px;
  border-style: dotted;
  border-color: ${props => (props.borderColor ? props.borderColor : 'white')};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const CreateHabitButtonText = styled.Text`
  color: white;
  font-size: ${ch(16)}px;
  font-weight: bold;
`;
