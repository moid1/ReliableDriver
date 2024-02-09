import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const otpstyles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    // paddingTop: 20,
  },
  headerContainer: {
    // paddingTop: 40,
    height: 50,
    width: '100%',
    paddingHorizontal: '2.5%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },
  shadowimg: {
    width: (width / 100) * 100,
    height: (height / 100) * 65,
    // marginTop: (height / 100) * 5,
  },
  body: {
    width: '100%',
    // paddingHorizontal: '5%',
  },
  codeFieldRoot: {marginTop: 40},
  cell: {
    width: 55,
    height: 55,
    lineHeight: 38,
    fontSize: 24,
    paddingTop: 10,
    backgroundColor: '#F5F5F5',

    color: '#979797',

    textAlign: 'center',
    fontFamily: Theme.fontFamily.medium,
    alignItems: 'center',
    borderRadius: 5,
  },
  focusCell: {
    borderColor: Theme.colors.primaryColor,
    borderWidth: 1.5,
  },
  bodytxtContainer: {
    height: '60%',
    width: '100%',
    paddingHorizontal: '5%',
    paddingTop: '10%',
  },
  txt1: {
    fontSize: 20,
    fontFamily: Theme.fontFamily.semibold,
    color: 'black',
    alignSelf: 'center',
    // fontWeight: '700',
  },
  txt2: {
    fontSize: 14,
    fontFamily: Theme.fontFamily.medium,
    color: '#A6A6A6',
    paddingTop: 10,
    width: '90%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  otpContainer: {
    width: '100%',
    // marginRight:"5%",
    // backgroundColor:"red"
    paddingTop: '10%',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    // backgroundColor:"red",
    marginTop: 40,
  },
  bottomtxt: {
    color: Theme.colors.textColor,
    fontSize: 15,
    fontFamily: Theme.fontFamily.medium,
  },
  bottombtn: {
    color: Theme.colors.primaryColor,
    textDecorationLine: 'underline',
    fontSize: 15,
    fontFamily: Theme.fontFamily.medium,
    paddingLeft: 5,
  },
});
export default otpstyles;
