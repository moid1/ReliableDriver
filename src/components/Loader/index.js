import React from 'react';
import {ActivityIndicator, Image, StyleSheet, Text, View} from 'react-native';
import Theme from '../../Theme/Theme';
import {BarIndicator,DotIndicator,PacmanIndicator,BallIndicator,PulseIndicator,UIActivityIndicato,WaveIndicator,SkypeIndicator} from 'react-native-indicators';
const Loader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: '#70707070',
        }}
      />
      <View
        style={{
          height: 100,
          width: 120,
          backgroundColor: 'white',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* <SkypeIndicator color={'red'} size={40} /> */}
        {/* <WaveIndicator color={'red'} size={40} /> */}
        {/* <UIActivityIndicator color={'red'} size={40} /> */}
        {/* <PulseIndicator color={'red'} size={40} /> */}
        {/* <PacmanIndicator color={'red'} size={40} /> */}
        {/* <DotIndicator color={'red'} size={10} /> */}
        <BarIndicator color={Theme.colors.primaryColor} size={30} />
        {/* <BallIndicator color={'red'} size={30} /> */}

        <Text
          style={{
            color: Theme.colors.primaryColor,
            paddingBottom: 15,
            fontSize: 13,
            fontFamily: Theme.fontFamily.bold,
          }}>
          Please wait...
        </Text>
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 222,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    // backgroundColor:'#70707070',
    opacity: 1,
  },
  image: {
    width: 68,
    height: 68,
    resizeMode: 'contain',
    marginTop: -50,
  },
  lottie: {
    width: 100,
    height: 100,
  },
});
