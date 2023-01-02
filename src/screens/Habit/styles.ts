import styled from 'styled-components/native';

import { THEME } from '~/utils/Theme';

import { ch, cw } from '../../utils/DimensionsStyles/index';

export const HabitPageContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND};
`;
export const ButtonBack = styled.TouchableOpacity`
  width: ${cw(40)}px;
  height: ${ch(40)}px;
  margin: ${ch(25)}px ${cw(25)}px;
`;
export const ArrowBack = styled.Image`
  width: ${cw(40)}px;
  height: ${ch(40)}px;
`;
export const MainContent = styled.View`
  width: ${cw(250)}px;
  align-self: center;
`;
export const HabitTitle = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${THEME.COLORS.TEXT};
  font-size: ${ch(THEME.FONT_SIZE.XL)}px;
`;
export const HabitInputText = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.SM}px;
  margin-top: ${ch(35)}px;
  margin-bottom: ${ch(10)}px;
  margin-left: ${cw(5)}px;
`;
export const HabitAreaText = styled.Text`
  color: ${THEME.COLORS.SECONDARY_TEXT};
  font-size: ${THEME.FONT_SIZE.SM}px;
`;
export const HabitInputContainer = styled.View`
  border-width: 1px;
  border-color: ${THEME.COLORS.SHAPE};
  border-radius: 10px;
  padding: ${ch(15)}px ${cw(20)}px;
`;
