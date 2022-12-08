import React from 'react';

import { CustomStatusBar } from '~/components/common/CustomStatusBar';
import Routes from '~/routes/index.routes';

export default function App() {
  return (
    <>
      <CustomStatusBar
        backgroundColor=" rgba(21, 21, 21, 0.98)"
        barStyle="light-content"
      />
      <Routes />
    </>
  );
}
