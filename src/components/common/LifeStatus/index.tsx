import React, { useRef } from 'react';

import Education from '~/assets/education/education-100.json';
import Money from '~/assets/money/money-100.json';
import Robot from '~/assets/robot/robot-100-100.json';

import {
  LifeStatusContainer,
  CustomLottieView,
  CustomLottieViewRobot,
} from './styles';

export default function LifeStatus() {
  const EducationRef = useRef(null);
  const MoneyRef = useRef(null);
  const RobotRef = useRef(null);
  return (
    <LifeStatusContainer>
      <CustomLottieView source={Education} autoPlay loop ref={EducationRef} />
      <CustomLottieViewRobot source={Robot} autoPlay loop ref={RobotRef} />
      <CustomLottieView source={Money} autoPlay loop ref={MoneyRef} />
    </LifeStatusContainer>
  );
}
