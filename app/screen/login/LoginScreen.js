import React, { useState } from 'react'
import {
    View, Text, Image, StyleSheet,
    Dimensions, TextInput, ScrollView,
    SafeAreaView, TouchableOpacity
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import RegisterScreen from './RegisterScreen';
import R from '../../asset/R'

const { width } = Dimensions.get('screen');


const LoginScreen = ({ navigation }) => {
    const [inputState, setInputState] = useState({
        isFocus: false,
        text: '',
    });
    const handleFocus = () => {
        setInputState({ ...inputState, isFocus: !inputState.isFocus });
    };
    const handleStartPress = async () => {
        if (inputState.text.trim().length > 0) {
            const user = inputState.text.trim();
            const UID = parseInt(await handleUID(user));
            navigation.navigate('Home');
        } else {
            alert('Input Empty');
        }
    };



    return (
        <SafeAreaView style={{ width, height: 80, backgroundColor: '#C61D23' }}>
            <View
                children={
                    <Image
                        style={styles.logoStyle}
                        source={R.images.logo} />} />
            <View style={{ width: '100%', }}
                children={
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Số điện thoại"
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        onChangeText={val => setInputState({ ...inputState, text: val })}
                    />
                } />
            <View style={{ width: '100%', }}
                children={
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="Mật khẩu"
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        onChangeText={val => setInputState({ ...inputState, text: val })}
                    />
                } />

            <View
                children={
                    <TouchableOpacity style={{ alignSelf: 'flex-end', height: 18, marginTop: 10, width: '35%' }}
                        onPress={() => navigation.navigate(ForgotPasswordScreen)}
                    >
                        <Text style={{ fontSize: 14 }}> Quên mật khẩu ?</Text>
                    </TouchableOpacity>
                }
            />
            <View
                children={
                    <TouchableOpacity style={styles.loginButton}
                    // onPress={handleStartPress} 
                    >
                        <Text style={{ fontSize: 14, color: '#FFFFFF', fontWeight: 'bold' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                } />
            <View
                children={
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15, height: 20 }}>
                        <Text style={{ fontWeight: 'bold', color: '#707070' }}>Chưa có tài khoản</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate(RegisterScreen)}
                        >
                            <Text style={{ color: '#C61D23', fontWeight: 'bold' }}> Đăng ký</Text>
                        </TouchableOpacity>
                    </View>
                }
            />
            <View
                children={
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30, height: 20 }}>
                        <View style={{ backgroundColor: '#707070', width: '35%', height: 0.5, marginTop: 8, marginRight: 5 }}></View>
                        <Text style={{ fontWeight: 'bold', color: '#707070' }}>hoặc</Text>
                        <View style={{ backgroundColor: '#707070', width: '35%', height: 0.5, marginTop: 8, marginLeft: 5 }}></View>
                    </View>
                }
            />

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20 }}>
                <TouchableOpacity style={{ backgroundColor: '#CACFDD', height: 65, width: 66, borderRadius: 15, }}>
                    <Image source={R.images.ic_fb}
                        style={{ marginTop: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#EA4335', height: 65, width: 66, borderRadius: 15, alignItems: 'center', marginLeft: 20 }}>
                    <Image source={R.images.ic_gogo}
                        style={{ marginTop: 15 }}
                    />
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    logoStyle: { width: 202, height: 205, alignSelf: 'center', marginTop: 80 },
    textInputStyle: {
        width: '80%', height: 50,
        paddingHorizontal: 20,
        fontSize: 14,
        marginTop: 20,
        borderBottomWidth: 0.5,
        alignSelf: 'center',
    },
    loginButton: {
        width: '80%', height: 50,
        backgroundColor: '#C61D23',
        borderRadius: 30,
        justifyContent: 'center',
        alignSelf: 'center', marginTop: 20,
        alignItems: 'center'
    }
});

export default LoginScreen
