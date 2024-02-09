import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    // paddingTop: 20,
  },
  headerContainer: {
    height: 70,
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

  bodytxtContainer: {
    height: '60%',
    width: '100%',
    // backgroundColor: 'green',
    paddingHorizontal: '5%',
    paddingTop: '5%',
  },
  txt1: {
    fontSize: 20,
    fontFamily: Theme.fontFamily.medium,
    color: 'black',
    alignSelf: 'center',
    // fontWeight: '700',
  },
  txt2: {
    fontSize: 14,
    fontFamily: Theme.fontFamily.medium,
    color: '#A6A6A6',
    paddingTop: 5,
    marginTop: 15,
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    // marginRight:"5%",
    // backgroundColor:"red"
    paddingTop: '10%',
  },
});
export default styles;
