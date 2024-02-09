// import React from 'react';

// import {View, Text, Image, ScrollView, TextInput} from 'react-native';
// import Theme from '../../../Theme/Theme';
// import {Icon} from '@rneui/themed';
// import Button from '../../../components/Button/Button';
// const Settings = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
//       <View
//         style={{
//           height: 60,
//           width: '90%',
//           alignSelf: 'center',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 20,
//             fontFamily: Theme.fontFamily.semibold,
//           }}>
//           Settings
//         </Text>
//       </View>

//       <View
//         style={{
//           height: 60,
//           width: '90%',
//           alignSelf: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           paddingHorizontal: 10,
//           backgroundColor: 'white',
//           marginTop: 20,
//           borderRadius: 10,
//         }}>
//         <Image
//           style={{height: 30, width: 30,tintColor:Theme.colors.primaryColor}}
//           source={require('../../../assets/location.png')}
//         />
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 14,
//             fontFamily: Theme.fontFamily.semibold,
//             width: '68%',
//           }}>
//           Allow location tracker
//         </Text>
//         <View
//           style={{
//             height: 30,
//             width: 50,
//             backgroundColor: Theme.colors.primaryColor,
//             borderRadius: 20,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{
//               height: 16,
//               width: 16,
//               backgroundColor: Theme.colors.primaryColor,
//               borderRadius: 20,
//               margin: 2,
//             }}></View>
//           <View
//             style={{
//               height: 26,
//               width: 26,
//               backgroundColor: 'white',
//               borderRadius: 20,
//               margin: 2,
//             }}></View>
//         </View>
//       </View>
//       <View
//         style={{
//           height: 60,
//           width: '90%',
//           alignSelf: 'center',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           paddingHorizontal: 10,
//           backgroundColor: 'white',
//           marginTop: 20,
//           borderRadius: 10,
//         }}>
//         <Image
//          style={{height: 30, width: 30,tintColor:Theme.colors.primaryColor}}
//           source={require('../../../assets/lock.png')}
//         />
//         <Text
//           style={{
//             color: 'black',
//             fontSize: 14,
//             fontFamily: Theme.fontFamily.semibold,
//             width: '68%',
//           }}>
//           Share my contact
//         </Text>
//         <View
//           style={{
//             height: 30,
//             width: 50,
//             backgroundColor: Theme.colors.primaryColor,
//             borderRadius: 20,
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View
//             style={{
//               height: 16,
//               width: 16,
//               backgroundColor: Theme.colors.primaryColor,
//               borderRadius: 20,
//               margin: 2,
//             }}></View>
//           <View
//             style={{
//               height: 26,
//               width: 26,
//               backgroundColor: 'white',
//               borderRadius: 20,
//               margin: 2,
//             }}></View>
//         </View>
//       </View>
//       <View
//         style={{
//           height: 180,
//           width: '90%',
//           alignSelf: 'center',
//           borderRadius: 10,
//           backgroundColor: 'white',
//           marginTop: 20,
//         }}>
//         <View
//           style={{
//             height: 60,

//             alignSelf: 'center',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             width: '95%',
//             marginHorizontal: '2.5%',
//             backgroundColor: 'white',
//             borderBottomColor: '#F5F5F5',
//             borderBottomWidth: 2,
//             borderRadius: 10,
//           }}>
//           <Image
//           style={{height: 30, width: 30,tintColor:Theme.colors.primaryColor}}
//             source={require('../../../assets/privacy.png')}
//           />
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 14,
//               fontFamily: Theme.fontFamily.semibold,
//               width: '70%',
//             }}>
//             Privacy policy
//           </Text>
//           <Icon
//             name="chevron-small-right"
//             type="entypo"
//             color={'grey'}
//             size={28}
//           />
//         </View>
//         <View
//           style={{
//             height: 60,

