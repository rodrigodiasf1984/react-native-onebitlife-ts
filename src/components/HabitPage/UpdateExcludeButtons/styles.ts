import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const ExcludeButtonsContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${ch(20)}px;
`;

type UpdateButtonProps = {
  borderColor?: string;
};
export const UpdateButton = styled.TouchableOpacity<UpdateButtonProps>`
  border-width: 1px;
  border-color: ${({ borderColor }) => borderColor || THEME.COLORS.SHAPE};
  width: ${cw(150)}px;
  height: ${ch(50)}px;
  margin-right: ${cw(10)}px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const UpdateButtonText = styled.Text`
  color: ${THEME.COLORS.SHAPE};
  font-weight: bold;
  font-size: ${ch(18)}px;
`;

export const TrashButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${THEME.COLORS.INACTIVE};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: ${cw(90)}px;
`;

export const TrashIcon = styled.Image`
  width: 25px;
  height: 25px;
`;
