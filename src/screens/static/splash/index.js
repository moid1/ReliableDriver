import React, {useEffect} from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
import Theme from '../../../Theme/Theme';
import {useSelector} from 'react-redux';
const SplashScreen = ({navigation}) => {
  const userData = useSelector(state => state.auth.userAccessKey);
  console.log('response from user ===', userData);

  useEffect(() => {
    if (userData?.user?.id) {
      setTimeout(() => {
        navigation.replace('patienthome');
      }, 3000);
    } else {
      setTimeout(() => {
        navigation.replace('signin');
      }, 3000);
    }
  }, []);
  return (
    <View
      style={{
        backgroundColor: Theme.colors.whiteColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Theme.colors.primaryColor}
      />
      <Image
        style={{width: '80%', height: 200}}
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  miancontainer: {},
  image: {height: 200, width: 200},
});
export default SplashScreen;
