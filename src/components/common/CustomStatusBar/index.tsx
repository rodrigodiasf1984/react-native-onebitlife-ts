import React from 'react';
import {
  View,
  Platform,
  StatusBar,
  StatusBarStyle,
  ColorValue,
} from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { ch } from '~/utils/DimensionsStyles';

type CustomStatusBarProps = {
  barStyle: StatusBarStyle;
  backgroundColor: ColorValue;
};

export function CustomStatusBar({
  barStyle,
  backgroundColor,
}: CustomStatusBarProps) {
  const STATUS_BAR_HEIGHT = getStatusBarHeight();

  return (
    <View
      style={{
        width: '100%',
        height: Platform.OS === 'ios' ? ch(STATUS_BAR_HEIGHT + 20) : ch(0),
        backgroundColor: `${String(backgroundColor)}`,
      }}
    >
      <StatusBar
        translucent
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  );
}
