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
  ScrollView,
} from 'react-native';
import Theme from '../../../Theme/Theme';
import {Icon} from '@rneui/themed';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import Input from '../../../components/input/Input';
const {height, width} = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Input2 from '../../../components/input/textField';
const CreateOrder = ({navigation}) => {
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        flex: 1,
        backgroundColor: Theme.colors.whiteColor,
      }}>
      <View
        style={{
          height: 70,
          width: '100%',
          paddingHorizontal: '2.5%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
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
        <Text
          style={{
            fontFamily: Theme.fontFamily.medium,
            fontSize: 19,
            color: Theme.colors.textColor,
          }}>
          Create Order
        </Text>
        <Pressable
          style={{
            height: 50,
            width: 50,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}></Pressable>
      </View>
      <View style={{width: '95%', alignSelf: 'center',marginTop:20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
        <Input2 placeholder={'Search Customers'} />
        <Input2 placeholder={'Business Name'} />
        <Input2 placeholder={'Date'} />
        <Input2 placeholder={'Address'} />
        <Input2 placeholder={'Phone #'} />
        <Input2 placeholder={'POC Name'} />
        <Input2 placeholder={'Email'} />
        <Input2 placeholder={'Load Type'} />
        <Input2 placeholder={'Box Value'} />
<Button title={'Submit'}/>

        </ScrollView>
      </View>
    </View>
  );
};
export default CreateOrder;
