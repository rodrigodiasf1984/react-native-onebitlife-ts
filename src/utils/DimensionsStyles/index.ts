import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const layoutScreenWidth = 375;
const layoutScreenHeight = 812;

export const cw = (pixels: number) => {
  const proportion = (pixels / layoutScreenWidth) * 100;
  return wp(proportion);
};

export const ch = (pixels: number) => {
  const proportion = (pixels / layoutScreenHeight) * 100;
  return hp(proportion);
};
