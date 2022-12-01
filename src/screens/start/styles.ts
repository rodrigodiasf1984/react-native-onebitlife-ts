import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';

export const CustomSafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: 'center';
  justify-content: 'center';
  background-color: rgba(21, 21, 21, 0.98);
`;

export const Logo = styled.Image`
  width: ${cw(300)}px;
  height: ${ch(60)}px;
  margin-top: ${ch(60)}px;
  margin-bottom: ${ch(20)}px;
`;

export const Description = styled.Text`
  color: #ffffff;
  font-size: ${ch(20)}px;
  text-align: center;
  margin: 0 ${ch(60)}px;
`;

export const LogoContainer = styled.View`
  align-items: center;
`;