//             alignSelf: 'center',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             width: '95%',
//             marginHorizontal: '2.5%',
//             backgroundColor: 'white',
//             borderBottomColor: '#F5F5F5',
//             borderBottomWidth: 2,
//             borderRadius: 10,
//           }}>
//           <Image
//          style={{height: 30, width: 30,tintColor:Theme.colors.primaryColor}}
//             source={require('../../../assets/terms.png')}
//           />
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 14,
//               fontFamily: Theme.fontFamily.semibold,
//               width: '70%',
//             }}>
//             Terms of services
//           </Text>
//           <Icon
//             name="chevron-small-right"
//             type="entypo"
//             color={'grey'}
//             size={28}
//           />
//         </View>
//         <View
//           style={{
//             height: 60,

//             alignSelf: 'center',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//             width: '95%',
//             marginHorizontal: '2.5%',
//             backgroundColor: 'white',

//             borderRadius: 10,
//           }}>
//           <Image
//              style={{height: 30, width: 30,tintColor:Theme.colors.primaryColor}}
//             source={require('../../../assets/question.png')}
//           />
//           <Text
//             style={{
//               color: 'black',
//               fontSize: 14,
//               fontFamily: Theme.fontFamily.semibold,
//               width: '70%',
//             }}>
//             Help & supports
//           </Text>
//           <Icon
//             name="chevron-small-right"
//             type="entypo"
//             color={'grey'}
//             size={28}
//           />
//         </View>
//       </View>
//       <View
//         style={{
//           height: 30,
//           width: '40%',
//           alignSelf: 'center',
//           position: 'absolute',
//           bottom: '20%',
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//         <Image
//           style={{height: 30, width: 30}}
//           resizeMode="contain"
//           source={require('../../../assets/logout.png')}
//         />
//         <Text
//           style={{
//             color: '#EB5757',
//             fontSize: 18,
//             fontFamily: Theme.fontFamily.semibold,
//             marginLeft: 10,
//           }}>
//           Log out
//         </Text>
//       </View>
//     </View>
//   );
// };
// export default Settings;

import React from 'react';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Pressable,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import {types} from '../../../store/actiontypes';
import {useDispatch} from 'react-redux';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';

const Settings = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: types.LOGIN.success,
      payload: {},
    });
    Toast.show({
      type: ALERT_TYPE.SUCCESS,
      title: 'Success',
      textBody: 'Logout successfully!',
      autoClose: 1500,
    });
    navigation.replace('splash');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#F5F5F5'}}>
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontFamily: Theme.fontFamily.semibold,
          }}>
          Settings
        </Text>
      </View>

      <View
        style={{
          height: 120,
          width: '90%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: 'white',
          marginTop: 20,
        }}>
        {/* <Pressable
          //  onPress={()=> navigation.navigate('reset')}
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 2,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/privacy.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Reset Password
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </Pressable> */}
        <View
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 2,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/privacy.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Privacy policy
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </View>
        <View
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',
            borderBottomColor: '#F5F5F5',
            borderBottomWidth: 2,
            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/terms.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Terms of services
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </View>
        {/* <Pressable
          // onPress={() => navigation.navigate('report')}
          style={{
            height: 60,

            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '95%',
            marginHorizontal: '2.5%',
            backgroundColor: 'white',

            borderRadius: 10,
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: Theme.colors.primaryColor,
            }}
            source={require('../../../assets/question.png')}
          />
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontFamily: Theme.fontFamily.semibold,
              width: '70%',
            }}>
            Report a problem
          </Text>
          <Icon
            name="chevron-small-right"
            type="entypo"
            color={'grey'}
            size={28}
          />
        </Pressable> */}
      </View>
      <Pressable
      onPress={()=> handleLogout()}
        style={{
          height: 30,
          width: '40%',
          alignSelf: 'center',
          position: 'absolute',
          bottom: '20%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: 30, width: 30}}
          resizeMode="contain"
          source={require('../../../assets/logout.png')}
        />
        <Text
          style={{
            color: '#EB5757',
            fontSize: 18,
            fontFamily: Theme.fontFamily.semibold,
            marginLeft: 10,
          }}>
          Log out
        </Text>
      </Pressable>
    </View>
  );
};
export default Settings;
