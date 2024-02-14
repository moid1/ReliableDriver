import React, {useState, useRef} from 'react';
import {View, Text, ScrollView, TextInput, Pressable} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import {StatusBar} from 'react-native';
import Button from '../../../components/Button/Button';
import SignatureScreen from 'react-native-signature-canvas';
import {MultiSelect} from 'react-native-element-dropdown';
import {useSelector} from 'react-redux';
import Loader from '../../../components/Loader';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {Dropdown} from 'react-native-element-dropdown';
const data1 = [
  {label: 'Lawnmowers/ATVMotorcycle', value: 'lawnmowers_atvmotorcycle'},
  {
    label: 'Lawnmowers/ATVMotorcycle With Rim',
    value: 'lawnmowers_atvmotorcyclewithrim',
  },
  {label: 'Passenger/Light truck', value: 'passanger_lighttruck'},
  {
    label: 'Passenger/Light truck With Rim',
    value: 'passanger_lighttruckwithrim',
  },
];
const data2 = [
  {label: 'Semi Truck', value: 'semi_truck'},
  {label: 'Semi Super Singles', value: 'semi_super_singles'},
  {label: 'Semi Truck With Rim', value: 'semi_truck_with_rim'},
];
const data3 = [
  {label: 'AG Med Truck 19.5/ Skid Steer', value: '1'},
  {label: 'AG Med Truck 19.5/ With Rim', value: '2'},
  {label: 'Farm Tractor $1.25 per, Last two digits', value: '3'},
];
const data4 = [
  {label: '15.5-25', value: '1'},
  {label: '17.5-25 (Radial)', value: '2'},
  {label: '20.5-25 (Radial)', value: '3'},
  {label: '23.5-25 (Radial)', value: '4'},
  {label: '26.5-25 (Radial)', value: '5'},
  {label: '29.5-25 (Radial)', value: '6'},
  {label: '24.00R35', value: '7'},
  {label: '14.00-24 (Radial)', value: '8'},
  {label: '19.5L-24', value: '9'},
  {label: '18.4-38', value: '10'},
  {label: '710/70R43', value: '11'},
  {label: 'Odd Tire / Inches', value: '12'},
];
const data5 = [
  {label: 'Yes', value: 'true'},
  {label: 'No', value: 'false'},
];
const Generator = ({navigation, route}) => {
  const userData = useSelector(state => state.auth.userAccessKey);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [selected, setSelected] = useState([]);
  const [selectedtruck, setSelectedtruck] = useState([]);
  const [selectedtires, setSelectedtires] = useState([]);
  const [selectedotr, setSelectedotr] = useState([]);
  const [showindicator, setShowindicator] = useState(false);
  const signatureRef = useRef();
  const signatureRef1 = useRef();
  const [signature, setSignature] = useState('');
  const [signature1, setSignature1] = useState('');
  const [trailerPickup, setTrailerPickup] = useState('');
  const [trailerDrop, setTrailerDrop] = useState('');
  const [startWeight, setStartWeight] = useState('');
  const [bol, setBol] = useState('');
  const [endWeight, setEndWeight] = useState('');
  const [totalWeight, setTotalWeight] = useState('');
  const [atvmotorcycle, setatvmotorcycle] = useState('');
  const [atvmotorcyclewithrim, setatvmotorcyclewithrim] = useState('');
  const [lighttruck, setlighttruck] = useState('');
  const [lighttruckwithrim, setlighttruckwithrim] = useState('');
  const [semitruck, setsemitruck] = useState('');
  const [semi_super_singles, setsemi_super_singles] = useState('');
  const [semi_truck_with_rim, setsemi_truck_with_rim] = useState('');
  const [tiresLeft, settiresLeft] = useState('');
  const [backUs, setBackUs] = useState(false);
  const ref = useRef();
  const ref1 = useRef();
  const data = route?.params?.data;
  const orderId = route?.params?.orderId;
  console.log('reponse from type ==', data);
  const [active, setActive] = useState(data);
  const toggleScroll = () => {
    setScrollEnabled(!scrollEnabled);
  };

  const handleSignaturePress = () => {
    // Disable scrolling when the signature canvas is pressed
    toggleScroll();
  };
  const handleOK = signature => {
    console.log('sing data ===', signature);
    setSignature(signature);
  };
  const handleOK1 = signature => {
    console.log('sing data ===', signature);
    setSignature1(signature);
  };

  const handleEmpty = () => {
    console.log('Empty');
  };
  const handleEmpty1 = () => {
    console.log('Empty');
  };
  // Called after ref.current.clearSignature()
  const handleClear = () => {
    ref?.current?.clearSignature();
    setSignature('');
    console.log('clear success!');
  };
  const handleClear1 = () => {
    ref1?.current?.clearSignature();
    setSignature1('');
    console.log('clear success!');
  };
  // Called after end of stroke
  const handleEnd = () => {
    ref.current.readSignature();
    toggleScroll();
  };

  const handleEnd1 = () => {
    ref1.current.readSignature();
    toggleScroll();
  };
  // Called after ref.current.getData()
  const handleData = data => {
    console.log(data);
  };
  const handleData1 = data => {
    console.log(data);
  };
  // exact
  const BoxtypeHandle = () => {
    if (selected?.length === 0) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please selected passenger tires',
        autoClose: 1500,
      });
    } else {
      setShowindicator(true);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var formdata = new FormData();
      formdata.append('signed', signature);
      formdata.append('order_id', orderId);
      formdata.append('driver_signed', signature1);
      formdata.append('passanger_tyres_type', selected);
      formdata.append('lawnmowers_atvmotorcycle', atvmotorcycle);
      formdata.append('lawnmowers_atvmotorcyclewithrim', atvmotorcyclewithrim);
      formdata.append('passanger_lighttruck', lighttruck);
      formdata.append('passanger_lighttruckwithrim', lighttruckwithrim);
      formdata.append('truck_tyres_type', selectedtruck);
      formdata.append('semi_truck', semitruck);
      formdata.append('semi_super_singles', semi_super_singles);
      formdata.append('semi_truck_with_rim', semi_truck_with_rim);
      formdata.append('tiresLeft', tiresLeft);
      formdata.append('backUs', backUs);
      formdata.append('payment_type', '');
      console.log('uplaod data ====>', formdata);
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/fulfill-box',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          setShowindicator(false);

          const data = JSON.parse(result);
          if (data?.status === true) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            setSelected([]);
            setSelectedtruck([]);
            navigation.navigate('pdf', {data: data?.manifest_link});
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
          console.log('error', error);
        });
    }
  };
  // exact
  const SwapHandle = () => {
    if (!trailerPickup) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Pickup',
        autoClose: 1500,
      });
    } else if (!trailerDrop) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Drop off',
        autoClose: 1500,
      });
    } else {
      setShowindicator(true);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var formdata = new FormData();
      formdata.append('signed', signature);
      formdata.append('trailer_pick_up', trailerPickup);
      formdata.append('trailer_drop_off', trailerDrop);
      formdata.append('order_id', orderId);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/trailer-swap-order',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          setShowindicator(false);

          const data = JSON.parse(result);
          if (data?.status === true) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            setTrailerDrop('');
            setTrailerPickup('');
            setSignature('');
            navigation.navigate('pdf', {data: data?.manifest_link});
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
          console.log('error', error);
        });
    }
  };
  // exact
  const Tdfhandle = () => {
    if (!startWeight) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Start Weight',
        autoClose: 1500,
      });
    } else if (!endWeight) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter End Weight',
        autoClose: 1500,
      });
    } else {
      setShowindicator(true);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var formdata = new FormData();
      formdata.append('signed', signature);
      formdata.append('start_weight', startWeight);
      formdata.append('end_weight', endWeight);
      formdata.append('order_id', orderId);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/tdf-order',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          setShowindicator(false);

          const data = JSON.parse(result);
          if (data?.status === true) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            setSignature('');
            setEndWeight('');
            setEndWeight('');
            setTotalWeight('');
            // navigation.goBack();
            navigation.navigate('pdf', {data: data?.manifest_link});
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
          console.log('error', error);
        });
    }
  };
  // exact
  const SteelHandle = () => {
    if (!startWeight) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter Start Weight',
        autoClose: 1500,
      });
    } else if (!endWeight) {
      Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'Please Enter End Weight',
        autoClose: 1500,
      });
    } else {
      setShowindicator(true);
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var formdata = new FormData();
      formdata.append('order_id', orderId);
      formdata.append('signed', signature);
      formdata.append('total_weight_lbs', totalWeight);

      formdata.append('start_weight', startWeight);
      formdata.append('end_weight', endWeight);
      formdata.append('bol', bol);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://portal.reliabletiredisposalhq.com/api/steel-order',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result);
          setShowindicator(false);

          const data = JSON.parse(result);
          if (data?.status === true) {
            Toast.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: data?.message,
              autoClose: 1500,
            });
            navigation.goBack();
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
          console.log('error', error);
        });
    }
  };

  const WeightHandle = () => {
    setShowindicator(true);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${userData?.token}`);

    var formdata = new FormData();
    formdata.append('order_id', orderId);
    formdata.append('signed', signature);
    formdata.append('total_weight_lbs', totalWeight);
    formdata.append('start_weight', startWeight);
    formdata.append('end_weight', endWeight);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://portal.reliabletiredisposalhq.com/api/state-weight',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        console.log(result);
        setShowindicator(false);

        const data = JSON.parse(result);
        if (data?.status === true) {
          Toast.show({
            type: ALERT_TYPE.SUCCESS,
            title: 'Success',
            textBody: data?.message,
            autoClose: 1500,
          });
          setSignature('');
          setEndWeight('');
          setEndWeight('');
          setTotalWeight('');
          // navigation.goBack();
          navigation.navigate('pdf', {data: data?.manifest_link});
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
        console.log('error', error);
      });
  };
  // console.log('response from selcted ==', selected);
  const LoadType = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              State
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <Text
            onPress={() => setActive('weight')}
            style={{
              color: Theme.colors.primaryColor,
              fontFamily: Theme.fontFamily.bold,
              fontSize: 20,
              alignSelf: 'center',
              marginTop: '40%',
            }}>
            Load By Weight
          </Text>
          <Text
            onPress={() => setActive('tire')}
            style={{
              color: Theme.colors.primaryColor,
              fontFamily: Theme.fontFamily.bold,
              fontSize: 20,
              alignSelf: 'center',
              marginTop: 20,
            }}>
            Load By Tire
          </Text>
        </View>
      </GestureHandlerRootView>
    );
  };

  const TireState = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          {showindicator === true ? <Loader /> : null}
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              State
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{paddingBottom: 80}}>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Start Weight
              </Text>
              <TextInput
                value={startWeight}
                onChangeText={txt => setStartWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                End Weight
              </Text>
              <TextInput
                value={endWeight}
                onChangeText={txt => setEndWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Total Weight in LBS
              </Text>
              <TextInput
                value={totalWeight}
                onChangeText={txt => setTotalWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Customer Signature:
              </Text>

              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onEnd={handleEnd}
                  onBegin={handleSignaturePress}
                  onOK={handleOK}
                  onEmpty={handleEmpty}
                  onClear={handleClear}
                  onGetData={handleData}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Button title={'Submit'} onPress={() => WeightHandle()} />
            </View>
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    );
  };
  const renderItem = item => {
    return (
      <View
        style={{
          padding: 17,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            flex: 1,
            fontSize: 14,
            color: 'black',
            textTransform: 'capitalize',
            fontFamily: Theme.fontFamily.medium,
          }}>
          {item.label}
        </Text>
      </View>
    );
  };
  const WeigthState = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          {showindicator === true ? <Loader /> : null}
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              Generator
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{paddingBottom: 10}}>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Company Registration
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                paddingBottom: 2,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Types of Passenger Tires
              </Text>

              <MultiSelect
                style={{
                  height: 50,
                  backgroundColor: 'transparent',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
                placeholderStyle={{fontSize: 16}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{
                  height: 40,
                  fontSize: 16,
                }}
                iconStyle={{width: 20, height: 20}}
                data={data1}
                labelField="label"
                valueField="value"
                placeholder="Types of Passenger Tires"
                value={selected}
                onChange={item => {
                  setSelected(item);
                }}
                selectedStyle={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              />
            </View>
            {selected?.map(item => {
              return item === 'lawnmowers_atvmotorcycle' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    No of Lawnmowers/ATVMotorcycle
                  </Text>
                  <TextInput
                    value={atvmotorcycle}
                    onChangeText={txt => setatvmotorcycle(txt)}
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === 'lawnmowers_atvmotorcyclewithrim' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    No of Lawnmowers/ATVMotorcycle With Rim
                  </Text>
                  <TextInput
                    value={atvmotorcyclewithrim}
                    onChangeText={txt => setatvmotorcyclewithrim(txt)}
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === 'passanger_lighttruck' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    No of Passanger/Light truck
                  </Text>
                  <TextInput
                    value={lighttruck}
                    onChangeText={txt => setlighttruck(txt)}
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === 'passanger_lighttruckwithrim' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    No of Passanger/Light truck with Rim
                  </Text>
                  <TextInput
                    value={lighttruckwithrim}
                    onChangeText={txt => setlighttruckwithrim(txt)}
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : null;
            })}
            <View
              style={{
                // height: 80,
                paddingBottom: 2,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Types of Truck Tires
              </Text>
              <MultiSelect
                style={{
                  height: 50,
                  backgroundColor: 'transparent',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
                placeholderStyle={{fontSize: 16}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{
                  height: 40,
                  fontSize: 16,
                }}
                iconStyle={{width: 20, height: 20}}
                data={data2}
                labelField="label"
                valueField="value"
                placeholder="Types of Truck Tires"
                value={selectedtruck}
                onChange={item => {
                  setSelectedtruck(item);
                }}
                selectedStyle={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              />
            </View>
            {selectedtruck?.map(item => {
              return item === 'semi_truck' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    Semi Truck
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === 'semi_super_singles' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    Semi Super Singles
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === 'semi_truck_with_rim' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    Semi Truck With Rim
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : null;
            })}
            <View
              style={{
                // height: 80,
                paddingBottom: 2,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Types of Agri Tires
              </Text>
              <MultiSelect
                style={{
                  height: 50,
                  backgroundColor: 'transparent',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
                placeholderStyle={{fontSize: 16}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{
                  height: 40,
                  fontSize: 16,
                }}
                iconStyle={{width: 20, height: 20}}
                data={data3}
                labelField="label"
                valueField="value"
                placeholder="Types of Agri Tires"
                value={selectedtires}
                onChange={item => {
                  setSelectedtires(item);
                }}
                selectedStyle={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              />
            </View>
            {selectedtires?.map(item => {
              return item === '1' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    AG Med Truck 19.5/ Skid Steer
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '2' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    AG Med Truck 19.5/ With Rim
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '3' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    Farm Tractor $1.25 per, Last two digits
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : null;
            })}
            <View
              style={{
                // height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                paddingBottom: 2,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Types of OTR Tires
              </Text>
              {/* <TextInput
              style={{
                height: 50,
                width: '100%',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: 'grey',
                color: 'black',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
                paddingHorizontal: 10,
                marginTop: 5,
              }}
            /> */}
              <MultiSelect
                style={{
                  height: 50,
                  backgroundColor: 'transparent',
                  borderColor: 'grey',
                  borderWidth: 1,
                  borderRadius: 5,
                  paddingHorizontal: 10,
                }}
                placeholderStyle={{fontSize: 16}}
                selectedTextStyle={{fontSize: 14}}
                inputSearchStyle={{
                  height: 40,
                  fontSize: 16,
                }}
                iconStyle={{width: 20, height: 20}}
                data={data4}
                labelField="label"
                valueField="value"
                placeholder=" Types of OTR Tires"
                value={selectedotr}
                onChange={item => {
                  setSelectedotr(item);
                }}
                selectedStyle={{
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: 'grey',
                }}
              />
            </View>
            {selectedotr?.map(item => {
              return item === '1' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    15.5-25
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '2' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    17.5-25 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '3' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    20.5-25 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '4' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    23.5-25 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '5' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    26.5-25 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '6' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    29.5-25 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '7' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    24.00R35
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '8' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    14.00-24 (Radial)
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '9' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    19.5L-24
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '10' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    18.4-38
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '11' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    710/70R43
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : item === '12' ? (
                <View
                  key={item}
                  style={{
                    height: 80,
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 13,
                    }}>
                    Odd Tire / Inches
                  </Text>
                  <TextInput
                    style={{
                      height: 50,
                      width: '100%',
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: 'grey',
                      color: 'black',
                      fontSize: 14,
                      fontFamily: Theme.fontFamily.medium,
                      paddingHorizontal: 10,
                      marginTop: 5,
                    }}
                  />
                </View>
              ) : null;
            })}
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Payment Type
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                No of tires left
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
                value={tiresLeft}
                onChangeText={txt => settiresLeft(txt)}
              />
            </View>
            <View
              style={{
                // height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
                paddingBottom: 2,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Do you want us back?
              </Text>

              <Dropdown
                style={{
                  marginBottom: 10,
                  height: 50,
                  backgroundColor: 'transparent',
                  borderRadius: 10,
                  borderColor: Theme.colors.grey,
                  padding: 10,
                  borderWidth: 1,
                }}
                placeholderStyle={{
                  fontSize: 14,
                  color: 'grey',
                  fontFamily: Theme.fontFamily.medium,
                }}
                selectedTextStyle={{
                  fontSize: 14,
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                }}
                iconStyle={{
                  width: 20,
                  height: 20,
                }}
                data={data5}
                labelField="label"
                valueField="value"
                placeholder="No"
                value={backUs}
                onChange={item => {
                  console.log('response from chage ==', item);
                  setBackUs(item?.value);
                }}
                renderItem={renderItem}
              />
            </View>

            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Customer Signature:
              </Text>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onBegin={handleSignaturePress}
                  onEnd={handleEnd}
                  onOK={handleOK}
                  onEmpty={handleEmpty}
                  onClear={handleClear}
                  onGetData={handleData}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>
            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Driver Signature:
              </Text>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref1}
                  onBegin={handleSignaturePress}
                  onEnd={handleEnd1}
                  onOK={handleOK1}
                  onEmpty={handleEmpty1}
                  onClear={handleClear1}
                  onGetData={handleData1}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear1()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Button title={'Submit'} onPress={() => BoxtypeHandle()} />
            </View>
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    );
  };
  const TDF = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          {showindicator === true ? <Loader /> : null}
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              TDF
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{paddingBottom: 80}}>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Start Weight
              </Text>
              <TextInput
                value={startWeight}
                onChangeText={txt => setStartWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                End Weight
              </Text>
              <TextInput
                value={endWeight}
                onChangeText={txt => setEndWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Total Weight in LBS
              </Text>
              <TextInput
                value={totalWeight}
                onChangeText={txt => setTotalWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Customer Signature:
              </Text>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onBegin={handleSignaturePress}
                  onEnd={handleEnd}
                  onOK={handleOK}
                  onEmpty={handleEmpty}
                  onClear={handleClear}
                  onGetData={handleData}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>

            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Button title={'Submit'} onPress={() => Tdfhandle()} />
            </View>
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    );
  };
  const Steel = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          {showindicator === true ? <Loader /> : null}
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              Tire Wire
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{paddingBottom: 80}}>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Start Weight
              </Text>
              <TextInput
                value={startWeight}
                onChangeText={txt => setStartWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                BOL:
              </Text>
              <TextInput
                value={bol}
                onChangeText={txt => setBol(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                End Weight
              </Text>
              <TextInput
                value={endWeight}
                onChangeText={txt => setEndWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Total Weight in LBS
              </Text>
              <TextInput
                value={totalWeight}
                onChangeText={txt => setTotalWeight(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Customer Signature:
              </Text>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onEnd={handleEnd}
                  onBegin={handleSignaturePress}
                  onOK={handleOK}
                  onEmpty={handleEmpty}
                  onClear={handleClear}
                  onGetData={handleData}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Button title={'Submit'} onPress={() => SteelHandle()} />
            </View>
          </ScrollView>
        </View>
      </GestureHandlerRootView>
    );
  };
  const TrailerSwap = () => {
    return (
      <GestureHandlerRootView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={Theme.colors.primaryColor}
          />
          {showindicator === true ? <Loader /> : null}
          <View
            style={{
              height: 60,
              width: '90%',
              alignSelf: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Icon
              name="arrowleft"
              type="antdesign"
              color={'black'}
              onPress={() => navigation.goBack()}
            />
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.semibold,
                color: 'black',
              }}>
              Trailer Swap
            </Text>
            <Icon name="arrowleft" type="antdesign" color={'transparent'} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={{paddingBottom: 80}}>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Trailer # Picked Up:
              </Text>
              <TextInput
                value={trailerPickup}
                onChangeText={txt => setTrailerPickup(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>
            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Trailer # Droped:
              </Text>
              <TextInput
                value={trailerDrop}
                onChangeText={txt => setTrailerDrop(txt)}
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 80,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Payment Type
              </Text>
              <TextInput
                style={{
                  height: 50,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: Theme.fontFamily.medium,
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}
              />
            </View>

            <View
              style={{
                height: 180,
                width: '90%',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: Theme.fontFamily.medium,
                  fontSize: 13,
                }}>
                Customer Signature:
              </Text>
              <View
                style={{
                  height: 150,
                  width: '100%',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: 'grey',
                  paddingHorizontal: 10,
                  marginTop: 5,
                }}>
                <SignatureScreen
                  ref={ref}
                  onEnd={handleEnd}
                  onBegin={handleSignaturePress}
                  onOK={handleOK}
                  onEmpty={handleEmpty}
                  onClear={handleClear}
                  onGetData={handleData}
                  autoClear={false}
                  descriptionText={'hello signature'}
                />
              </View>
            </View>
            <Pressable
              onPress={() => handleClear()}
              style={{
                height: 30,
                width: 100,
                backgroundColor: Theme.colors.primaryColor,
                borderRadius: 5,
                marginLeft: '5%',
                marginTop: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 13,
                  fontFamily: Theme.fontFamily.medium,
                }}>
                Clear
              </Text>
            </Pressable>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 10}}>
              <Button title={'Submit'} onPress={() => SwapHandle()} />
            </View>
          </ScrollView>
        </View>
        {/* </View> */}
      </GestureHandlerRootView>
    );
  };
  return active === 'state'
    ? LoadType()
    : active === 'tire'
    ? WeigthState()
    : active === 'trailer_swap'
    ? TrailerSwap()
    : active === 'tdf'
    ? TDF()
    : active === 'steel'
    ? Steel()
    : active === 'box_truck_route'
    ? WeigthState()
    : TireState();
};
export default Generator;
