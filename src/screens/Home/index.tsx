import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LifeStatus from '~/components/common/LifeStatus';
import CreateHabit from '~/components/Home/CreateHabit';
import EditHabit from '~/components/Home/EditHabit';
import Status from '~/components/Home/Status';

import { CustomTextGoBack, DailyChecks, HomeContainer } from './styles';

type HabitProps = {
  habitName: string;
  habitTime: string;
  habitFrequency: string;
  habitArea: string;
};

function Home() {
  const [mindHabit, setMindHabit] = useState<HabitProps>();
  const [moneyHabit, setMoneyHabit] = useState<HabitProps>();
  const [bodyHabit, setBodyHabit] = useState<HabitProps>();
  const [funHabit, setFunHabit] = useState<HabitProps>();

  const navigation = useNavigation();

  return (
    <HomeContainer>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View>
          <DailyChecks> ❤️ 20 - / 80 checks ✔️</DailyChecks>
        </View>
        <LifeStatus />
        <Status />

        {mindHabit ? (
          <EditHabit
            habit={mindHabit?.habitName}
            frequency={`${mindHabit?.habitTime} - ${mindHabit?.habitFrequency}`}
            habitArea={mindHabit?.habitArea}
            checkColor="#90B7F3"
          />
        ) : (
          <CreateHabit habitArea="Mente" borderColor="#90B7F3" />
        )}

        {moneyHabit ? (
          <EditHabit
            habit={moneyHabit?.habitName}
            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
            habitArea={moneyHabit?.habitArea}
            checkColor="#85BB65"
          />
        ) : (
          <CreateHabit habitArea="Financeiro" borderColor="#85BB65" />
        )}

        {bodyHabit ? (
          <EditHabit
            habit={bodyHabit?.habitName}
            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
            habitArea={bodyHabit?.habitArea}
            checkColor="#FF0044"
          />
        ) : (
          <CreateHabit habitArea="Corpo" borderColor="#FF0044" />
        )}

        {funHabit ? (
          <EditHabit
            habit={funHabit?.habitName}
            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
            habitArea={funHabit?.habitArea}
            checkColor="#FE7F23"
          />
        ) : (
          <CreateHabit habitArea="Humor" borderColor="#FE7F23" />
        )}

        <CustomTextGoBack onPress={() => navigation.goBack()}>
          Ver explicação novamente
        </CustomTextGoBack>
      </ScrollView>
    </HomeContainer>
  );
}

export default Home;
