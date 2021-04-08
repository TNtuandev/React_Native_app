import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import Theme from '../services/Theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

import NavigationUtil from '../../navigation/NavigationUtil'

const { width } = Dimensions.get('screen');

const LoginScreens = ({ navigation }) => {
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
            navigation.navigate('ChatScreens', { user, id: UID });
        } else {
            alert('Input Empty');
        }
    };

    const handleUID = async user => {
        let UID;
        try {
            const allkeys = await AsyncStorage.getAllKeys();
            if (allkeys?.includes(user)) {
                UID = await AsyncStorage.getItem(user);
            } else {
                UID = new Date().getTime();
                await AsyncStorage.setItem(user, UID.toString());
            }
        } catch (err) {
            console.log(err);
        }

        return UID;
    };

    return (
        <View style={[Theme.containerCenter, { paddingHorizontal: 30 }]}>
            <View style={{ width: '100%' }}>
                <Text style={styles.title}>What up?</Text>
                <TextInput
                    style={[
                        styles.nameInput,
                        inputState.isFocus
                            ? { borderColor: '#53BCD3' }
                            : { borderColor: 'rgba(0,0,0,.3)' },
                    ]}
                    onFocus={handleFocus}
                    onBlur={handleFocus}
                    onChangeText={val => setInputState({ ...inputState, text: val })}
                    placeholder="hay nhap gi do"
                />
            </View>
            <TouchableOpacity
                style={[Theme.centerItems, styles.btnContainer]}
                onPress={handleStartPress}>
                <Image source={require('../../asset/ic_go.png')} style={{ width: 30, height: 30 }} />

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: '700',
        alignSelf: 'flex-start',
        marginLeft: 10,
    },

    nameInput: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: (width - 60) / 2,
        paddingHorizontal: 20,
        fontSize: 20,
        marginTop: 20,
    },

    btnContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',

    },

    btnText: {
        fontSize: 25,
        fontWeight: '700',
        color: 'purple',
    },
});

export default LoginScreens;