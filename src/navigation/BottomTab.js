import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PatientHome from '../screens/main/home';
import Patientsetting from '../screens/main/setting';
import Theme from '../Theme/Theme';
import PatientAppointments from '../screens/main/orders';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Theme.colors.primaryColor,
          elevation: 0,
          borderRadius: 40,
          position: 'absolute',
          height: 70,
          marginBottom: 10,
          width: '90%',
          alignSelf: 'center',
          marginHorizontal: '5%',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={PatientHome}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/home.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30, marginBottom: 5}}
                />
                <View
                  style={{
                    height: 2,
                    width: 22,
                    backgroundColor: Theme.colors.whiteColor,
                  }}></View>
              </View>
            ) : (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/home.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </View>
            ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={PatientAppointments}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/appoint.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30, marginBottom: 5}}
                />
                <View
                  style={{
                    height: 2,
                    width: 22,
                    backgroundColor: Theme.colors.whiteColor,
                  }}></View>
              </View>
            ) : (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/appoint.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </View>
            ),
        }}
      /> */}
      <Tab.Screen
        name="Setting"
        component={Patientsetting}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/setting.png')}
                  resizeMode="contain"
                  style={{height: 30, marginBottom: 5, width: 30}}
                />
                <View
                  style={{
                    height: 2,
                    width: 22,
                    backgroundColor: Theme.colors.whiteColor,
                  }}></View>
              </View>
            ) : (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/bottom/setting.png')}
                  resizeMode="contain"
                  style={{height: 30, width: 30}}
                />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
