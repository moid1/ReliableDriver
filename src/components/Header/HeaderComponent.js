import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

import {useNavigation} from '@react-navigation/native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';

const Header = props => {
  const {headerName, onPress, iconColor, leftIcon} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.headercontainers}>
      {leftIcon ? (
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 20,
            backgroundColor:Theme.colors.whiteColor
          }}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Theme.colors.primaryColor}
            size={20}
          />
        </TouchableOpacity>
      ) : (
        <Icon
          name="leftcircleo"
          type="antdesign"
          color={'transparent'}
          size={34}
        />
      )}
      <Text
        style={{
          color: 'white',
          fontSize: 18,
         fontFamily:Theme.fontFamily.semibold,
          alignSelf: 'center',
          paddingLeft:20,

        }}>
        {headerName}
      </Text>
      <Icon
        name="leftcircleo"
        type="antdesign"
        color={'transparent'}
        size={34}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headercontainers: {
    width: '100%',
    backgroundColor: Theme.colors.primaryColor,
    height: moderateScale(50),
    alignItems: 'center',
    // justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: '2.5%',
  },
});
export default Header;
