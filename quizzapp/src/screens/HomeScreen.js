import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Alert,
  Modal,
  NativeModules,
} from 'react-native';
import {Divider, Rating, AirbnbRating, Icon} from 'react-native-elements';
import {Button} from 'react-native-elements';
const {height, width} = Dimensions.get('window');
export default function HomeScreen(props) {
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisibleRate, setModalVisibleRate] = React.useState(false);

  const RateModalPage = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleRate}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredViewRate}>
          <View style={styles.modalViewRate}>
            <Image
              style={{
                width: width * 0.15,
                height: width * 0.2,
                margin: height * 0.01,
              }}
              resizeMode="stretch"
              source={require('../assets/img.png')}
            />
            <Text
              style={[
                {...styles.modalTextRate, fontSize: 20, fontWeight: 'bold'},
              ]}>
              Enjoying Smart Master?
            </Text>
            <Text style={{fontSize: 15}}>Tap a star to rate it on the</Text>
            <Text style={{fontSize: 15}}>App Store.</Text>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            <View style={{paddingVertical: 10}}>
              <AirbnbRating showRating={false} />
            </View>
            <Divider
              style={{backgroundColor: 'black', height: 1, width: width * 0.8}}
            />

            {/* <View style={{borderWidth:1,width: width * 0.9, borderColor:'gray'}}></View> */}
            <TouchableOpacity
              // style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisibleRate(!modalVisibleRate);
              }}>
              <Text
                style={[
                  {
                    ...styles.textStyleRate,
                    color: '#000',
                    fontSize: height * 0.024,
                    paddingTop: height * 0.012,
                  },
                ]}>
                Not Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
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
              <Text
                style={[
                  {
                    ...styles.modalText,
                    color: 'darkred',
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                    textDecorationStyle: 'solid',
                    textDecorationLine: 'underline',
                  },
                ]}>
                About Us
              </Text>

              {/* <View> */}
              <Text
                style={[
                  {
                    ...styles.modalText,
                    color: '#08f',
                    fontSize: height * 0.026,
                    fontWeight: 'bold',
                  },
                ]}>
                There are four levels of quiz in this app.
              </Text>
              <Text
                style={[
                  {
                    ...styles.modalText,
                    color: '#000',
                    fontSize: height * 0.026,
                    fontWeight: 'bold',
                  },
                ]}>
                Out of four options, user will have to select the correct
                answer. {'\n'}
                {'\b'}
                If the answer selected by the user will be correct ,the answer
                will be marked as correct and user will rewarded{' '}
                <Text style={{color: 'green'}}>+1 mark</Text>. {'\n'}
                {'\b'}
                If the answer selected by the user will be incorrect ,the answer
                will be marked as incorrect and user will rewarded{' '}
                <Text style={{color: 'red'}}>0 mark</Text>.
              </Text>
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
      <StatusBar barStyle="light-content" />
      <ImageBackground
        // blurRadius={modalVisible ? 1 : 0}
        source={require('../assets/quiz3.png')}
        style={{
          height: height,
          paddingTop: HEIGHT,
          width: width,
          // backgroundColor: '#56189e',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <View
          style={{
            height: height * 0.2,
            width: width,
            marginTop: height * 0.08,
            alignItems: 'flex-end',
          }}>
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
        </View> */}
        <View style={{height: height * 0.8, justifyContent: 'center'}}>
          <Image
            source={require('../assets/quizz3.png')}
            style={{
              height: height * 0.2,
              width: height * 0.2,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              height: height * 0.2,
              padding: height * 0.01,
              borderRadius: height * 0.02,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontSize: width * 0.14,
                height: height * 0.1,
                fontWeight: 'bold',
                // backgroundColor: '#fff',
                borderRadius: height * 0.03,
                color: '#05f',
                textShadowColor: 'rgba(255,255, 255, 1)',
                textShadowOffset: {width: -3, height: 4},
                textShadowRadius: 10,
              }}>
              Smart Master
            </Text>
          </View>
          <Button
            title="Start"
            onPress={() => props.navigation.navigate('Sections')}
            raised
            containerStyle={{
              width: width * 0.7,
              marginTop: height * 0.03,
              height: height * 0.07,
              alignSelf: 'center',
            }}
            titleStyle={{
              fontSize: height * 0.03,
              fontWeight: 'bold',
              color: '#fff',
            }}
            buttonStyle={{
              height: height * 0.07,
              borderRadius: height * 0.1,
              backgroundColor: '#56189e',
            }}
          />
        </View>
        {ModalPage()}
        {RateModalPage()}
      </ImageBackground>

      <View
        style={{
          position: 'absolute',
          bottom: height * 0.04,
          left: width * 0.1,
        }}>
        <TouchableOpacity
          style={{
            padding: height * 0.01,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffd',
            borderRadius: height * 0.01,
            borderWidth: 1,
            width: width * 0.3,
            height: height * 0.08,
            // flexDirection: 'row',
          }}
          onPress={() => {
            setModalVisibleRate(true);
          }}>
          <Icon
            name="star"
            type="antdesign"
            color="gold"
            size={height * 0.04}
          />
          <Text
            style={{
              // paddingLeft: width * 0.03,
              fontWeight: 'bold',
              fontSize: height * 0.028,
            }}>
            Rate app
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          position: 'absolute',
          bottom: height * 0.04,
          right: width * 0.1,
        }}>
        <TouchableOpacity
          style={{
            padding: height * 0.01,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffd',
            borderRadius: height * 0.01,
            borderWidth: 1,
            width: width * 0.3,
            height: height * 0.08,
            // flexDirection: 'row',
          }}
          onPress={() => {
            setModalVisible(true);
          }}>
          <Icon
            name="info-with-circle"
            type="entypo"
            color="purple"
            size={height * 0.04}
          />

          <Text
            style={{
              // paddingLeft: width * 0.03,
              fontWeight: 'bold',
              fontSize: height * 0.028,
            }}>
            About Us
          </Text>
        </TouchableOpacity>
      </View>
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

  //

  centeredViewRate: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalViewRate: {
    margin: 20,
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButtonRate: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyleRate: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextRate: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
