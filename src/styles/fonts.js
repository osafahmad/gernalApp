import metrics from './metrics';
import colors from './colors';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from "./responsive"

const type = {
  base: 'HelveticaNeue',
  bold: 'HelveticaNeue-Bold',
  emphasis: 'HelveticaNeue-Italic',
};

const size = {
  extraLarge: responsiveFontSize(4.5),
  strong: responsiveFontSize(3),
  large: responsiveFontSize(4),
  heading: responsiveFontSize(2.2),
  regular: responsiveFontSize(2),
  medium: responsiveFontSize(1.5),
  small: responsiveFontSize(0.5),
  tiny: responsiveFontSize(0.2),
};

const fontWeight = {
  normal: 'normal',
  bold: 'bold',
  f100: '100',
  f200: '200',
};

const style = {

  // styles for the text
  // h1: {
  //   fontFamily: type.base,
  //   fontSize: size.h1,
  // },
  // h2: {
  //   fontSize: size.h2,
  //   fontFamily: type.base,
  // }
};

export default {
  type,
  size,
  style,
  fontWeight,
};
