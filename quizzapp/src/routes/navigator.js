import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen'
import QuizScreen from '../screens/QuizzPage'
const Stack = createStackNavigator()
export default function navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="QuizScreen" component={QuizScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
