import firestore from '@react-native-firebase/firestore'

const FireStore = firestore().collection('chats')
export default FireStore
