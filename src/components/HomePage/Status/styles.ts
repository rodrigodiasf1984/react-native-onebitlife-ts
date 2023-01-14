import { ProgressBar } from 'react-native-paper';

import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const StatusContainer = styled.View`
  padding: ${ch(20)}px ${cw(20)}px;
  background-color: ${THEME.COLORS.SHAPE_2};
  border-radius: ${cw(10)}px;
  margin: ${ch(10)}px ${cw(20)}px;
`;

export const ProgressBarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${ch(6)}px 0;
`;

export const CustomProgressBar = styled(ProgressBar)`
  border-radius: ${cw(10)}px;
  width: ${cw(250)}px;
  height: ${ch(8)}px;
`;

export const CustomImage = styled.Image`
  width: ${cw(25)}px;
  height: ${ch(25)}px;
  margin-right: ${cw(5)}px;
`;
