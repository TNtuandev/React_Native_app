// import R from '@app/assets/R';
import { Platform } from 'react-native';
import { Dimensions, StyleSheet } from 'react-native';

const dimension = Dimensions.get('window');
const { width, height } = dimension;
const HEIGHT = height;
const WIDTH = width;
const OS = Platform.OS;
const colors = {
    grey: {
        dark: '#5D5D5D',
        light: '#C9C9C9'
    },
    primary: '#34B081',
    line: '#E1E1E1',
    backgroundColor: '#F3F3F8',
    white: '#ffffff',
    black: '#000000',
    focus: '#707070',
    borderTopColor: '#dedede',
    calenderPicker: '#EBF6FE',
    blue: '#0ABDE3',
    purple: {
        darker: '#1B0036',
        dark: '#300062',
        primary: '#602D90',
        light: '#915AC1',
        lighter: '#F1E0FF'
    },
    pink: {
        darker: '#943D4C',
        dark: '#C06776',
        primary: '#F596A5',
        light: '#FFC8D6',
        lighter: '#FFE5EB'
    },
    success: {
        darker: '#237804',
        dark: '#389E0D',
        primary: '#52C41A',
        light: '#B7EB8F'
    },
    warning: {
        darker: '#AD6800',
        dark: '#D48806',
        primary: '#FAAD14',
        light: '#FFE58F'
    },
    error: {
        darker: '#A8071A',
        dark: '#CF1322',
        primary: '#FF4D4F',
        light: '#FFA39E'
    },
    text: {
        primary: '#212B36',
        light: '#454F5B',
        lighter: '#637381',
        lightest: '#919EAB'
    },
    amount_product: '#88999F'
};
const sizes = {};

// const fonts = {
//     regular12: {
//         fontSize: 12,
//         lineHeight: 14,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular14: {
//         fontSize: 14,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular15: {
//         fontSize: 15,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular16: {
//         fontSize: 16,
//         // lineHeight: 24,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular18: {
//         fontSize: 18,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular20: {
//         fontSize: 20,
//         lineHeight: 28,
//         fontFamily: R.fonts.lato_regular
//     },
//     regular24: {
//         fontSize: 24,
//         lineHeight: 32,
//         fontFamily: R.fonts.lato_regular
//     },
//     bold12: {
//         fontSize: 12,
//         lineHeight: 14,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold14: {
//         fontSize: 14,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold15: {
//         fontSize: 15,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold16: {
//         fontSize: 16,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold18: {
//         fontSize: 18,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold20: {
//         fontSize: 20,
//         lineHeight: 28,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold24: {
//         fontSize: 24,
//         lineHeight: 32,
//         fontFamily: R.fonts.lato_bold
//     },
//     bold30: {
//         fontSize: 30,
//         // lineHeight: 32,
//         fontFamily: R.fonts.lato_bold
//     },
//     italic12: {
//         fontSize: 12,
//         lineHeight: 14,
//         fontFamily: R.fonts.lato_italic
//     },
//     italic14: {
//         fontSize: 14,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_italic
//     },
//     italic16: {
//         fontSize: 16,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_italic
//     },
//     italic18: {
//         fontSize: 18,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_italic
//     },
//     italic20: {
//         fontSize: 20,
//         lineHeight: 28,
//         fontFamily: R.fonts.lato_italic
//     },
//     italic24: {
//         fontSize: 24,
//         lineHeight: 32,
//         fontFamily: R.fonts.lato_italic
//     },
//     light12: {
//         fontSize: 12,
//         lineHeight: 14,
//         fontFamily: R.fonts.lato_light
//     },
//     light14: {
//         fontSize: 14,
//         lineHeight: 22,
//         fontFamily: R.fonts.lato_light
//     },
//     light16: {
//         fontSize: 16,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_light
//     },
//     light18: {
//         fontSize: 18,
//         lineHeight: 24,
//         fontFamily: R.fonts.lato_light
//     },
//     light20: {
//         fontSize: 20,
//         lineHeight: 28,
//         fontFamily: R.fonts.lato_light
//     },
//     light24: {
//         fontSize: 24,
//         lineHeight: 32,
//         fontFamily: R.fonts.lato_light
//     },
//     medium10: {
//         fontSize: 10,
//         fontFamily: R.fonts.medium
//     },
//     medium12: {
//         fontSize: 12,
//         lineHeight: 16,
//         fontFamily: R.fonts.medium
//     },
//     medium14: {
//         fontSize: 14,
//         lineHeight: 18,
//         fontFamily: R.fonts.medium
//     },
//     medium16: {
//         fontSize: 16,
//         lineHeight: 20,
//         fontFamily: R.fonts.medium
//     },
//     medium18: {
//         fontSize: 18,
//         lineHeight: 22,
//         fontFamily: R.fonts.medium
//     },
//     medium20: {
//         fontSize: 20,
//         lineHeight: 24,
//         fontFamily: R.fonts.medium
//     },
//     medium24: {
//         fontSize: 24,
//         lineHeight: 28,
//         fontFamily: R.fonts.medium
//     }
// };

// const styles = StyleSheet.create({
//     androidSafeView: {
//         flex: 1
//     },

//     test: {
//         flex: 1,
//         backgroundColor: colors.primary,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },

//     container: {
//         flex: 1,
//         backgroundColor: colors.backgroundColor
//     },

//     menu: {
//         flex: 1,
//         height: width * 0.25
//     },

//     scrollHoz: {
//         width: width * 0.9,
//         height: height * 0.3,
//         backgroundColor: colors.white,
//         borderRadius: 15
//     }
// });

export { colors, sizes, fonts, styles, dimension, HEIGHT, WIDTH, OS };
const theme = { colors, sizes, fonts, styles, dimension };
export default theme;
