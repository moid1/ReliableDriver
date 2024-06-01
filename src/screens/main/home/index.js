import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StatusBar,
  Modal,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from '@rneui/themed';
// import {StatusBar} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';

import moment from 'moment';
const Home = ({navigation}) => {
  const userData = useSelector(state => state.auth.userAccessKey);
  // console.log("response from user dara ====", userData);
  const [orders, setOrders] = useState([]);
  const [RoutesData, setRoutesData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [backUs, setBackUs] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');

  const [pickuplocation, setPickupLocation] = useState({
    latitude: 33.6844,
    longitude: 73.0479,
  });
useFocusEffect(
  React.useCallback(()=>{

      GetLocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 60000,
      })
        .then(location => {
          Geocoder.init('AIzaSyATph3BCKxFTZucYVofwV2tuUIB-YXqHFg');
          Geocoder.from(location.latitude, location.longitude)
            .then(json => {
              var addressComponent = json.results[0].formatted_address;
              setCurrentLocation(addressComponent.toString());
            })
            .catch(error => console.warn(error));
          setPickupLocation(location);
          // onCenter();
        })
        .catch(error => {
          const {code, message} = error;
          console.warn(code, message);
        });
  
  },[pickuplocation?.latitude])
)
  useFocusEffect(
    React.useCallback(() => {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      fetch(
        'https://manifest.reliabletiredisposal.online/api/get-driver-orders',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          const data = JSON.parse(result);
          // console.log(data);

          if (data?.status === true) {
            setOrders(data?.data);
          }
        })
        .catch(error => console.log('error', error));
    }, []),
  );
  useFocusEffect(
    React.useCallback(() => {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);

      // const formdata = new FormData();

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        // body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://manifest.reliabletiredisposal.online/api/get-not-started-group-routes',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result);
          const data = JSON.parse(result);
          if (data?.success === true) {
            setRoutesData(data?.data);
          }
        })
        .catch(error => console.error(error));
    }, []),
  );
  useFocusEffect(
    React.useCallback(() => {
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${userData?.token}`);
      const raw = JSON.stringify({
        users_location: currentLocation,
        users_lat: pickuplocation?.latitude,
        users_long: pickuplocation?.longitude,
        // users_id: userData?.user?.id,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(
        'https://manifest.reliabletiredisposal.online/api/driver-location',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          // console.log(result);
          const data = JSON.parse(result);
         console.log("response from update location==",data);
        })
        .catch(error => console.error(error));
    },[currentLocation]),
  );
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
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      {/* <StatusBar
        barStyle={'light-content'}
        backgroundColor={Theme.colors.primaryColor}
      /> */}
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
            color: 'black',
          }}>
          Home
        </Text>

        <Pressable
          onPress={() => navigation.navigate('patientnotification')}
          style={{
            height: 45,
            width: 45,
            borderRadius: 25,
            backgroundColor: 'white',
            elevation: 5,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 20,
              width: 20,
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              top: -6,
              borderRadius: 10,
              right: -6,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 14,
                fontFamily: Theme.fontFamily.medium,
              }}>
              2
            </Text>
          </View>
          <Image
            source={require('../../../assets/bell.png')}
            resizeMode="contain"
            style={{height: 25, width: 25, borderRadius: 25}}
          />
        </Pressable>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 120}}>
        {/* <View
          style={{
            height: 55,
            width: '95%',
            alignSelf: 'center',
            backgroundColor: 'white',
            elevation: 2,
            marginTop: 10,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: '5%',
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: Theme.fontFamily.medium,
              fontSize: 14,
            }}>
            Today's Routes
          </Text>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={{
              height: 35,
              width: 120,
              borderRadius: 7,
              backgroundColor: Theme.colors.primaryColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontFamily: Theme.fontFamily.medium,
                fontSize: 12,
              }}>
              Check On Map
            </Text>
          </Pressable>
        </View> */}
        <Dropdown
          style={{
            marginBottom: 10,
            height: 50,
            backgroundColor: 'transparent',
            width: '90%',
            alignSelf: 'center',
            borderRadius: 10,
            borderColor: Theme.colors.primaryColor,
            padding: 10,
            borderWidth: 1,
            marginTop: 10,elevation:2,backgroundColor:"white",
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
          data={RoutesData?.map(item => {
            return {
              label: item?.route_name,
              value: item?.route_name,
            };
          })}
          labelField="label"
          valueField="value"
          placeholder="Select Route"
          value={backUs}
          onChange={item => {
            console.log('response from chage ==', item);
            setBackUs(item?.value);
            const foundObject = RoutesData.find(
              obj => obj.route_name === item?.value,
            );

            if (foundObject) {
              console.log('Found object:', foundObject);
              navigation.navigate('map', {data: foundObject});
            } else {
              console.log('Object not found');
            }
          }}
          renderItem={renderItem}
        />
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 10,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#2D2D2D',
              fontSize: 16,
              fontFamily: Theme.fontFamily.semibold,
            }}>
            Assigned orders
          </Text>

          <Text
            style={{
              color: Theme.colors.primaryColor,
              fontSize: 14,
              fontFamily: Theme.fontFamily.medium,
            }}>
            View all
          </Text>
        </View>
        {orders?.map(item => {
          return (
            <View
              key={item?.id}
              style={{
                width: '95%',
                alignSelf: 'center',
                elevation: 2,
                backgroundColor: 'white',
                paddingVertical: 15,
                borderRadius: 15,
                marginTop: 15,
                paddingHorizontal: '5%',
              }}>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                }}>
                Business Name:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                  {item?.customer?.business_name}
                </Text>
              </Text>

              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                }}>
                POC Name:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                  {item?.customer?.poc_name}
                </Text>
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  Load Type:{' '}
                </Text>

                <Text
                  style={{
                    color: 'green',
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  {item?.load_type}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  // justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text
                  style={{
                    color: Theme.colors.textColor,
                    fontFamily: Theme.fontFamily.semibold,
                    marginTop: 10,
                    fontSize: 14,
                  }}>
                  Notes:{' '}
                </Text>

                <Text
                  style={{
                    color: 'black',
                    fontFamily: Theme.fontFamily.regular,
                    marginTop: 10,
                    fontSize: 14,
                  }} numberOfLines={2}>
                  {item?.notes}
                </Text>
              </View>
              <View
                style={{
                  height: 40,
                  width: '100%',
                  alignSelf: 'center',
                  backgroundColor: '#F5F5F5',
                  marginTop: 15,
                  borderRadius: 8,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#2D2D2D',
                    fontFamily: Theme.fontFamily.semibold,
                    fontSize: 12,
                  }}>
                  Order Date & Time:
                </Text>
                <View
                  style={{
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="clockcircleo"
                    type="antdesign"
                    color={'#2D2D2D'}
                    size={16}
                  />
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 12,
                      marginLeft: 5,
                      marginTop: 2,
                    }}>
                    {moment(item?.created_at).format('hh:mm')}
                  </Text>
                </View>

                <View
                  style={{
                    height: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="calendar"
                    type="feather"
                    color={'#2D2D2D'}
                    size={16}
                  />
                  <Text
                    style={{
                      color: '#2D2D2D',
                      fontFamily: Theme.fontFamily.medium,
                      fontSize: 12,
                      marginLeft: 5,
                    }}>
                    {moment(item?.created_at).format('DD/MM/YYYY')}
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() =>
                  navigation.navigate('generator', {
                    data: item?.load_type,
                    orderId: item?.id,
                    order:item
                  })
                }
                style={{
                  height: 40,
                  width: '100%',
                  borderRadius: 10,
                  backgroundColor: Theme.colors.primaryColor,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontFamily: Theme.fontFamily.medium,
                    fontSize: 15,
                  }}>
                  Generator
                </Text>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          onPress={() => setModalVisible(false)}
          style={{
            flex: 1,
            alignItems: 'center',
            paddingTop: '30%',
            backgroundColor: 'rgba(0,0,0,0.2)',
          }}>
          <View
            style={{
              width: '90%',
              borderRadius: 10,
              backgroundColor: 'white',
              maxHeight: '70%',
              paddingVertical: 10,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Text
              style={{
                color: Theme.colors.primaryColor,
                fontFamily: Theme.fontFamily.medium,
                fontSize: 18,
                marginTop: 20,
                marginBottom: 20,
              }}>
              Select Route
            </Text>
            {RoutesData?.length > 0 &&
              RoutesData?.map(item => {
                return (
                  <Pressable
                    key={item?.id}
                    onPress={() => {
                      setModalVisible(false);
                      navigation.navigate('map', {data: item});
                    }}
                    style={{
                      height: 50,
                      width: '90%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      alignSelf: 'center',
                      flexDirection: 'row',
                      borderWidth: 1,
                      borderColor: 'grey',
                      paddingHorizontal: '5%',
                      borderRadius: 5,
                      marginBottom: 20,
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        fontFamily: Theme.fontFamily.regular,
                        fontSize: 14,
                      }}>
                      {item?.route_name}
                    </Text>
                    <Icon
                      name="direction-sign"
                      type="fontisto"
                      color={'black'}
                      size={18}
                    />
                  </Pressable>
                );
              })}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};
export default Home;
