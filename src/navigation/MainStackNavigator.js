import React, { useEffect } from 'react'
import { View, Text, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OneSignal from 'react-native-onesignal'

import ChatScreens from '../Screen/user/ChatScreens'
import LoginScreens from '../Screen/login/LoginScreens'

const Stack = createStackNavigator()


const ChatFlow = () => {
    const OneSignalInit = async () => {
        OneSignal.setAppId("67486344-4e21-43ee-9628-df793637830a");
        OneSignal.setLogLevel(6, 0);
        OneSignal.setRequiresUserPrivacyConsent(false);
    }

    useEffect(() => {
        LogBox.ignoreAllLogs()
        OneSignalInit()
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="LoginScreens" component={LoginScreens} />
                <Stack.Screen name="ChatScreens" component={ChatScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const MainStackNavigator = () => {
    return (
        ChatFlow()
    )
}

export default MainStackNavigator
