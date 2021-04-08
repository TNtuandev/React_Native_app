import React from 'react'
import { View, Text, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screen/login/LoginScreen'
import RegisterScreen from '../screen/login/RegisterScreen'
import ForgotPasswordScreen from '../screen/login/ForgotPasswordScreen'
import { SCREEN_ROUTER_APP } from '../constant/Constant'
import NavigationUtil from '../navigation/NavigationUtil'
import R from '../asset/R'
import StackApp from './stack/StackApp'
import StackBottomBar from './stack/StackBottomBar'

import HomeScreen from '../screen/home/HomeScreen'
import ProductScreen from '../screen/product/ProductScreen'
import CalenderScreen from '../screen/calender/CalenderScreen'
import CompassScreen from '../screen/laban/CompassScreen'
import UserScreen from '../screen/user/UserScreen'

// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const { ic_home, ic_product, ic_calendar, ic_compass, ic_user } = R.images;
const { HOME, PRODUCT, CALENDAR, COMPASS, USER } = SCREEN_ROUTER_APP;
const TabBarIcon = {
    [HOME]: ic_home,
    [PRODUCT]: ic_product,
    [CALENDAR]: ic_calendar,
    [COMPASS]: ic_compass,
    [USER]: ic_user,
};
const TabBarName = {
    [HOME]: 'Trang chủ',
    [PRODUCT]: 'Sản Phẩm',
    [CALENDAR]: 'Lịch',
    [COMPASS]: 'La bàn',
    [USER]: 'Tài khoản'
}


const MainTab = () => {
    return (
        <Tab.Navigator

            tabBarOptions={{
                labelStyle: {
                    fontSize: 12
                },
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Trang chủ" component={HomeScreen}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color }) => <Image source={R.images.ic_home} Color={color} />
                }} />
            <Tab.Screen name="Sản Phẩm" component={ProductScreen}
                options={{
                    tabBarLabel: 'Sản phẩm',
                    tabBarIcon: () => <Image source={R.images.ic_product} />
                }}
            />
            <Tab.Screen name="Lịch" component={CalenderScreen}
                options={{
                    tabBarLabel: 'Lịch',
                    tabBarIcon: () => <Image source={R.images.ic_calendar} />
                }} />
            <Tab.Screen name="La bàn" component={CompassScreen}
                options={{
                    tabBarLabel: 'La bàn',
                    tabBarIcon: () => <Image source={R.images.ic_compass} />
                }} />
            <Tab.Screen name="Tài khoản" component={UserScreen}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: () => <Image source={R.images.ic_user} />
                }} />
        </Tab.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <MainTab />
        </NavigationContainer>

    )
}
export default Navigator

// const Navigator = () => {
//     return (
//         <NavigationContainer >
//             <Stack.Navigator screenOptions={{
//                 headerShown: false
//             }}>
//                 <Stack.Screen name="LoginScreen" component={LoginScreen} />
//                 <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
//                 <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default Navigator