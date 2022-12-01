import React, { useRef } from 'react';

import Education from '~/assets/education/education-100.json';
import Money from '~/assets/money/money-100.json';
import Robot from '~/assets/robot/robot-100-100.json';

import { Container, CustomLottieView, CustomLottieViewRobot } from './styles';

function LifeStatus() {
  const EducationRef = useRef(null);
  const MoneyRef = useRef(null);
  const RobotRef = useRef(null);
  return (
    <Container>
      <CustomLottieView source={Education} autoPlay loop ref={EducationRef} />
      <CustomLottieViewRobot source={Robot} autoPlay loop ref={RobotRef} />
      <CustomLottieView source={Money} autoPlay loop ref={MoneyRef} />
    </Container>
  );
}

export default LifeStatus;
