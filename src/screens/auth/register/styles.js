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
    paddingTop: 20,
  },
  headerContainer: {
    paddingTop: 20,
    height: 60,
    width: '100%',
    paddingHorizontal: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  shadow: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: 0.9,
    position: 'absolute',
    borderRadius: 10,
  },
  shadowimg: {
    width: (width / 100) * 100,
    height: (height / 100) * 100,
    marginTop: (height / 100) * 5,
  },
  upparContainer: {
    height: '95%',
    width: '92%',
    marginHorizontal: '4%',
    marginBottom: '5%',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  headerLogo: {
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  header: {
    height: 70,
    width: '100%',
    paddingHorizontal: '5%',
    paddingLeft: '10%',
    marginBottom: 10,
  },
  headertxt: {
    color: Theme.colors.primaryColor,
    fontSize: 18,
    fontFamily: Theme.fontFamily.semibold,
  },
  headertext2: {
    color: Theme.colors.grayColor,
    fontSize: 14,
    fontFamily: Theme.fontFamily.medium,
  },
  body: {
    width: '100%',
    paddingHorizontal: '5%',
  },
  btn: {},
  bottomContainer: {
    width: '100%',
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    // backgroundColor:"red"
  },
  bottomtxt: {
    color: 'black',
    fontSize: 14,
    fontFamily: Theme.fontFamily.semibold,
    // textDecorationLine: 'underline',
  },
  bottomtxt2: {
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
    justifyContent: 'center',
  },
});
export default styles;
