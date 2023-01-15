import RobotAnimation00 from '~/assets/robot/robot-00-00.json';
import RobotAnimation2525 from '~/assets/robot/robot-25-25.json';
import RobotAnimation2550 from '~/assets/robot/robot-25-50.json';
import RobotAnimation25100 from '~/assets/robot/robot-25-100.json';
import RobotAnimation5050 from '~/assets/robot/robot-50-50.json';
import RobotAnimation5025 from '~/assets/robot/robot-50-25.json';
import RobotAnimation50100 from '~/assets/robot/robot-50-100.json';
import RobotAnimation10025 from '~/assets/robot/robot-100-25.json';
import RobotAnimation10050 from '~/assets/robot/robot-100-50.json';
import RobotAnimation100100 from '~/assets/robot/robot-100-100.json';

import EducationAnimation25 from '~/assets/education/education-25.json';
import EducationAnimation50 from '~/assets/education/education-50.json';
import EducationAnimation100 from '~/assets/education/education-100.json';

import MoneyAnimation25 from '~/assets/money/money-25.json';
import MoneyAnimation50 from '~/assets/money/money-50.json';
import MoneyAnimation100 from '~/assets/money/money-100.json';

function animationStatus(
  mindHabit,
  moneyHabit,
  bodyHabit,
  funHabit,
  setMind,
  setMoney,
  setRobot,
) {
  if (
    mindHabit === 0 ||
    moneyHabit === 0 ||
    bodyHabit === 0 ||
    funHabit === 0
  ) {
    setMind('');
    setMoney('');
    setRobot(RobotAnimation00);
  } else {
    if (mindHabit === 0.5) {
      setMind(EducationAnimation50);
    } else if (mindHabit === 0.25) {
      setMind(EducationAnimation25);
    } else {
      setMind(EducationAnimation100);
    }

    if (moneyHabit === 0.5) {
      setMoney(MoneyAnimation50);
    } else if (moneyHabit === 0.25) {
      setMoney(MoneyAnimation25);
    } else {
      setMoney(MoneyAnimation100);
    }

    if (bodyHabit === 0.25 && funHabit === undefined) {
      setRobot(RobotAnimation10025);
    } else if (bodyHabit === 0.5 && funHabit === undefined) {
      setRobot(RobotAnimation10050);
    } else if (bodyHabit === 1 && funHabit === undefined) {
      setRobot(RobotAnimation100100);
    } else if (bodyHabit === undefined && funHabit === 0.25) {
      setRobot(RobotAnimation10025);
    } else if (bodyHabit === undefined && funHabit === 0.5) {
      setRobot(RobotAnimation10050);
    } else if (bodyHabit === undefined && funHabit === 1) {
      setRobot(RobotAnimation100100);
    } else if (bodyHabit === 0.25 && funHabit === 1) {
      setRobot(RobotAnimation10025);
    } else if (bodyHabit === 0.5 && funHabit === 0.5) {
      setRobot(RobotAnimation5050);
    } else if (bodyHabit === 0.25 && funHabit === 0.5) {
      setRobot(RobotAnimation5025);
    } else if (bodyHabit === 1 && funHabit === 0.5) {
      setRobot(RobotAnimation50100);
    } else if (bodyHabit === 0.5 && funHabit === 0.25) {
      setRobot(RobotAnimation2550);
    } else if (bodyHabit === 0.25 && funHabit === 0.25) {
      setRobot(RobotAnimation2525);
    } else if (bodyHabit === 1 && funHabit === 0.25) {
      setRobot(RobotAnimation25100);
    } else if (bodyHabit === 0.5 && funHabit === 1) {
      setRobot(RobotAnimation10050);
    } else if (bodyHabit === 0.25 && funHabit === 1) {
      setRobot(RobotAnimation10025);
    } else {
      setRobot(RobotAnimation100100);
    }
  }
}

export default { animationStatus };
