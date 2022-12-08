import React, { useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LifeStatus from '~/components/common/LifeStatus';
import Status from '~/components/Home/Status';

import { CustomTextGoBack, DailyChecks, HomeContainer } from './styles';

function Home() {
  const navigation = useNavigation();
  return (
    <HomeContainer>
      <View>
        <DailyChecks> ❤️ 20 - / 80 checks ✔️</DailyChecks>
      </View>
      <LifeStatus />
      <Status />
      <CustomTextGoBack onPress={() => navigation.goBack()}>
        Ver explicação novamente
      </CustomTextGoBack>
    </HomeContainer>
  );
}

export default Home;
