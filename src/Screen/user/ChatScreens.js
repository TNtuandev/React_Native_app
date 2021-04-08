
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat, Composer, Send, Actions, InputToolbar } from 'react-native-gifted-chat'
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import FireStore from '../services/FireStore'

const ChatScreens = ({ route }) => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const { user, id } = route.params

    const handleOnSend = useCallback((messages = []) => {
        const text = messages[0]

        FireStore.add({
            text: text.text,
            createAt: new Date(),
            user: {
                _id: id,
                name: user
            }
        })
    }, [])




    const renderSend = (props) => (
        <Send
            {...props}
            disabled={!props.text}
            containerStyle={{
                width: 44,
                height: 44,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 4,
            }}
        >
            <Image
                style={{ width: 30, height: 30 }}
                source={require('../../asset/ic_send.png')}
            />
        </Send>
    );

    const customtInputToolbar = props => {
        return (
            <InputToolbar
                {...props}
                containerStyle={{
                    height: 40,
                    backgroundColor: "rgb(242,242,242)",
                    borderTopColor: "#AFB6BF",
                    borderTopWidth: 1,
                }}
            />
        );
    };

    useEffect(() => {
        const messageListener = FireStore.orderBy('createAt', 'desc')
            .onSnapshot(querySnap => {
                const messages = querySnap.docs.map(doc => {
                    const firebaseData = doc.data()

                    const data = {
                        _id: doc.id,
                        text: '',
                        createAt: new Date().getTime(),
                        ...firebaseData
                    }

                    return data
                })

                setMessages(messages)
                setIsLoading(false)
            })

        return () => messageListener()
    }, [])

    if (isLoading) {
        return (
            <View>
                <ActivityIndicator size='large' />
            </View>
        )
    }

    return (
        <GiftedChat
            messages={messages}
            // renderActions={renderActions}
            renderSend={renderSend}
            renderInputToolbar={props => customtInputToolbar(props)}
            timeFormat='HH:mm:ss'
            dateFormat='DD/MM/YYYY'
            user={{ _id: id, name: user }}
            onSend={handleOnSend}
        />


    )
}

export default ChatScreens

