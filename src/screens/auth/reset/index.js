import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');

const ResetPassword = ({navigation, route}) => {
  const email1 = route?.params?.email;
  const otp = route?.params?.otp;
  const [showindicator, setShowindicator] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const handleforget = () => {
    if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter New Password!',
        autoClose: 1500,
      });
    } else if (!confirmpassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Confirm Password!',
        autoClose: 1500,
      });
    } else if (password !== confirmpassword) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Both Password Should be Same!',
        autoClose: 1500,
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
   
      var raw = JSON.stringify({
        email: email1,
        password: password,
        password_confirmation: confirmpassword,
        otp: otp,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      setShowindicator(true);
      fetch(
        'https://www.globalsleep.backend.redflameuae.com/api/password/change',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result);
          setShowindicator(false);
          console.log('response from reset ====>>', data);
          if (data?.status === 'success') {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Succes',
              textBody: data.messages[0],
              autoClose: 1500,
            });
            navigation.replace('signin');
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data.messages[0],
              autoClose: 1500,
            });
          }
        })
        .catch(error => console.log('error', error));
    }
  };
  return (
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}

      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F5F5F5',
          }}>
          <Icon
            name="arrowleft"
            type="antdesign"
            color={Theme.colors.textColor}
            size={28}
          />
        </Pressable>
      </View>
      <View style={styles.bodytxtContainer}>
        <Text style={styles.txt1}>Create new password</Text>
        <Text style={styles.txt2}>
          Password must contain minimum 8 characters, at least 1 upper case, 1
          lower case, 1 number and 1 symbol.
        </Text>

        <View style={styles.inputContainer}>
          <Input
            label="New Password"
            placeholder={'Set new password'}
            value={password}
            onChangeText={val => setPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={130}
          />
          <Input
            label="Confirm Password"
            placeholder={'Set confirm password'}
            value={confirmpassword}
            onChangeText={val => setConfirmPassword(val)}
            password
            iconName={'lock'}
            iconType={'feather'}
            width={150}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Button title={'Reset'} onPress={() =>   navigation.replace('signin')} />
        </View>
      </View>
    </View>
  );
};
export default ResetPassword;
