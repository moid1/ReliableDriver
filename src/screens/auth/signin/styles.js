import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Theme from '../../../Theme/Theme';
import {moderateScale} from '../../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    height: (height / 100) * 100,
    width: (width / 100) * 100,
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
    // paddingTop: 20,
  },

  body: {
    width: '100%',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  upparcontainer: {
    // backgroundColor: Theme.colors.whiteColor,
    height: '90%',
    width: '95%',
    marginHorizontal: '2.5%',
    marginBottom: '5%',
    borderRadius: 10,
    marginTop: '20%',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  transparacy: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.9,
    position: 'absolute',
    borderRadius: 10,
  },
  bgimg: {width: (width / 100) * 100, height: (height / 100) * 100},
  loginContainer: {
    height: 70,
    width: '100%',
    paddingHorizontal: '5%',
    paddingLeft: '10%',
    marginBottom: 10,
    marginTop: 30,
  },
  logintxt: {
    color: 'black',
    fontSize: 24,
    fontFamily: Theme.fontFamily.bold,
    marginLeft: '5%',
  },
  providertxt: {
    color: Theme.colors.grayColor,
    fontSize: 15,
    fontFamily: Theme.fontFamily.semibold,
    paddingTop: 5,
  },
  forgettextContainer: {
    width: '100%',
  top:-10,
    alignItems: 'center',
    flexDirection: 'row',
  
    justifyContent: 'flex-end',
  },
  forgettxt: {
    color: Theme.colors.textColor,
    fontSize: 15,
    fontFamily: Theme.fontFamily.semibold,
  },
  resettxt: {
    color:'rgba(0, 23, 31, 1)',
    paddingLeft: 5,
    fontSize: 15,
    fontFamily: Theme.fontFamily.semibold,
    textDecorationLine: 'underline',
  },
  btn: {width: '100%', marginTop: 20},
  accountcontainer: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    // backgroundColor:"red"
  },
  acounttxt: {
    color: Theme.colors.textColor,
    fontSize: 15,
    fontFamily: Theme.fontFamily.semibold,
  },
  registertxt: {
    color: Theme.colors.primaryColor,
    paddingLeft: 5,
    fontFamily: Theme.fontFamily.semibold,
  },
  socialContainer: {
    height: 40,
    width: '90%',
    marginHorizontal: '5%',
    borderRadius: 30,
    borderColor: Theme.colors.primaryColor,
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '8%',
    justifyContent: 'space-between',
  },
  socialimg: {height: '50%', width: 60, resizeMode: 'contain'},
  socialtxt: {
    color: Theme.colors.primaryColor,
    fontSize: 15,
    fontFamily: Theme.fontFamily.semibold,
  },
});
export default styles;
