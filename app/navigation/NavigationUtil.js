import { StackActions, CommonActions } from '@react-navigation/core';
// import reactotron from 'reactotron-react-native';

export interface Navigation {
    canGoBack: any;
    dangerouslyGetParent: any;
    dangerouslyGetState: any;
    replace: any;
    push: any;
    pop: any;
    popToTop: any;
    goBack: any;
    navigate: any;
    reset: any;
    setParams: any;
    addListener: any;
    removeListener: any;
    dispatch: any;
    setOptions: any;
    isFocused: any;
}

export interface Route {
    key: any;
    name: any;
}

export interface NavigationProps {
    navigation: Navigation;
    route: Route;
    navigateSwitch: any;
}

let _navigator; // eslint-disable-line

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(name: string, params?: any) {
    if (_navigator) _navigator.dispatch(CommonActions.navigate(name, params));
}
function replace(name: string, params?: any) {
    if (_navigator) _navigator.dispatch(StackActions.replace(name, params));
}
function push(name: string, params?: any) {
    if (_navigator) _navigator.dispatch(StackActions.push(name, params));
}
function goBack() {
    if (_navigator) _navigator.dispatch(CommonActions.goBack());
}
function pop(count: number) {
    if (_navigator) _navigator.dispatch(StackActions.pop(count || 1));
}
function dismiss() {
    if (_navigator) {
        _navigator.dispatch(StackActions.popToTop());
        goBack();
    }
}

export default {
    dismiss,
    navigate,
    setTopLevelNavigator,
    goBack,
    push,
    replace,
    pop
};
