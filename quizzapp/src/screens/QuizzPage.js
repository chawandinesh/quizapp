import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Pressable,
  StatusBar,
  NativeModules,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Button, Icon} from 'react-native-elements';
import Data from './data';
import FinishedPage from './FinishedPage';
const {height, width} = Dimensions.get('window');
export default function QuizzPage(props) {
  const {StatusBarManager} = NativeModules;
  const {HEIGHT} = StatusBarManager;
  const [optionState, setOptionState] = React.useState(false);
  const [questionCount, setQuestionCount] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState('');
  const [modalVisibleInfo, setModalVisibleInfo] = React.useState(false);
  const [blurBackground, setBlurBackground] = React.useState(false);

  const isFocused = useIsFocused();
  const getInitialData = async () => {
    setOptionState(false);
    setQuestionCount(0);
    setSelectedOption('');
    setModalData('');
    setModalVisible(false);
    setBlurBackground(false);
  };
  React.useEffect(() => {
    getInitialData();
  }, [props, isFocused]);
  const {section} = props.route.params;
  const [questions, setQuestions] = React.useState(Data[section]);
  const handleOption = (option) => {
    setOptionState(true);
    optionState ? null : setSelectedOption(option);
    if (questions.length === questionCount) return;
    if (option === questions[questionCount].correct) {
      if (questionCount === questions.length - 1) {
        console.log('rendering');
        setOptionState(false);
        setQuestionCount(0);
        setSelectedOption('');
        props.navigation.navigate('FinishedScreen');
      }
      setModalData('Correct');
      setBlurBackground(true);
      setModalVisible(true);
      setTimeout(() => {
        setModalVisible(false);
        setBlurBackground(false);
      }, 600);
      setQuestionCount(questionCount + 1);
      setOptionState('');
      setSelectedOption('');
    } else {
      setModalData('Incorrect');
      setModalVisible(true);
      setBlurBackground(true);
      setTimeout(() => {
        setModalVisible(false);
        setBlurBackground(false);
      }, 600);
    }
  };

  const questionBox = () => {
    return (
      <View
        style={{
          height: height * 0.35,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignSelf: 'flex-end', padding: height * 0.03}}>
          {/* <Icon
            name="questioncircle"
            type="antdesign"
            color="#fff"
            size={height * 0.04}
          /> */}
        </View>
        <View
          style={{
            height: height * 0.23,
            width: width * 0.95,
            backgroundColor: '#1a9aad',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: 1,
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: height * 0.2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              padding: height * 0.02,
              width: width * 0.9,
              borderColor: 'darkred',
              borderWidth: 2,
            }}>
            {questions[questionCount].image ? (
              <Image
                source={questions[questionCount].image}
                style={{
                  height: height * 0.1,
                  width: width * 0.2,
                  margin: height * 0.01,
                }}
              />
            ) : null}
            <Text
              style={{
                color: '#000',
                fontSize: height * 0.023,
                fontWeight: 'bold',
              }}>
              {questions[questionCount].name}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const optionsBox = () => {
    return (
      <View
        style={{
          height: height * 0.5,
          paddingTop: height * 0.05,
          width: width * 0.9,
          alignSelf: 'center',
        }}>
        <TouchableOpacity
          onPress={(e) => handleOption('A')}
          style={{
            minHeight: height * 0.07,
            marginTop: height * 0.03,
            borderBottomWidth: 5,
            borderBottomColor: 'gray',
            borderRightWidth: 3,
            borderRightColor: 'gray',
            height: 'auto',
            backgroundColor: '#defff6',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.1,
              height: width * 0.1,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: height * 0.03}}>A</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
              {questions[questionCount].options.A}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   activeOpacity={optionState ? 1 : 0.5}
          onPress={(e) => handleOption('B')}
          style={{
            minHeight: height * 0.07,
            marginTop: height * 0.03,
            height: 'auto',
            borderBottomWidth: 5,
            borderBottomColor: 'gray',
            borderRightWidth: 3,
            borderRightColor: 'gray',
            backgroundColor: '#defff6',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.1,
              height: width * 0.1,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: height * 0.03}}>B</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
              {questions[questionCount].options.B}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          //   activeOpacity={optionState ? 1 : 0.5}
          onPress={(e) => handleOption('C')}
          style={{
            minHeight: height * 0.07,
            marginTop: height * 0.03,
            height: 'auto',
            borderBottomWidth: 5,
            borderBottomColor: 'gray',
            borderRightWidth: 3,
            borderRightColor: 'gray',
            backgroundColor: '#defff6',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.1,
              height: width * 0.1,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: height * 0.03}}>C</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
              {questions[questionCount].options.C}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          //   activeOpacity={optionState ? 1 : 0.5}
          onPress={(e) => handleOption('D')}
          style={{
            minHeight: height * 0.07,
            marginTop: height * 0.03,
            height: 'auto',
            borderBottomWidth: 5,
            borderBottomColor: 'gray',
            borderRightWidth: 3,
            borderRightColor: 'gray',
            backgroundColor: '#defff6',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.1,
              height: width * 0.1,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold', fontSize: height * 0.03}}>D</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text style={{fontSize: height * 0.025, fontWeight: 'bold'}}>
              {questions[questionCount].options.D}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const modalBox = () => {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View>
                {modalData === 'Incorrect' ? (
                  <Icon
                    name="cross"
                    type="entypo"
                    color="darkred"
                    size={height * 0.08}
                  />
                ) : (
                  <Icon
                    name="check"
                    type="entypo"
                    color="darkgreen"
                    size={height * 0.08}
                  />
                )}
              </View>
              <Text
                style={[
                  {
                    ...styles.modalText,
                    color: modalData === 'Incorrect' ? 'darkred' : 'darkgreen',
                    fontSize: height * 0.03,
                  },
                ]}>
                {modalData}
              </Text>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  const ModalPage = () => {
    return (
      <View style={styles.centeredViewInfo}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisibleInfo}
          onRequestClose={() => {
            setModalVisibleInfo(!modalVisibleInfo);
            setBlurBackground(false);
          }}>
          <View style={styles.centeredViewInfo}>
            <View style={styles.modalViewInfo}>
              <Text
                style={[
                  {
                    ...styles.modalTextInfo,
                    fontSize: height * 0.03,
                    fontWeight: 'bold',
                  },
                ]}>
                Information
              </Text>
              <Text
                style={{
                  fontSize: height * 0.025,
                  color: 'green',
                  fontWeight: 'bold',
                }}>
                Choose the correct one from the given options to get score
              </Text>
              <Pressable
                style={[styles.buttonInfo, styles.buttonCloseInfo]}
                onPress={() => {
                  setModalVisibleInfo(!modalVisibleInfo);
                  setBlurBackground(false);
                }}>
                <Text style={styles.textStyleInfo}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  // if (questionCount === questions.length) {
  //   return <FinishedPage {...props} />;
  // }
  if (questions[questionCount] === undefined) return null;
  return (
    <View style={{opacity: blurBackground ? 0.5 : 1, height, width}}>
      <StatusBar barStyle="light-content" />
      <View
        style={{
          paddingTop: HEIGHT,
          height: height * 0.15,
          alignItems: 'center',
          width: width,
          flexDirection: 'row',
          backgroundColor: '#1a9aad',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{paddingLeft: width * 0.02}}
          onPress={() => props.navigation.goBack()}>
          <Icon
            name="ios-arrow-back-circle"
            type="ionicon"
            size={height * 0.04}
            color="#fff"
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: height * 0.04,
            }}>
            {section}
          </Text>
        </View>
        <View style={{paddingRight: width * 0.02}}>
          <Icon
            onPress={() => {
              setModalVisibleInfo(true);
              setBlurBackground(true);
            }}
            name="info-with-circle"
            type="entypo"
            size={height * 0.04}
            color="#fff"
          />
        </View>
      </View>
      <ImageBackground
        blurRadius={0.4}
        source={require('../assets/bg11.jpg')}
        style={{
          height: height,
          width: width,
        }}>
        <View style={{position: 'absolute', top: 15, zIndex: 2, left: 3}}>
          <View
            style={{
              height: height * 0.1,
              width: height * 0.1,
              backgroundColor: '#fff',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height * 0.2,
            }}>
            <Text
              style={{
                color: '#1a9aad',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
              {questionCount}/{questions.length}
            </Text>
          </View>
        </View>


        <View style={{position: 'absolute', top: 25, zIndex: 2, right: 3}}>
          <View
            style={{
              height: height * 0.07,
              width: width * 0.4,
              backgroundColor: '#fff',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: height * 0.2,
            }}>
            <Text
              style={{
                color: '#169423',
                fontSize: height * 0.03,
                fontWeight: 'bold',
              }}>
             <Text style={{color:'#000'}}> Score: </Text>{questionCount}
            </Text>
          </View>
        </View>
        {questionBox()}
        {optionsBox()}
        {modalBox()}
        {ModalPage()}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
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
    shadowRadius: 4,
    elevation: 5,
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

  overlayInfo: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    // opacity: 0.5,
    backgroundColor: 'black',
    width: width * 0.4,
  },
  modalViewInfo: {
    margin: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 35,
    width: width * 0.9,
    height: height * 0.4,
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
  centeredViewInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  buttonInfo: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpenInfo: {
    backgroundColor: '#F194FF',
  },
  buttonCloseInfo: {
    backgroundColor: 'darkred',
    width: width * 0.4,
  },
  textStyleInfo: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTextInfo: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
