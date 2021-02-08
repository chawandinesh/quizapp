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
} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import FinishedPage from './FinishedPage';
const {height, width} = Dimensions.get('window');
export default function HomeScreen() {
  const [optionState, setOptionState] = React.useState(false);
  const [questionCount, setQuestionCount] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalData, setModalData] = React.useState('');
  const [blurBackground, setBlurBackground] = React.useState(false);
  const [questions, setQuestions] = React.useState([
    {
      name: 'What kind of tax system is found in India?',
      options: {
        A: ' Progressive',
        B: 'Degressive',
        C: 'Proportional',
        D: 'None of the following',
      },
      correct: 'B',
    },
    {
      name: ' Which of the following is not imposed by the Central Government?',
      options: {
        A: 'Agricultural tax',
        B: 'Corporation tax',
        C: 'Custom duty',
        D: 'Sales tax',
      },
      correct: 'A',
    },
    {
      name:
        'Which one of the following States in India has its own Constitution?',
      options: {
        A: 'Uttarakhand',
        B: 'Madhya Pradesh',
        C: 'J & K',
        D: 'Nagaland',
      },
      correct: 'C',
    },
    {
      name:
        ' Which of the following countries is an example of “coming together federation”?',
      options: {A: 'U.S.A', B: 'India', C: 'Spain', D: 'Belgium'},
      correct: 'A',
    },
    {
      name:
        'Who among the following is credited for the Corpuscular theory of light?',
      options: {
        A: 'Christiaan Hyugens',
        B: ' Albert Einstein',
        C: ' James Clerk Maxwell',
        D: 'Isaac Newton',
      },
      correct: 'D',
    },
    {
      name: 'Light year is a unit of which of these following?',
      options: {A: 'distance', B: 'time', C: 'pressure', D: 'power'},
      correct: 'A',
    },
    {
      name: 'Which of the following is NOT correct about Vectors addition?',
      options: {
        A: 'Vectors addition is associative',
        B: 'Vectors addition is commutative',
        C: 'Vectors of different natures can be added',
        D: 'None of the above',
      },
      correct: 'A',
    },
  ]);
  const handleOption = (option) => {
    setOptionState(true);
    optionState ? null : setSelectedOption(option);
    if (questions.length === questionCount) return;
    if (option === questions[questionCount].correct) {
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
          height: height * 0.3,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{alignSelf: 'flex-end', padding: height * 0.03}}>
          <Icon
            name="questioncircle"
            type="antdesign"
            color="#fff"
            size={height * 0.04}
          />
        </View>
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
          <View style={{position: 'absolute', bottom: 3, right: 3}}>
            <View
              style={{
                height: height * 0.06,
                width: height * 0.06,
                backgroundColor: 'darkgreen',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: height * 0.2,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: height * 0.03,
                  fontWeight: 'bold',
                }}>
                {questionCount}
              </Text>
            </View>
          </View>

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
            backgroundColor: '#f6f2fa',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.08,
              height: width * 0.08,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>A</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text>{questions[questionCount].options.A}</Text>
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
            backgroundColor: '#f6f2fa',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.08,
              height: width * 0.08,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>B</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text>{questions[questionCount].options.B}</Text>
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
            backgroundColor: '#f6f2fa',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.08,
              height: width * 0.08,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>C</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text>{questions[questionCount].options.C}</Text>
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
            backgroundColor: '#f6f2fa',
            //   marginBottom: height * 0.01,
            borderRadius: height * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              width: width * 0.08,
              height: width * 0.08,
              borderRadius: height * 0.1,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 2,
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>D</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              width: width * 0.83,
              padding: height * 0.01,
              paddingRight: height * 0.02,
            }}>
            <Text>{questions[questionCount].options.D}</Text>
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

  if (questionCount === questions.length) {
    return <FinishedPage />;
  }
  if (questions[questionCount] === undefined) return;
  return (
    <View style={{opacity: blurBackground ? 0.5 : 1, height, width}}>
      <ImageBackground
        source={require('../assets/bg4.jpg')}
        style={{
          height: height,
          width: width,
        }}>
        {questionBox()}
        {optionsBox()}

        {modalBox()}
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
});
