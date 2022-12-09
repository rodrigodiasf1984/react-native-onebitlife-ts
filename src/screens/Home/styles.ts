import styled from 'styled-components/native';

import { ch } from '~/utils/DimensionsStyles';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: rgba(21, 21, 21, 0.98);
  align-items: center;
  padding-bottom: ${ch(50)}px;
`;
export const DailyChecks = styled.Text`
  color: #fff;
  font-weight: bold;
  text-align: center;
  font-size: ${ch(18)}px;
  margin-top: ${ch(40)}px;
`;
export const CustomTextGoBack = styled.Text`
  color: #fff;
  font-size: ${ch(16)}px;
  font-weight: bold;
  text-align: center;
  padding-top: ${ch(15)}px;
  padding-bottom: ${ch(25)}px;
`;
