import React from 'react';

import { StatusBar } from 'expo-status-bar';

import Routes from '~/routes/index.routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar style="auto" />
    </>
  );
}