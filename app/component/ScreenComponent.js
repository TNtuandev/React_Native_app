import React, { Component } from 'react';
import { Platform, SafeAreaView, StatusBar, Text, View, ViewProps } from 'react-native';
import RNHeader from './RNHeader';
// import Error from './Error';
// import Loading from './Loading';
import { colors } from '../constant/Theme';
// import { BarIndicator } from 'react-native-indicators';
// import R from '@app/assets/R';
// import LoadingProgress from './LoadingProgress';
// import Empty from './Empty';

interface Props {
    /**
     * View hiển thị
     */
    children: React.ReactNode;
    /**
     * State hiện thị màn hình Loading
     */
    isLoading?: boolean;
    /**
     * State hiện thị màn hình Lỗi
     */
    isError?: object | boolean;
    /**
     * Có nút back
     */
    back?: boolean;
    /**
     * View nút phải
     */
    rightComponent?: React.ReactNode;
    /**
     * View nút trái
     */
    leftComponent?: React.ReactNode;
    /**
     * Title thanh header
     */
    titleHeader?: string;

    reload?: () => void;
    onRefresh?: () => void;

    onBack?: () => void;
    onPressTitleBack?: () => void;

    header?: React.ReactNode;

    // dialogLoading?: boolean;

    isSafeAre?: boolean;
    // isEmpty?: boolean;
    renderViewHeader?: React.ReactNode;
    titleBackHeader?: string;
    backgroundColor?: string;
}

export default class ScreenComponent extends Component<Props, ViewProps> {
    constructor(props) {
        super(props);
    }
    renderBody() {
        const { isLoading, isError, reload, children, onRefresh, backgroundColor } = this.props;
        if (isLoading) return <Loading />;
        if (isError) return <Error reload={reload} />;
        // if (isEmpty) return <Empty onRefresh={onRefresh} />;
        return children;
    }

    render() {
        const {
            titleHeader,
            rightComponent,
            leftComponent,
            back = false,
            dialogLoading,
            header,
            isSafeAre = false,
            renderViewHeader,
            titleBackHeader,
            backgroundColor,
            onPressTitleBack
        } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: backgroundColor || colors.backgroundColor }}>
                <RNHeader
                    renderViewHeader={renderViewHeader}
                    titleHeader={titleHeader}
                    titleBackHeader={titleBackHeader}
                    onPressTitleBack={onPressTitleBack}
                    back={back}
                    rightComponent={rightComponent}
                    leftComponent={leftComponent}
                />
                {!!header && (
                    <View
                        style={{
                            paddingTop: Platform.OS == 'ios' ? 30 : 10,
                            backgroundColor: colors.primary
                        }}
                        children={header}
                    />
                )}
                {/* <StatusBar backgroundColor={colors.primary} /> */}
                {/* <StatusBar translucent /> */}
                {isSafeAre ? <SafeAreaView style={{ flex: 1 }} children={this.renderBody()} /> : this.renderBody()}
                {/* {dialogLoading && <LoadingProgress />} */}
            </View>
        );
    }
}
