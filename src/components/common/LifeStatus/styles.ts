import LottieView from 'lottie-react-native';
import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';

export const LifeStatusContainer = styled.View`
  flex-direction: row;
  height: ${ch(300)}px;
  width: ${cw(300)}px;
  justify-content: center;
  align-self: center;
`;

export const CustomLottieView = styled(LottieView)`
  width: ${cw(80)}px;
  height: ${cw(80)}px;
  margin-top: ${ch(50)}px;
`;
export const CustomLottieViewRobot = styled(LottieView)`
  width: ${cw(150)}px;
  height: ${cw(150)}px;
  margin-top: ${ch(30)}px;
`;
