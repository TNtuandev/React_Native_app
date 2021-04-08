
import React, { useState } from 'react'
import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import R from '../../asset/R'
const { width } = Dimensions.get('screen');
const ForgotPasswordScreen = ({ navigation }) => {
    const [inputState, setInputState] = useState({
        isFocus: false,
        text: '',
    });
    const handleFocus = () => {
        setInputState({ ...inputState, isFocus: !inputState.isFocus });
    };
    return (
        <SafeAreaView style={{ width, height: 80, backgroundColor: '#C61D23' }}>
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.goBack()}>
                <Image source={R.images.ic_back}
                    style={{ marginLeft: 5, height: 17, width: 10, marginTop: 4 }} />
                <Text style={{ color: '#FFFF', fontWeight: 'bold', fontSize: 18, marginLeft: 8 }}>Quên mật khẩu</Text>
            </TouchableOpacity>
            <View
                children={
                    <Image
                        style={styles.logoStyle}
                        source={R.images.logo} />} />
            <View
                children={
                    <View style={{ marginTop: 50 }}>
                        <Text style={styles.fakerStyle}>Vui lòng nhập email của bạn để </Text>
                        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: 'bold', marginTop: -18 }}>lấy lại mật khẩu </Text>
                    </View>
                } />
            <View children={
                <>
                    <Text style={styles.textStyle}>Email</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        placeholder="hãy nhập gì đó"
                        onFocus={handleFocus}
                        onBlur={handleFocus}
                        onChangeText={val => setInputState({ ...inputState, text: val })}
                    />

                </>
            } />
            <View
                children={
                    <TouchableOpacity style={styles.buttonStyle}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}> Xác nhận</Text>
                    </TouchableOpacity>
                }
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    logoStyle: { width: 202, height: 205, alignSelf: 'center', marginTop: 80 },
    fakerStyle: { height: 40, width: 246, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' },
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
        width: 233, height: 46, backgroundColor: '#C61D23', borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    }
});

export default ForgotPasswordScreen
