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
import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const ForgetPassword = ({navigation}) => {
  const [showindicator, setShowindicator] = useState(false);
  const [email, setEmail] = useState('');
  const handleforget = () => {
    // navigation.replace('verification', {email: email});
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter email',
        autoClose: 1500,
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: email,
      });
      setShowindicator(true);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(
        'https://www.globalsleep.backend.redflameuae.com/api/forgotPassword/otp/send',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          let data = JSON.parse(result);
          setShowindicator(false);
          console.log('response from forget screen ====>>', data);
          if (data.status === 'success') {
            // console.log(data.data);

            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data.messages[0],
              autoClose: 1500,
            });

            navigation.replace('verification', {email: email});
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data.messages[0],
              autoClose: 1500,
            });

            // console.log(data);
          }
        })
        .catch(error => console.log('error', error));
      //   var myHeaders = new Headers();
      //   myHeaders.append('email', email);

      //   var formdata = new FormData();
      //   formdata.append('email', email);

      //   var requestOptions = {
      //     method: 'POST',
      //     headers: myHeaders,
      //     body: formdata,
      //     redirect: 'follow',
      //   };
      //   setShowindicator(true);
      //   fetch(
      //     'http://164.92.224.155:4545/api/forgetPassword/otp/send',
      //     requestOptions,
      //   )
      //     .then(response => response.text())

      //     .catch(error => console.log('error', error));
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
        <Text style={styles.txt1}>Forgot your password?</Text>
        <Text style={styles.txt2}>
          No worries! Enter your email address and a recovery code will be sent
          to your email shortly.
        </Text>

        <View style={styles.inputContainer}>
          <Input
            label="Email"
            placeholder={'Enter email'}
            value={email}
            onChangeText={val => setEmail(val)}
            iconName={'mail'}
            iconType={'feather'}
            width={75}
          />
        </View>
        <View style={{marginTop: 40}}>
          <Button title={'Send'} onPress={() => navigation.replace('verification', {email: email})} />
        </View>
      </View>
    </View>
  );
};
export default ForgetPassword;
