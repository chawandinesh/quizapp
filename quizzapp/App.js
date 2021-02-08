/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen'
import QuizScreen from './src/screens/QuizzPage'
// import QuizzScreen from './src/screens/QuizzScreen'
import Navigator from './src/routes/navigator'
const App  = () => {
  return (
    <>
     <Navigator   />
    </>
  );
};


export default App;