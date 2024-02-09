import React, {useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';
const Signin = ({navigation}) => {
  const dispatch = useDispatch();
  const [showindicator, setShowindicator] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handlesignin = () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter email',
        autoClose: 1500,
      });
    } else if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Password!',
        autoClose: 1500,
      });
    } else {
      Keyboard.dismiss();

      setShowindicator(true);
      var myHeaders = new Headers();
      // myHeaders.append(
      //   'Cookie',
      //   'XSRF-TOKEN=eyJpdiI6ImNiR3RXZlBhbVhOMlAwUlM4Yklaamc9PSIsInZhbHVlIjoiaWJhYW4rRWhyVTAzcTk1WDhSbHBQalludnpLRkQ1WEo1U2hiL3FhNFdjQXIrMERodUk2TGJXNFpMZXRlUWtNV2tOU2N3Z2g2VitCTEpQWFdVVkxsaDZzMjl1cU1QL2pkZ3hIWHNNNG1GMlc2RG5iNkxaNFdjbDJGNkR5VU42bE8iLCJtYWMiOiJhZDA2MmUxNDU3N2YxMDk2NTZjOTk5ZjIzZDUxMzVhZTMzMTg4MDFjOWNkOTI5MzFjM2UxMGUyOGI0M2FlNTA2IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6IlN4bjcyWHdDYmdETFMvcE9aeGRwSlE9PSIsInZhbHVlIjoidlJEekJqQ2ZaZWlPazh6dWJTbUI1U29tZGRITHhsNTNSeFZTd3hsbTlKMnFVTmRmT0gxUzRCT21DV0xHSGJZZk1iUzZPNmtFNkZBK1hCQjM1KzBTTk9UcytQU0RqYXRXUkdvZmo0VDM0dFBuWVRiOFBkWmNKbzVLUkdjam1NYkwiLCJtYWMiOiIyMmEzM2E0ZGU2Zjk3MDVhYmU3YzAzZGZiMWZkOWRlNTkxZjhmZDVlZmE2ZWQzYjBlOTA3MjMxMjc5ZGEyYzgzIiwidGFnIjoiIn0%3D',
      // );

      var formdata = new FormData();
      formdata.append('email', email);
      formdata.append('password', password);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/login',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);

          const data = JSON.parse(result);
          console.log('response from login  ====', data);

          setShowindicator(false);
          if (data?.status === true && Number(data?.user?.type) === 2) {
            dispatch({
              type: types.LOGIN.success,
              payload: data,
            });
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            navigation.replace('patienthome');
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data?.message,
              autoClose: 1500,
            });
          }
        })
        .catch(error => {
          setShowindicator(false);
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: 'Network Error',
            autoClose: 1500,
          });
          console.log('error ====', error);
        });
    }
  };
  return (
    <View style={styles.maincontainer}>
      {showindicator === true ? <Loader /> : null}
      <View style={{height: 100}} />
      <Text style={styles.logintxt}>Please Sign In</Text>
      <Text
        style={{
          color: '#A6A6A6',

          width: '90%',
          fontSize: 14,
          fontFamily: Theme.fontFamily.medium,
          marginHorizontal: '5%',
          marginTop: 10,
        }}></Text>

      <View style={styles.body}>
        <Input
          label="Email"
          placeholder={'Enter email'}
          value={email}
          onChangeText={val => setEmail(val)}
          iconName={'mail'}
          iconType={'feather'}
          width={75}
        />
        <Input
          label={'Password'}
          placeholder={'Set Password'}
          value={password}
          onChangeText={val => setPassword(val)}
          password
          iconName={'lock'}
          iconType={'feather'}
          width={100}
        />
        <View style={styles.forgettextContainer}>
          <Text
            style={styles.resettxt}
            onPress={() => navigation.navigate('forget')}>
            Forgot Password?
          </Text>
        </View>
        <View style={styles.btn}>
          <Button title={'Sign In'} onPress={() => handlesignin()} />
        </View>
      </View>
    </View>
  );
};
export default Signin;
