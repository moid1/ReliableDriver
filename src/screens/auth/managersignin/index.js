import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';
const ManagerSignin = ({navigation}) => {
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
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: email,
        password: password,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      setShowindicator(true);

      fetch(
        'https://www.globalsleep.backend.redflameuae.com/api/user/login',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result)
          const data = JSON.parse(result);
          console.log('response from login-----', data);
          setShowindicator(false);

          if (data.status === 'success') {
            dispatch({
              type: types.LOGIN.success,
              payload: data?.data,
            });
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data.messages[0],
              autoClose: 1500,
            });
            if (data?.data?.user?.type === 'patient') {
              navigation.replace('patienthome');
            } else {
              navigation.replace('doctorhome');
            }
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
            onPress={() => navigation.navigate('forget')}
            >
            Forgot Password?
          </Text>
        </View>
        <View style={styles.btn}>
          <Button
            title={'Sign In'}
            onPress={() =>     navigation.replace('doctorhome')}
            // onPress={() => handlesignin()}
          />
        </View>

        <View
          style={{
            width: '100%',
            height: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 20,
            marginTop: 20,
            // backgroundColor:"red"
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
             
            }}
            onPress={() => navigation.navigate('register')}>
            Don’t have an account? <Text style={{color:Theme.colors.primaryColor,     textDecorationLine: 'underline',fontSize:14}}>SIGNUP</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
export default ManagerSignin;
