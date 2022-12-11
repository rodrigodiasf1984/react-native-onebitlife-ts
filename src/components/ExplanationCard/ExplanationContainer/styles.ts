import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

import { LabelColor } from './types';

export const MainExplanationContainer = styled.View`
  flex-direction: row;
  margin-top: ${ch(30)}px;
`;

export const CustomImage = styled.Image`
  width: ${cw(40)}px;
  height: ${ch(40)}px;
  margin-right: ${cw(5)}px;
`;

export const Description = styled.Text`
  color: ${THEME.COLORS.TEXT};
  flex-shrink: 1;
`;

export const Label = styled.Text<LabelColor>`
  color: ${props => props.color};
  font-weight: bold;
  margin-right: ${cw(5)}px;
`;
