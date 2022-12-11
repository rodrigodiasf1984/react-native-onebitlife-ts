import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const CustomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.COLORS.BACKGROUND};
`;

export const Logo = styled.Image`
  width: ${cw(300)}px;
  height: ${ch(60)}px;
  margin-bottom: ${ch(20)}px;
`;

export const Description = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${ch(THEME.FONT_SIZE.LG)}px;
  text-align: center;
  margin: 0 ${ch(60)}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;
