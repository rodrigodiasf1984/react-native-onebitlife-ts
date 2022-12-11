import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LifeStatus from '~/components/common/LifeStatus';
import CreateHabit from '~/components/HomePage/CreateHabit';
import EditHabit from '~/components/HomePage/EditHabit';
import Status from '~/components/HomePage/Status';
import { THEME } from '~/utils/Theme';

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
            checkColor={THEME.COLORS.MIND}
          />
        ) : (
          <CreateHabit habitArea="Mente" borderColor={THEME.COLORS.MIND} />
        )}

        {moneyHabit ? (
          <EditHabit
            habit={moneyHabit?.habitName}
            frequency={`${moneyHabit?.habitTime} - ${moneyHabit?.habitFrequency}`}
            habitArea={moneyHabit?.habitArea}
            checkColor={THEME.COLORS.FINANCIAL}
          />
        ) : (
          <CreateHabit
            habitArea="Financeiro"
            borderColor={THEME.COLORS.FINANCIAL}
          />
        )}

        {bodyHabit ? (
          <EditHabit
            habit={bodyHabit?.habitName}
            frequency={`${bodyHabit?.habitTime} - ${bodyHabit?.habitFrequency}`}
            habitArea={bodyHabit?.habitArea}
            checkColor={THEME.COLORS.BODY}
          />
        ) : (
          <CreateHabit habitArea="Corpo" borderColor={THEME.COLORS.BODY} />
        )}

        {funHabit ? (
          <EditHabit
            habit={funHabit?.habitName}
            frequency={`${funHabit?.habitTime} - ${funHabit?.habitFrequency}`}
            habitArea={funHabit?.habitArea}
            checkColor={THEME.COLORS.FUN}
          />
        ) : (
          <CreateHabit habitArea="Humor" borderColor={THEME.COLORS.FUN} />
        )}

        <CustomTextGoBack onPress={() => navigation.goBack()}>
          Ver explicação novamente
        </CustomTextGoBack>
      </ScrollView>
    </HomeContainer>
  );
}

export default Home;
