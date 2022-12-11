import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

import { BorderColorProps } from '../types';

export const EditHabitButton = styled.TouchableOpacity`
  background-color: ${THEME.COLORS.BACKGROUND};
  border-radius: 5;
  width: ${cw(320)}px;
  margin: ${ch(10)}px 0;
  padding: ${ch(10)}px ${cw(20)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const EditHabitTitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export const EditHabitFrequency = styled.Text`
  color: white;
`;

export const EditHabitCheck = styled.TouchableOpacity<BorderColorProps>`
  width: ${cw(20)}px;
  height: ${ch(20)}px;
  border-width: 1px;
  border-radius: 10px;
  border-color: ${props => (props.borderColor ? props.borderColor : 'none')};
`;
