import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { CustomButtonText, CustomTouchable } from './styles';

interface DefaultButtonProps extends TouchableOpacityProps {
  buttonText: string;
  width: number;
  height: number;
}

export default function DefaultButton({
  buttonText,
  width,
  height,
  ...rest
}: DefaultButtonProps) {
  return (
    <CustomTouchable
      width={width}
      height={height}
      activeOpacity={0.7}
      {...rest}
    >
      <CustomButtonText>{buttonText}</CustomButtonText>
    </CustomTouchable>
  );
}
