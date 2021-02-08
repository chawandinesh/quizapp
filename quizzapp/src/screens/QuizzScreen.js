import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
const {height, width} = Dimensions.get('window');
export default function QuizzScreen() {
  return (
    <ImageBackground
      blurRadius={1}
      style={{height: height, width}}
      source={require('../assets/bg5.jpg')}>
      <View
        style={{
          width,
          height: height * 0.2,
          borderTopRightRadius: height * 0.05,
          borderTopLeftRadius: height * 0.05,
          alignItems: 'center',
          backgroundColor: '#fff',
          justifyContent: 'center',
          marginTop: height * 0.05,
          borderWidth: 3,
          borderColor: 'purple',
        }}>
        <View
          style={{
            width: width * 0.9,
            borderTopRightRadius: height * 0.1,
            borderTopLeftRadius: height * 0.1,
            borderBottomLeftRadius: height * 0.1,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 2,
            borderColor: '#676',
            height: height * 0.15,
            backgroundColor: '#753458',
          }}>
          <Text
            style={{
              fontSize: height * 0.02,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            Identify the Fruit?
          </Text>
        </View>
      </View>
      <View
        style={{
          height: height * 0.1,
          width: width,
          backgroundColor: 'rgba(255,255,255,0.5)',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <View>
          <Image
            source={require('../assets/guava.png')}
            style={{height: height * 0.12, width: height * 0.12}}
          />
        </View>
        <View>
          <Text style={{fontSize: height * 0.03}}>Choose correct answer</Text>
        </View>
      </View>
      <View
        style={{
          height: height * 0.63,
          width: width * 0.9,
        //   backgroundColor:"rgba(0,0,0,0.2)",
          alignSelf: 'center',
        }}>
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'space-between',
              marginTop: height * 0.02,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View>
              <Image
                style={{height: height * 0.05, width: height * 0.05}}
                source={require('../assets/guava.png')}
              />
            </View>
            <View style={{width: width * 0.75, height: height * 0.07, backgroundColor:'#94512b'}}>
              <Text> Guava</Text>
            </View>
            <View></View>
          </TouchableOpacity>
        </View>

        <View></View>
        <View></View>
        <View></View>
      </View>
    </ImageBackground>
  );
}
