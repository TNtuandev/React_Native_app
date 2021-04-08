import { SCREEN_ROUTER_APP } from '../../constant/Constant'
import HomeScreen from '../../screen/home/HomeScreen'
import ProductScreen from '../../screen/product/ProductScreen'
import CalendarScreen from '../../screen/calender/CalenderScreen'
import CompassScreen from '../../screen/laban/CompassScreen'
import UserScreen from '../../screen/user/UserScreen'

const {
    HOME,
    PRODUCT,
    CALENDER,
    COMPASS,
    USER,
} = SCREEN_ROUTER_APP;

export default {
    [HOME]: HomeScreen,
    [PRODUCT]: ProductScreen,
    [CALENDER]: CalendarScreen,
    [COMPASS]: CompassScreen,
    [USER]: UserScreen
};