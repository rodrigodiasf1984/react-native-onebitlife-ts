import styled from 'styled-components/native';

import { cw, ch } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const ExplanationCardContainer = styled.View`
  background-color: ${THEME.COLORS.BACKGROUND};
  width: ${cw(350)}px;
  border-radius: ${cw(25)}px;
  padding: ${ch(30)}px ${cw(30)}px;
  margin-top: ${ch(20)}px;
`;

export const CustomTitle = styled.Text`
  font-weight: bold;
  color: ${THEME.COLORS.TEXT};
  text-align: center;
  font-size: ${ch(THEME.FONT_SIZE.SM)}px;
`;
