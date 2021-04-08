import React, { Component } from 'react';
import { Text, StyleSheet, View, Platform, StyleProp, ViewStyle } from 'react-native';

interface Props {
    style?: StyleProp<ViewStyle>;
}
export default class Card extends Component<Props> {
    render() {
        const { style, children, ...props } = this.props;
        return <View style={[styles.container, style]}>{children}</View>;
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 8,
        borderWidth: 0.2,
        borderRadius: 6,
        backgroundColor: 'white',
        borderColor: 'white',
        paddingHorizontal: 14,
        marginBottom: 2,
    }
});
