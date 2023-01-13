/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { NavigationProp, useNavigation } from '@react-navigation/native';
import { differenceInDays, format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

import LifeStatus from '~/components/common/LifeStatus';
import CreateHabit from '~/components/HomePage/CreateHabit';
import EditHabit from '~/components/HomePage/EditHabit';
import Status from '~/components/HomePage/Status';
import { HabitProps } from '~/components/HomePage/types';
import ChangeNavigationService from '~/services/changeNavigationService.js';
import { THEME } from '~/utils/Theme';

import { CustomTextGoBack, DailyChecks, HomeContainer } from './styles';

function Home(route: { params: any }) {
  const [mindHabit, setMindHabit] = useState<HabitProps>();
  const [moneyHabit, setMoneyHabit] = useState<HabitProps>();
  const [bodyHabit, setBodyHabit] = useState<HabitProps>();
  const [funHabit, setFunHabit] = useState<HabitProps>();
  const [robotDaysLife, setRobotDaysLife] = useState('');

  const navigation = useNavigation<NavigationProp<any, any>>();
  const { params } = route;

  useEffect(() => {
    ChangeNavigationService.checkShowHome(1)
      .then(showHome => {
        if (!showHome.appStartData) {
          return;
        }
        const today = format(new Date(), 'yyyy-MM-dd');
        const diff =
          differenceInDays(new Date(today), new Date(showHome.appStartData)) +
          1;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
        setRobotDaysLife(days.toString());
      })
      .catch(err => console.log(err));
  }, [params]);

  return (
    <HomeContainer>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View>
          <DailyChecks>
            ❤️{robotDaysLife} {robotDaysLife === '01' ? 'dia' : 'dias'} ✔️ 80
            checks
          </DailyChecks>
        </View>
        <LifeStatus />
        <Status />

        {mindHabit ? (
          <EditHabit habit={mindHabit} checkColor={THEME.COLORS.MIND} />
        ) : (
          <CreateHabit habitArea="Mente" borderColor={THEME.COLORS.MIND} />
        )}

        {moneyHabit ? (
          <EditHabit habit={moneyHabit} checkColor={THEME.COLORS.FINANCIAL} />
        ) : (
          <CreateHabit
            habitArea="Financeiro"
            borderColor={THEME.COLORS.FINANCIAL}
          />
        )}

        {bodyHabit ? (
          <EditHabit habit={bodyHabit} checkColor={THEME.COLORS.BODY} />
        ) : (
          <CreateHabit habitArea="Corpo" borderColor={THEME.COLORS.BODY} />
        )}

        {funHabit ? (
          <EditHabit habit={funHabit} checkColor={THEME.COLORS.FUN} />
        ) : (
          <CreateHabit habitArea="Humor" borderColor={THEME.COLORS.FUN} />
        )}

        <CustomTextGoBack onPress={() => navigation.navigate('AppExplanation')}>
          Ver explicação novamente
        </CustomTextGoBack>
      </ScrollView>
    </HomeContainer>
  );
}

export default Home;
