import React from 'react';

import { CustomStatusBar } from '~/components/common/CustomStatusBar';
import Routes from '~/routes';
import { THEME } from '~/utils/Theme';

export default function App() {
  return (
    <>
      <CustomStatusBar
        backgroundColor={THEME.COLORS.BACKGROUND}
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
