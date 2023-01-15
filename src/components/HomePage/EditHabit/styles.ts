import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

import { BorderColorProps } from '../types';

export const EditHabitButton = styled.TouchableOpacity`
  background-color: ${THEME.COLORS.SHAPE_2};
  border-radius: 5px;
  width: 84%;
  margin: ${ch(10)}px 0;
  padding: ${ch(10)}px ${cw(16)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const EditHabitTitle = styled.Text`
  color: white;
  font-weight: bold;
  text-align: start;
`;

export const EditHabitFrequency = styled.Text`
  color: white;
  margin-left: ${cw(4)}px;
`;

export const EditHabitCheck = styled.TouchableOpacity<BorderColorProps>`
  width: ${cw(20)}px;
  height: ${ch(20)}px;
  border-width: 1px;
  border-radius: ${cw(99)}px;
  border-color: ${props => (props.borderColor ? props.borderColor : 'none')};
  align-items: center;
  justify-content: center;
`;

export const EditHabitContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`;

export const CheckedImage = styled.Image`
  width: 20px;
  height: 20px;
`;
