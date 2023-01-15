/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-duplicates */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { differenceInDays, format } from 'date-fns';

import DefaultButton from '~/components/common/DefaultButton';
import LifeStatus from '~/components/common/LifeStatus';
import CreateHabit from '~/components/HomePage/CreateHabit';
import EditHabit from '~/components/HomePage/EditHabit';
import Status from '~/components/HomePage/Status';
import { HabitProps } from '~/components/HomePage/types';
import db from '~/database';
import ChangeNavigationService from '~/services/changeNavigationService.js';
import CheckService from '~/services/checkService.js';
import HabitsService from '~/services/habitsService.js';
import { THEME } from '~/utils/Theme';

import {
  CustomTextGoBack,
  DailyChecks,
  GameOverTitle,
  HomeContainer,
} from './styles';

function Home() {
  const [mindHabit, setMindHabit] = useState<HabitProps | null>();
  const [moneyHabit, setMoneyHabit] = useState<HabitProps | null>();
  const [bodyHabit, setBodyHabit] = useState<HabitProps | null>();
  const [funHabit, setFunHabit] = useState<HabitProps | null>();
  const [robotDaysLife, setRobotDaysLife] = useState('');
  const [checks, setChecks] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const navigation = useNavigation<NavigationProp<any, any>>();
  const route = useRoute();

  let excludeArea: string | undefined;
  if (route?.params as any) {
    const params = route.params as any;
    excludeArea = params.exclueArea;
  }

  const handleGameOver = () => {
    db.transaction(tx => {
      tx.executeSql('DROP TABLE habits;');
      tx.executeSql('DROP TABLE change_navigation;');
    });
    navigation.navigate('Start');
  };

  useEffect(() => {
    HabitsService.findByArea('Mente').then(mind => {
      setMindHabit(mind[0]);
    });
    HabitsService.findByArea('Financeiro').then(money => {
      setMoneyHabit(money[0]);
    });
    HabitsService.findByArea('Corpo').then(body => {
      setBodyHabit(body[0]);
    });
    HabitsService.findByArea('Humor').then(fun => {
      setFunHabit(fun[0]);
    });

    if (excludeArea) {
      if (excludeArea === 'Mente') {
        setMindHabit(null);
      }
      if (excludeArea === 'Financeiro') {
        setMoneyHabit(null);
      }
      if (excludeArea === 'Corpo') {
        setBodyHabit(null);
      }
      if (excludeArea === 'Humor') {
        setFunHabit(null);
      }
    }

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
  }, [excludeArea, route.params]);

  useEffect(() => {
    CheckService.removeCheck(mindHabit, moneyHabit, bodyHabit, funHabit);
    CheckService.checkStatus(mindHabit, moneyHabit, bodyHabit, funHabit);
    const mindChecks = mindHabit ? mindHabit?.habitChecks : 0;
    const moneyChecks = moneyHabit ? moneyHabit?.habitChecks : 0;
    const bodyChecks = bodyHabit ? bodyHabit?.habitChecks : 0;
    const funChecks = funHabit ? funHabit?.habitChecks : 0;
    setChecks(mindChecks + moneyChecks + bodyChecks + funChecks);
    console.log(
      '✅ ~  progressBar ',
      mindHabit?.progressBar,
      moneyHabit?.progressBar,
      bodyHabit?.progressBar,
      funHabit?.progressBar,
    );
    if (
      !mindHabit?.progressBar ||
      mindHabit?.progressBar === 0 ||
      !moneyHabit?.progressBar ||
      moneyHabit?.progressBar === 0 ||
      !bodyHabit?.progressBar ||
      bodyHabit?.progressBar === 0 ||
      !funHabit?.progressBar ||
      funHabit?.progressBar === 0
    ) {
      setGameOver(true);
    }
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);

  return (
    <HomeContainer>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <View>
          {!gameOver ? (
            <DailyChecks>
              ❤️{robotDaysLife} {robotDaysLife === '01' ? 'dia' : 'dias'} ✔️{' '}
              {checks}
              checks
            </DailyChecks>
          ) : (
            <GameOverTitle>Game Over</GameOverTitle>
          )}
        </View>
        <LifeStatus
          mindHabit={mindHabit?.progressBar ?? 0}
          bodyHabit={bodyHabit?.progressBar ?? 0}
          funHabit={funHabit?.progressBar ?? 0}
          moneyHabit={moneyHabit?.progressBar ?? 0}
        />
        <Status
          mindHabit={mindHabit?.progressBar ?? 0}
          bodyHabit={bodyHabit?.progressBar ?? 0}
          funHabit={funHabit?.progressBar ?? 0}
          moneyHabit={moneyHabit?.progressBar ?? 0}
        />
        {!gameOver ? (
          <>
            {mindHabit ? (
              <EditHabit habit={mindHabit} checkColor={THEME.COLORS.MIND} />
            ) : (
              <CreateHabit habitArea="Mente" borderColor={THEME.COLORS.MIND} />
            )}
            {moneyHabit ? (
              <EditHabit
                habit={moneyHabit}
                checkColor={THEME.COLORS.FINANCIAL}
              />
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
            <CustomTextGoBack
              onPress={() => navigation.navigate('AppExplanation')}
            >
              Ver explicação novamente
            </CustomTextGoBack>
          </>
        ) : (
          <View style={{ marginVertical: 40 }}>
            <DefaultButton
              buttonText="Resetar o Game"
              onPress={() => handleGameOver()}
              width={250}
              height={50}
            />
          </View>
        )}
      </ScrollView>
    </HomeContainer>
  );
}

export default Home;
