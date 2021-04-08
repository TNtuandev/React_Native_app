import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import R from '../../asset/R'
const { width } = Dimensions.get('screen');
const RegisterScreen = ({ navigation }) => {
    const [inputState, setInputState] = useState({
        isFocus: false,
        text: '',
    });
    const handleFocus = () => {
        setInputState({ ...inputState, isFocus: !inputState.isFocus });
    };
    return (
        <SafeAreaView style={{ width, height: 80, backgroundColor: '#C61D23' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()} >
                <Image source={R.images.ic_back}
                    style={{ marginLeft: 5, height: 17, width: 10, marginTop: 4 }} />
                <Text style={{ color: '#FFFF', fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Đăng ký tài khoản</Text>
            </TouchableOpacity>

            <View>
                <View
                    children={
                        <View>
                            <Text style={styles.textStyle}>Họ tên</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="hãy nhập gì đó"
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                                onChangeText={val => setInputState({ ...inputState, text: val })}
                            />
                            <Text style={styles.textStyle}>Số điện thoại</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="hãy nhập gì đó"
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                                onChangeText={val => setInputState({ ...inputState, text: val })}
                            />
                            <Text style={styles.textStyle}>Tỉnh/ thành phố</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="hãy nhập gì đó"
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                                onChangeText={val => setInputState({ ...inputState, text: val })}
                            />
                            <Text style={styles.textStyle}>Mật khẩu</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="hãy nhập gì đó"
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                                onChangeText={val => setInputState({ ...inputState, text: val })}
                            />
                            <Text style={styles.textStyle}>Xác nhận mật khẩu</Text>
                            <TextInput
                                style={styles.textInputStyle}
                                placeholder="hãy nhập gì đó"
                                onFocus={handleFocus}
                                onBlur={handleFocus}
                                onChangeText={val => setInputState({ ...inputState, text: val })}
                            />
                        </View>
                    }
                />
                <View
                    children={
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}> Đăng ký</Text>
                        </TouchableOpacity>
                    }
                />
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logoStyle: { width: 202, height: 205, alignSelf: 'center', marginTop: 80 },
    textInputStyle: {
        width: '92%', height: 50,
        paddingHorizontal: 20,
        fontSize: 14,
        marginTop: 0,
        borderBottomWidth: 0.25,
        alignSelf: 'center',
        borderBottomColor: '#707070'

    },
    textStyle: { fontWeight: 'bold', marginTop: 20, marginLeft: 15 },
    buttonStyle: {
        width: 330, height: 46, backgroundColor: '#C61D23', borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    }

});

export default RegisterScreen
