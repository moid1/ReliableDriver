import {moderateScale} from './Dimensions';
import {Platform} from 'react-native';

export default Theme = {
  colors: {
    primaryColor: '#000080',
    secondaryColor: '#53ad47',
    lightgreen: '#009F93',
    green: '#0e7f40',
    yellow: '#F6CD7D',
    grey: '#B2B2B2',
    lightGrey: '#ebeded',
    whiteColor: '#ffff',
    darkgrey:"#979797",
    blueColor:"#4079AD",
    textColor:"#010101"
  },
  fontFamily: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    urdu: 'Jameel Noori Nastaleeq Kasheeda',
    semibold: 'Poppins-SemiBold',
  },
  fontSizes: {
    xxbig: moderateScale(34),
    xbig: moderateScale(26),
    big: moderateScale(22),
    xxmedium: moderateScale(19),
    xmedium: moderateScale(17),
    medium: moderateScale(15),
    small: moderateScale(13),
    verySmall: moderateScale(11),
    tinySmall: moderateScale(9),
  },
};
