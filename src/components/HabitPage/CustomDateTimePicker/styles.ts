import { StyleSheet } from 'react-native';

import styled from 'styled-components/native';

import { ch, cw } from '~/utils/DimensionsStyles';
import { THEME } from '~/utils/Theme';

export const Button = styled.TouchableOpacity`
  border-width: 1px;
  border-color: ${THEME.COLORS.SHAPE};
  padding: ${ch(15)}px ${cw(20)}px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: ${ch(15)}px;
`;
export const ButtonText = styled.Text`
  color: ${THEME.COLORS.TEXT};
  font-size: ${THEME.FONT_SIZE.MD}px;
  font-weight: bold;
`;

export const TextContainer = styled.View`
  margin: ${ch(20)}px 0;
`;

export const NotificationText = styled.Text`
  font-size: ${THEME.FONT_SIZE.MD}px;
  color: ${THEME.COLORS.TEXT};
`;

export const Arrow = styled.Image`
  width: ${cw(20)}px;
  height: ${ch(20)}px;
`;

export const otherStyles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputStyle: {
    color: 'white',
  },
  dropdownStyle: {
    borderWidth: 0,
  },
  dropdownItemStyle: {
    borderWidth: 1,
    borderColor: '#BBBB',
    borderRadius: 10,
    marginBottom: 15,
  },
  dropdownTextStyle: {
    color: '#BBBBBB',
  },
  pickerContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  // Style for iOS ONLY...
  datePicker: {
    shadowColor: '#fff',
    shadowRadius: 10,
    shadowOffset: { height: 1, width: 1 },
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
