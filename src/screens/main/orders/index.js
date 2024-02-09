import React, {useState} from 'react';

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
import Button from '../../../components/Button/Button';
const AllOrder = () => {
  const [active, setActive] = useState('upcoming');
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
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
          All Orders
        </Text>
      </View>

      <View
        style={{
          height: 50,
          width: '90%',
          borderRadius: 10,
          backgroundColor: Theme.colors.whiteColor,
          backgroundColor: 'white',
          alignSelf: 'center',
          flexDirection: 'row',
          marginTop: 10,
          borderWidth: 1,
          borderColor: 'grey',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
        }}>
        <TextInput
          placeholder="Search"
          style={{
            color: 'black',
            fontSize: 14,
            fontFamily: Theme.fontFamily.medium,
            width: '90%',
            height: '100%',
          }}
        />
        <Icon name="search1" type="antdesign" color={'grey'} />
      </View>
      <>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',

            elevation: 1,
            backgroundColor: 'white',
            paddingVertical: 15,
            borderRadius: 15,
            marginTop: 15,
      
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 200,
              width: 5,
              backgroundColor: Theme.colors.primaryColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
            
              width: '93%',
              alignSelf: 'center',
              marginRight: '2%',
            }}>
            <Text
              style={{
                color: Theme.colors.textColor,
                fontFamily: Theme.fontFamily.semibold,
              }}>
              Business Name:{' '}
              <Text
                style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                anetra tire shop
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
                Cindy
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Driver:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                  Gabirel
                </Text>
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Qty:{' '}
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                    fontSize: 14,
                  }}>
                  1
                </Text>
              </Text>
              <Text
                style={{
                  color: 'green',
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Active
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
                  }}>
                  16/06/2023
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
                  16/06/2023
                </Text>
              </View>
            </View>
            <Pressable
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
                Check On Map
              </Text>
            </Pressable>
          </View>
        </View>
        <View
          style={{
            width: '95%',
            alignSelf: 'center',

            elevation: 1,
            backgroundColor: 'white',
            paddingVertical: 15,
            borderRadius: 15,
            marginTop: 15,
      
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: 200,
              width: 5,
              backgroundColor: Theme.colors.primaryColor,
              borderRadius: 10,
            }}></View>
          <View
            style={{
            
              width: '93%',
              alignSelf: 'center',
              marginRight: '2%',
            }}>
            <Text
              style={{
                color: Theme.colors.textColor,
                fontFamily: Theme.fontFamily.semibold,
              }}>
              Business Name:{' '}
              <Text
                style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                anetra tire shop
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
                Cindy
              </Text>
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Driver:{' '}
                <Text
                  style={{fontFamily: Theme.fontFamily.regular, fontSize: 14}}>
                  Gabirel
                </Text>
              </Text>
              <Text
                style={{
                  color: Theme.colors.textColor,
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Qty:{' '}
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.regular,
                    fontSize: 14,
                  }}>
                  1
                </Text>
              </Text>
              <Text
                style={{
                  color: 'green',
                  fontFamily: Theme.fontFamily.semibold,
                  marginTop: 10,
                  fontSize: 14,
                }}>
                Active
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
                  }}>
                  16/06/2023
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
                  16/06/2023
                </Text>
              </View>
            </View>
            <Pressable
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
                Check On Map
              </Text>
            </Pressable>
          </View>
        </View>
      </>
    </View>
  );
};
export default AllOrder;
