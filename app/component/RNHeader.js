import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
// import { Header } from 'react-native-elements';
import NavigationUtil from '../navigation/NavigationUtil';
import * as theme from '../constants/Theme';
import R from '../asset/R';
import FastImage from 'react-native-fast-image';
import Search from './Search';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');

interface Props {
    color?: string;
    back?: boolean;
    /**
     * View nút phải
     */
    rightComponent?: React.ReactNode;
    /**
     * View nút trái
     */
    leftComponent?: React.ReactNode;
    renderViewHeader?: React.ReactNode;
    /**
     * Title thanh header
     */
    titleHeader: string;
    titleBackHeader?: string;
    onPressTitleBack?: () => void;
}

interface BackProps {
    style?: ViewStyle;
    titleBack?: String;
    onPressTitleBack?: () => void;
}

export class BackButton extends Component<BackProps> {
    render() {
        const { style, titleBack, onPressTitleBack } = this.props;
        return (
            <TouchableOpacity style={[style || styles.leftComp]} onPress={onPressTitleBack || NavigationUtil.goBack}>
                <FastImage source={R.images.ic_back} style={{ width: 24, height: 24 }} tintColor={theme.colors.white} />
                <Text
                    style={{
                        ...theme.fonts.medium18,
                        marginLeft: 18,
                        color: theme.colors.white,
                        width: '70%'
                    }}
                    numberOfLines={1}
                    children={titleBack}
                />
            </TouchableOpacity>
        );
    }
}

export default class RNHeader extends Component<Props> {
    render() {
        const { color, back, titleHeader, rightComponent, leftComponent, renderViewHeader, titleBackHeader, onPressTitleBack } = this.props;
        return (
            <Header
                placement='left'
                containerStyle={{
                    backgroundColor: theme.colors.primary,
                    borderBottomColor: theme.colors.primary,
                    // height: 90
                    marginTop: Platform.OS == 'ios' ? -5 : -StatusBar.currentHeight - 10
                }}
                leftComponent={
                    back || titleBackHeader ? <BackButton titleBack={titleBackHeader} onPressTitleBack={onPressTitleBack} /> : leftComponent
                }
                centerComponent={
                    <Text
                        style={[
                            {
                                fontSize: 18,
                                // fontFamily: R.fonts.lato_bold
                            },
                            { color: color || 'white' }
                        ]}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        {titleHeader}
                    </Text>
                }
                rightComponent={rightComponent}
                statusBarProps={{
                    barStyle: 'light-content',
                    backgroundColor: theme.colors.primary
                }}
                children={renderViewHeader}
            />
        );
    }
}

const styles = StyleSheet.create({
    leftComp: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: theme.OS == 'android' ? 5 : 0,
        width: '100%'
    },
    rightComp: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
});
