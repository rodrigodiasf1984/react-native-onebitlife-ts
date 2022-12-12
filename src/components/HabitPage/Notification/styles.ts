import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const NotificationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  max-block-size: ${ch(20)}px;
`;

type NotificationTitleProps = {
  color: string;
};
export const NotificationTitle = styled.Text<NotificationTitleProps>`
  color: ${props => props.color};
  font-size: ${THEME.FONT_SIZE.LG}px;
  margin-right: ${cw(10)}px;
`;
