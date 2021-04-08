import { NavigationActions, StackActions } from "@react-navigation/native";

let _navigator = null;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function navigate(routeName, params, key) {
    if (_navigator)
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
                key: key
            })
        );
}
function goBack(payload) {
    _navigator.dispatch(NavigationActions.back(payload));
}
function isNavigatorNull() {
    return _navigator == null;
}
function push(routeName, params) {
    _navigator.dispatch(
        StackActions.push({
            routeName,
            params
        })
    );
}

function pop(number) {
    _navigator.dispatch(StackActions.pop({ n: number }));
}

function getCurrentRoute(nav) {
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
        return getCurrentRoute(nav.routes[nav.index]);
    } else {
        return nav.routeName;
    }
}

function getNavigator() {
    return _navigator;
}

export default {
    navigate,
    setTopLevelNavigator,
    goBack,
    push,
    isNavigatorNull,
    getCurrentRoute,
    getNavigator,
    pop
};