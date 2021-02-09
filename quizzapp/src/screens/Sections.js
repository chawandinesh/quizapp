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
export default function Sections(props) {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          height: height * 0.13,
          width: width * 0.6,
          backgroundColor: '#f0eebd',
          borderBottomWidth: 5,
          borderLeftWidth: 3,
          borderWidth: 2,
          marginBottom: height * 0.06,
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomLeftRadius: width * 0.05,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Levels',{section:item})}
          activeOpacity={0.5}
          style={{
            height: height * 0.1,
            width: width * 0.54,
            backgroundColor: '#1a9aad',
            borderWidth: 1,
            borderBottomWidth: 3,
            borderBottomColor: '#fff',
            borderRightWidth: 6,
            borderBottomLeftRadius: width * 0.04,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}>
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
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
            Levels
          </Text>
        </View>
        <View>
          <Text></Text>
        </View>
      </View>
      <ImageBackground
        source={require('../assets/quiz2.png')}
        style={{
          height: height,
          width: width,
          alignItems: 'flex-end',
        }}>
            <View style={{height: height ,marginTop: height * 0.13}}>
            <FlatList
            data={[
                'Level 1',
                'Level 2',
                'Level 3',
                'Level 4',
            ]}
            keyExtractor={(item, idx) => idx.toString()}
            renderItem={renderItem}
            />

            </View>
      </ImageBackground>
    </View>
  );
}
