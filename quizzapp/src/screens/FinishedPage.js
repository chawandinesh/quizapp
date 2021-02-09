import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  NativeMethods,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
  NativeModules
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Button} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export default function FinishedPage(props) {
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={modalVisible? 1 : 0}
        source={require('../assets/bg4.jpg')}
        style={{
          height: height,
          paddingTop: HEIGHT,
          width: width,
          // backgroundColor: '#56189e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
     
        <View style={{height: height * 0.6, justifyContent:'center'}}>
          <Image
            source={require('../assets/quizz3.png')}
            style={{
              height: height * 0.2,
              width: height * 0.2,
              alignSelf: 'center',
            }}
          />
          <Text
            style={{
              fontSize: width * 0.1,
              textAlign:'center',
              fontWeight: 'bold',
              color: '#fff',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,
            }}>
            Quiz Finished Successfully
          </Text>
          
        </View>
        <View style={{justifyContent:'space-between',height: height * 0.4,justifyContent:'space-around',width: width, flexDirection:'row'}}>
        <View style={{paddingTop: height * 0.1}}>
              <Icon name="restart" onPress={() => props.navigation.navigate('QuizScreen')} type="material-community" size={height * 0.08} color="#fff"/>
              <Text style={{fontSize: height * 0.03, fontWeight:'bold', color:'#ffd'}}>Restart</Text>
          </View>
          <View style={{paddingTop: height * 0.1}}>
              <Icon name="ios-home" onPress={() => props.navigation.navigate('HomeScreen')} type="ionicon" size={height * 0.07} color="#fff"/>
              <Text style={{fontSize: height * 0.03, fontWeight:'bold', color:'#ffd'}}>Go Home</Text>
          </View>

        </View>
        {/* {ModalPage()} */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  // Flex to fill, position absolute,
  // Fixed left/top, and the width set to the window width
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    // opacity: 0.5,
    backgroundColor: 'black',
    width: width * 0.4,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 35,
    width: width * 0.9,
    height: height * 0.8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    width: width * 0.4,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
