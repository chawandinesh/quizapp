import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export default function ChooseOptionsPage() {
  return (
    <View style={{height: height, width: width}}>
      <View
        style={{
          height: height * 0.07,
          alignItems: 'center',
          width: width,
          flexDirection: 'row',
          backgroundColor: '#1a9aad',
          justifyContent: 'space-between',
        }}>
        <View style={{paddingLeft: width * 0.02}}>
          <Icon
            name="ios-arrow-back-circle"
            type="ionicon"
            size={height * 0.04}
            color="#fff"
          />
        </View>
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: height * 0.04,
            }}>
            Subject
          </Text>
        </View>
        <View style={{paddingRight: width * 0.02}}>
          <Icon
            name="info-with-circle"
            type="entypo"
            size={height * 0.04}
            color="#fff"
          />
        </View>
      </View>
      <ImageBackground
        source={require('../assets/quiz1.png')}
        style={{
          height: height * 0.95,
          width: width,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
      
      </ImageBackground>
    </View>
  );
}
