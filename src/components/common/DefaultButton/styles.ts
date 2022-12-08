import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';

type CustomTouchableProps = {
  width: number;
  height: number;
};
export const CustomTouchable = styled.TouchableOpacity<CustomTouchableProps>`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: #ffffff;
  border-radius: 10px;
  margin-top: ${ch(20)}px;
  width: ${props => cw(props.width)}px;
  height: ${props => ch(props.height)}px;
`;

export const CustomButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: ${ch(20)}px;
`;
