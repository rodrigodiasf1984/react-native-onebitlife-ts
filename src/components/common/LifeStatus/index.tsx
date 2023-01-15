import React, { useEffect, useRef, useState } from 'react';

import Education from '~/assets/education/education-100.json';
import Money from '~/assets/money/money-100.json';
import Robot from '~/assets/robot/robot-100-100.json';
import AnimationService from '~/services/AnimationService.js';

import {
  LifeStatusContainer,
  CustomLottieView,
  CustomLottieViewRobot,
} from './styles';

type LifeStatusProps = {
  mindHabit: number;
  moneyHabit: number;
  bodyHabit: number;
  funHabit: number;
};

export default function LifeStatus({
  mindHabit,
  bodyHabit,
  funHabit,
  moneyHabit,
}: LifeStatusProps) {
  const EducationRef = useRef(null);
  const MoneyRef = useRef(null);
  const RobotRef = useRef(null);

  const [mind, setMind] = useState('');
  const [money, setMoney] = useState('');
  const [robot, setRobot] = useState('');

  useEffect(() => {
    AnimationService.animationStatus(
      mindHabit,
      moneyHabit,
      bodyHabit,
      funHabit,
      setMind,
      setMoney,
      setRobot,
    );
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);

  return (
    <LifeStatusContainer>
      <CustomLottieView source={mind} autoPlay loop ref={EducationRef} />
      <CustomLottieViewRobot source={robot} autoPlay loop ref={RobotRef} />
      <CustomLottieView source={money} autoPlay loop ref={MoneyRef} />
    </LifeStatusContainer>
  );
}
