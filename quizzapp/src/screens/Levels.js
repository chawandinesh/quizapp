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
export default function Levels(props) {
  const {section} = props.route.params

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
            onPress={() => props.navigation.goBack()}
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
             Selected Level
          </Text>
        </View>
        <View>
          <Text></Text>
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
        <View
          style={{
            width: width,
            height: height * 0.9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
              <Text style={{fontSize: height * 0.035 , fontWeight:'bold'}}>
                  You are selected <Text style={{color:'#f58', fontSize: height * 0.04}}>{section}</Text>
              </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('QuizScreen', {section: section})}
                style={{
                  height: height * 0.1,
                  width: height * 0.25,
                  borderTopRightRadius: height * 0.05,
                  borderBottomLeftRadius: height * 0.05,
                  backgroundColor: '#6ec9cc',
                  borderBottomWidth: width * 0.02,
                  borderLeftWidth: width * 0.01,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: height * 0.02,
                }}>
                <Text style={{fontSize: height * 0.035, fontWeight: 'bold'}}>
                  continue
                </Text>
              </TouchableOpacity>
              <View></View>
            </View>
          {/* ))} */}
        </View>
      </ImageBackground>
    </View>
  );
}
