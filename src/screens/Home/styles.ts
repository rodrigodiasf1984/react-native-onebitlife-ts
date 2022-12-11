import styled from 'styled-components/native';

import { ch } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${THEME.COLORS.BACKGROUND};
  align-items: center;
  padding-bottom: ${ch(50)}px;
`;
export const DailyChecks = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-weight: bold;
  text-align: center;
  font-size: ${ch(THEME.FONT_SIZE.MD)}px;
  margin-top: ${ch(40)}px;
`;
export const CustomTextGoBack = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${ch(THEME.FONT_SIZE.SM)}px;
  font-weight: bold;
  text-align: center;
  padding-top: ${ch(15)}px;
  padding-bottom: ${ch(25)}px;
`;
