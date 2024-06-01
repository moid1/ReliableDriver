import React, {useState, useRef, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image,} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {Icon} from '@rneui/themed';
import {useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');
import Geolocation from '@react-native-community/geolocation';

import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';
import Theme from '../../../Theme/Theme';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.04;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
// import Tts from 'react-native-tts';
import Voice from '@react-native-voice/voice';
const MapScreen = ({navigation, route}) => {
  const routedata = route?.params?.data;
  // console.log('response from params data ===', routedata);
  const mapRef = useRef();
  const userData = useSelector(state => state.auth.userAccessKey);

  const [pickuplocation, setPickupLocation] = useState({
    latitude: 33.6844,
    longitude: 73.0479,
  });
  const [dropLocation, setdropLocation] = useState({
    latitude: 31.5204,
    longitude: 74.3587,
  });
  const [currentLocation, setCurrentLocation] = useState('');

  const [allLocation, setAllLocations] = useState([]);
  const [directions, setDirections] = useState([]);
  const [destination, setDestination] = useState({latitude: 0, longitude: 0});
  const [distanceToNextTurn, setDistanceToNextTurn] = useState(null);
  useEffect(() => {
    // Start voice recognition when component mounts
    Voice.start('en-US');
    
    // Cleanup voice recognition when component unmounts
    return () => Voice.destroy();
  }, []);
  useEffect(() => {
    // Assume destination coordinates are set somewhere in the component's state
    const destinationCoordinates = {latitude: 32.0740, longitude: 72.6861}; // Example destination coordinates (San Francisco)

    // Track user's location
    const watchId = Geolocation.watchPosition(
      position => {
        const userCoordinates = {
          latitude: pickuplocation?.latitude,
          longitude: pickuplocation?.longitude,
        };

        // Calculate distance between user's location and destination
        const distance = calculateDistance(
          userCoordinates,
          destinationCoordinates,
        );

        // Set distance to next turn based on some logic
        setDistanceToNextTurn(distance);
        speakTurnInstructions(distance);
      },
      error => console.error('Error tracking user location:', error),
      {enableHighAccuracy: true, distanceFilter: 10},
    );

    return () => {
      Geolocation.clearWatch(watchId); // Clean up watchId
    };
  }, []);

  // Function to calculate distance between two coordinates (Haversine formula)
  const calculateDistance = (coord1, coord2) => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (coord1.latitude * Math.PI) / 180;
    const φ2 = (coord2.latitude * Math.PI) / 180;
    const Δφ = ((coord2.latitude - coord1.latitude) * Math.PI) / 180;
    const Δλ = ((coord2.longitude - coord1.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // Distance in meters
  };
  useEffect(() => {
    Geocoder.init('AIzaSyATph3BCKxFTZucYVofwV2tuUIB-YXqHFg');
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
      `https://manifest.reliabletiredisposal.online/api/get-route-by-id/${routedata?.id}`,
      requestOptions,
    )
      .then(response => response.text())
      .then(async result => {
        const data = JSON.parse(result);

        if (data?.data?.length > 0) {
          const geocodingPromises = data.data.map(async item => {
            console.log(
              'response from single item =>>',
              item?.customer
            );
            try {
              const response = await Geocoder.from(item?.customer?.address);
              const {lat, lng} = response.results[0].geometry.location;
              // console.log('response from latitude and longitude ==', lat, lng);

              return {
                address: item?.customer?.address,
                latitude: lat,
                longitude: lng,
              };
            } catch (error) {
              console.error('Error fetching geocode:', error);
              return null;
            }
          });

          const locations = await Promise.all(geocodingPromises);

          const validLocations = locations.filter(
            location => location !== null,
          );

          console.log('Array of locations:', validLocations);
          setAllLocations(validLocations);
        }
      })
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
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
  }, [pickuplocation?.latitude]);
  useEffect(() => {
    mapRef.current.animateToRegion({
      latitude: pickuplocation.latitude,
      longitude: pickuplocation.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    });
  }, [pickuplocation?.latitude]);
  const fetchTime = (d, t) => {
    console.log('data ===>>>', d, t);
  };
  const speakTurnInstructions = (distance) => {
    if (distance !== null) {
      if (distance < 200) { // Speak instructions when distance is less than 200 meters
        Voice.speak('Turn right in 200 meters');
      } else if (distance < 100) { // Speak instructions when distance is less than 100 meters
        Voice.speak('Turn left in 100 meters');
      }
    }
  };
  const metersToMiles = (meters) => {
    return meters / 1609.34;
  };
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: Theme.colors.whiteColor,
      }}>
      <View
        style={{
          height: (height / 100) * 8,
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
          Map
        </Text>
      
        <Icon name="arrowleft" type="antdesign" color={'transparent'} />
      </View>
       <View style={{ height: (height / 100) * 8,width:"100%",backgroundColor:"white",alignItems:"center",justifyContent:"center",}}>
          {distanceToNextTurn !== null && (
          <Text style={{color:"black",fontSize:14,fontFamily:Theme.fontFamily.medium}}>
           {metersToMiles(distanceToNextTurn) > 0.124274
            ? `Turn right in ${Math.round(metersToMiles(distanceToNextTurn) * 0.124274)} miles`
            : metersToMiles(distanceToNextTurn) > 0.0621371
            ? `Turn left in ${Math.round(metersToMiles(distanceToNextTurn) * 0.0621371)} miles`
            : 'Approaching the turn'}
          </Text>
        )}
          </View> 
      <View
        style={{
          height: (height / 100) * 84,
          width: '100%',
          position: 'absolute',
          bottom: 0,
        }}>
        
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={{
            latitude: pickuplocation.latitude,
            longitude: pickuplocation.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}>
          <Marker
            coordinate={{
              latitude: pickuplocation.latitude,
              longitude: pickuplocation.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Image
              source={require('../../../assets/17.png')}
              style={{height: 40, width: 30}}
              resizeMode={'contain'}
            />
          </Marker>
          {/* <Marker
            coordinate={{latitude: 32.074, longitude: 72.6861}}
            title="Destination"
          /> */}
          {allLocation?.map((destination, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: destination?.latitude,
                longitude: destination?.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}>
              <View style={{height: 30, width: 30, backgroundColor: 'red',alignSelf:"center",justifyContent:"center",alignItems:'center',borderRadius:20}}>
                <Text
                  style={{
                    fontFamily: Theme.fontFamily.semibold,
                    fontSize: 18,
                    color: 'white',
                  }}>
                  {index+1}
                </Text>
              </View>
            </Marker>
          ))}
          {allLocation?.map((destination, index) => (
            <MapViewDirections
              key={index}
              origin={{
                latitude: pickuplocation.latitude,
                longitude: pickuplocation.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              // destination={destination}
              destination={{
                latitude: destination?.latitude,
                longitude: destination?.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              apikey={'AIzaSyATph3BCKxFTZucYVofwV2tuUIB-YXqHFg'}
              strokeWidth={2}
              strokeColor="blue"
              // onReady={result => {
              //   // console.log(`Distance: ${result.distance} km`);
              //   // console.log(`Duration: ${result.duration} min.`);
              //   fetchTime(result.distance, result.duration),
              //     mapRef.current.fitToCoordinates(result.coordinates, {
              //       edgePadding: {
              //         right: 30,
              //         bottom: 300,
              //         left: 30,
              //         top: 100,
              //       },
              //     });
              // }}
              // onError={errorMessage => {
              //   console.log('GOT AN ERROR',errorMessage);
              // }}
            />
          ))}

          {/* <MapViewDirections
            destination={{
              latitude: 32.074, longitude: 72.6861,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            origin={{
              latitude: pickuplocation.latitude,
              longitude: pickuplocation.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            apikey={'AIzaSyATph3BCKxFTZucYVofwV2tuUIB-YXqHFg'}
            strokeWidth={2}
            strokeColor="blue"
            optimizeWaypoints={true}
               onReady={result => {
                // console.log(`Distance: ${result.distance} km`);
                // console.log(`Duration: ${result.duration} min.`);
                fetchTime(result.distance, result.duration),
                  mapRef.current.fitToCoordinates(result.coordinates, {
                    edgePadding: {
                      right: 30,
                      bottom: 300,
                      left: 30,
                      top: 100,
                    },
                  });
              }}
              onError={errorMessage => {
                console.log('GOT AN ERROR',errorMessage);
              }}
            // onStart={params => {
            //   console.log(
            //     `Started routing between "${params.origin}" and "${params.destination}"`,
            //   );
            // }}
           
          /> */}
        </MapView>
      </View>
    </View>
  );
};

export default MapScreen;
