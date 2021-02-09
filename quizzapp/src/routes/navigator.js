import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import QuizScreen from '../screens/QuizzPage'
import Sections from '../screens/Sections'
import Levels from '../screens/Levels'
import QuizzPage from '../screens/QuizzPage'
import FinishedPage from '../screens/FinishedPage'


const Stack = createStackNavigator()
export default function navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="Sections" component={Sections}/>
                <Stack.Screen name="Levels" component={Levels}/>
                <Stack.Screen name="QuizScreen" component={QuizzPage}/>
                <Stack.Screen name="FinishedScreen" component={FinishedPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
