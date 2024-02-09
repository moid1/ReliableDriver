import React from 'react';
import {StyleSheet, View, Pressable, Text,Linking} from 'react-native';
import Pdf from 'react-native-pdf';
import {Icon} from '@rneui/themed';
import Theme from '../../../Theme/Theme';
const PDFViewer = ({navigation, route}) => {
  const data = route?.params?.data;
  console.log('response from params ==', data);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          height: 60,
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
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

        <Pressable
        onPress={()=>{Linking.openURL(`https://portal.reliabletiredisposalhq.com/${data}`)}}
          style={{
            height: 40,
            width: 60,
            borderRadius: 10,
            backgroundColor: Theme.colors.primaryColor,
            // borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Text style={{color:"white",fontSize:12,fontFamily:Theme.fontFamily.medium}}>Print</Text>
          </Pressable>
      </View>
      <Pdf
        trustAllCerts={false}
        source={{
          uri: `https://portal.reliabletiredisposalhq.com/${data}`,
          cache: true,
        }}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(
            `Link pressed: https://portal.reliabletiredisposalhq.com/${data}`,
          );
        }}
        style={{flex: 1,backgroundColor:"white"}}
      />
    </View>
  );
};

export default PDFViewer;
