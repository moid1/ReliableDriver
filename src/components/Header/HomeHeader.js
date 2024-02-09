import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const HomeHeader = props => {
  const {headerName} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headercontainers}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontFamily: Theme.fontFamily.bold,
          alignSelf: 'center',
          paddingLeft: 20,
        }}>
        {headerName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainers: {
    width: '100%',
    backgroundColor: Theme.colors.primaryColor,
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    paddingHorizontal: '2.5%',
  },
});
export default HomeHeader;
