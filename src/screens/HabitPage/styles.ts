import styled from 'styled-components/native';

import { ch, cw } from '../../utils/DimensionsStyles/index';

export const HabitPageContainer = styled.View`
  flex: 1;
  background-color: rgba(21, 21, 21, 0.98);
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
