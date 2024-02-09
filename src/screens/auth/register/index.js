import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Dimensions,
  Alert,
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import styles from './styles';
import Input from '../../../components/input/Input';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Loader from '../../../components/Loader';
import otpstyles from './otpstyles';
// import Toast from 'react-native-toast-message';
import {
  ALERT_TYPE,
  Dialog,
  AlertNotificationRoot,
  Toast,
} from 'react-native-alert-notification';
const {height, width} = Dimensions.get('window');
const Register = ({navigation, route}) => {
  const type = route?.params?.type;
  console.log('type of user', type);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [number, setNumber] = useState('');
  const [address, setaddress] = useState('');
  const [showindicator, setShowindicator] = useState(false);

  const [userdata, setData] = useState({});


  const registerUser = async () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please enter email',
        autoClose: 1500,
      });
    } else if (!number) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Phone Number!',
        autoClose: 1500,
      });
    } else if (!password) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Password!',
        autoClose: 1500,
      });
    } else if (!firstname) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter First Name',
        autoClose: 1500,
      });
    } else if (!lastname) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Last Name',
        autoClose: 1500,
      });
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: email,
        password: password,
        phone: number,
        password_confirmation: password,
        firstName: firstname,
        lastName: lastname,
        address: address,
        type: type,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };
      setShowindicator(true);
      fetch(
        'https://www.globalsleep.backend.redflameuae.com/api/user/signup',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          let data = JSON.parse(result);
          console.log('resposne from signup-----', data);
          setShowindicator(false);
          if (data.status === 'success') {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data.messages[0],
              autoClose: 1500,
            });
            setData(data.data);
            navigation.replace('signin');
          } else {
            Toast.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: data.messages[0],
              autoClose: 1500,
            });
            console.log(data);
          }
        })
        .catch(error => {
          setShowindicator(false);
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Error',
            textBody: 'Network Error',
          });
        });
    }
  };




  return (
    <>
      <View style={styles.maincontainer}>
        {showindicator === true ? <Loader /> : null}
        <ScrollView
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 30}}>
          <View style={{height: 40}} />
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontFamily: Theme.fontFamily.semibold,
              marginLeft: '5%',
              marginBottom: 30,
            }}>
            Create an account
          </Text>

          <View style={styles.body}>
            <Input
              placeholder={'Enter First Name '}
              value={firstname}
              onChangeText={val => setfirstname(val)}
              iconName={'user'}
              iconType={'antdesign'}
              label={'First Name'}
              width={105}
            />
            <Input
              label={'Last Name'}
              placeholder={'Enter Last Name'}
              value={lastname}
              onChangeText={val => setlastname(val)}
              iconName={'user'}
              iconType={'antdesign'}
              width={105}
            />
            <Input
              label="Phone Number"
              placeholder={'Enter email'}
              value={number}
              onChangeText={val => setNumber(val)}
              iconName={'phone'}
              iconType={'feather'}
              width={130}
            />
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

            <Input
              placeholder={'Address'}
              label={'Address'}
              value={address}
              onChangeText={val => setaddress(val)}
              iconName={'home'}
              iconType={'antdesign'}
              width={90}
            />

            <Button title={'Sign Up'} onPress={() =>   navigation.replace('signin')} />

            <View style={styles.bottomContainer}>
              <Text
                style={styles.bottomtxt}
                onPress={() => navigation.navigate('signin')}>
                Already have an account?{`\t`}<Text style={{color:Theme.colors.primaryColor,     textDecorationLine: 'underline',fontSize:14}}>SIGNIN</Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};
export default Register;
