
// import React, { useState, useCallback, useEffect } from 'react'
// import { GiftedChat, Composer, Send, Actions } from 'react-native-gifted-chat'
// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import firestore from '@react-native-firebase/firestore'

// const App = () => {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])

//   const renderActions = props => {
//     <Actions
//       {...props}
//       containerStyle={{
//         width: 44,
//         height: 44,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginLeft: 4,
//         marginRight: 4,
//         marginBottom: 0,
//       }}
//     // icon={() => (
//     //   <Image
//     //     style={{ width: 125, height: 125 }}
//     //     source={require('./asset/ic_image.png')}

//     //   />
//     // )}
//     // options={{
//     //   'Choose From Library': () => {
//     //     console.log('Choose From Library');
//     //   },
//     //   Cancel: () => {
//     //     console.log('Cancel');
//     //   },
//     // }}
//     // optionTintColor="#222B45"
//     />

//   }
//   const renderComposer = props => {
//     return <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
//       {/* {isLoadingImage && <LoadingAnimated />} */}
//       <Composer
//         {...props}
//         textInputStyle={{
//           color: '#222B45',

//           backgroundColor: '#EDF1F7',
//           borderWidth: 1,
//           borderRadius: 5,
//           borderColor: '#E4E9F2',
//           paddingTop: 8.5,
//           paddingHorizontal: 12,
//           marginLeft: 0,
//         }}
//       />
//       <TouchableOpacity style={{ marginTop: 10, marginLeft: 5 }}

//       >
//         <Image source={require('./src/asset/ic_image.png')}
//           style={{ width: 25, height: 25 }} />
//       </TouchableOpacity>
//     </View>

//   }
//   const renderSend = (props) => (
//     <Send
//       {...props}
//       disabled={!props.text}
//       containerStyle={{
//         width: 44,
//         height: 44,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginHorizontal: 4,
//       }}
//     >
//       <Image
//         style={{ width: 30, height: 30 }}
//         source={require('./src/asset/ic_send.png')}
//       />
//     </Send>
//   );

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       renderComposer={renderComposer}
//       // renderActions={renderActions}
//       renderSend={renderSend}
//       timeFormat='HH:mm:ss'
//       dateFormat='DD/MM/YYYY'
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }

// export default App

// import 'react-native-gesture-handler';
// import React from 'react'

// import MainStackNavigator from './src/navigation/MainStackNavigator';

// const app = () => {
//   return (
//     <>
//       <MainStackNavigator />
//     </>

//   );
// };
// export default app;


import React from 'react'
import { View, Text } from 'react-native'

// import MainStackNavigator from './src/navigation/MainStackNavigator';
import Navigator from './app/navigation/Navigator'
import HomeScreen from './app/screen/home/HomeScreen'

const app = () => {
  return (
    <>
      <Navigator />
      {/* <HomeScreen /> */}
    </>

  );
};
export default app;