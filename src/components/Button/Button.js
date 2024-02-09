import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Text,
} from 'react-native';
import Theme from '../../Theme/Theme';
import {Icon} from '@rneui/themed';
export default function Button({
  isLoading,
  title,
  onPress,
  filled,
  style,
  rounded,
  disabled,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.Button,
        {...style},
        rounded && {borderRadius: 8},
        disabled && {backgroundColor: Theme.colors.grey},
      ]}
      onPress={onPress}
      disabled={disabled}>
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.textButton}>{title}</Text>
      )}
   
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  Button: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Theme.colors.primaryColor,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontFamily: Theme.fontFamily.medium,
    fontSize: 16,
    // marginRight: 20,
  },
});
