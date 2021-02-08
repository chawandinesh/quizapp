import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Button} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  const [modalVisible, setModalVisible] = React.useState(false);

  const ModalPage = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>About Page</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        blurRadius={modalVisible ? 1 : 0}
        source={require('../assets/bg4.jpg')}
        style={{
          height: height,
          width: width,
          // backgroundColor: '#56189e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{height: height * 0.2, width: width, marginTop: height * 0.08, alignItems: 'flex-end'}}>
          <TouchableOpacity
            style={{padding: height * 0.02}}
            onPress={() => setModalVisible(true)}>
            <Icon
              name="info-with-circle"
              type="entypo"
              color="#fff"
              size={height * 0.05}
            />
          </TouchableOpacity>
        </View>
        <View style={{height: height * 0.8}}>
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
              fontSize: width * 0.3,
              fontWeight: 'bold',
              color: '#fff',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: {width: -1, height: 1},
              textShadowRadius: 10,
            }}>
            Quizz
          </Text>
          <Button
            title="Start"
            onPress={() => props.navigation.navigate('QuizScreen')}
            raised
            containerStyle={{
              width: width * 0.7,
              height: height * 0.07,
              alignSelf: 'center',
            }}
            titleStyle={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#000',
            }}
            buttonStyle={{
              height: height * 0.07,
              borderRadius: height * 0.1,
              backgroundColor: '#dff',
            }}
          />
        </View>
        {ModalPage()}
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
