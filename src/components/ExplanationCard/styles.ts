import styled from 'styled-components/native';

import { cw, ch } from '~/utils/DimensionsStyles';

export const ExplanationCardContainer = styled.View`
  background-color: #111111;
  width: ${cw(350)}px;
  border-radius: ${cw(25)}px;
  padding: ${ch(30)}px ${cw(30)}px;
  margin-top: ${ch(20)}px;
`;

export const CustomTitle = styled.Text`
  font-weight: bold;
  color: #fff;
  text-align: center;
  font-size: ${ch(16)}px;
`;
