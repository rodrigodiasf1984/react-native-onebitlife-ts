import styled from 'styled-components/native';

import { ch } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const CustomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${THEME.COLORS.BACKGROUND};
`;

export const Title = styled.Text`
  font-size: ${ch(THEME.FONT_SIZE.XL)}px;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: ${ch(20)}px;
`;
export const DescriptionCta = styled.Text`
  color: white;
  font-weight: bold;
  font-size: ${ch(THEME.FONT_SIZE.SM)}px;
  margin-top: ${ch(20)}px;
  margin-bottom: ${ch(10)}px;
`;
export const Description = styled.Text`
  color: white;
  text-align: center;
  margin-bottom: ${ch(30)}px;
`;
