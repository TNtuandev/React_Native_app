import React, { useEffect, useState } from 'react'
import {
    FlatList, View, Text,
    SafeAreaView, Dimensions, StyleSheet, Image,
    TouchableOpacity,
    ScrollView
} from 'react-native'
const { width } = Dimensions.get('screen');
import Card from '../../component/Card'
import R from '../../asset/R'
import axios from 'axios'
import { SliderBox } from 'react-native-image-slider-box';
import FastImage from 'react-native-fast-image'

const Slider = (props) => {
    return (
        <View style={{ height: 130 }}>
            <SliderBox
                parentWidth={390}
                sliderBoxHeight={130}
                ImageComponentStyle={{ borderRadius: 8, width: '100%' }}
                disableOnPress={true}
                images={props.list}
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxVerticalPadding={3}
                dotColor="#7B2CBF"
                inactiveDotColor="#BBBBBB"
                autoplay
                circleLoop
                dotStyle={{
                    width: 8,
                    height: 2,
                    marginHorizontal: -5,
                }}
            />
        </View>
    );
};
const HomeScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState({});
    const [data2, setData2] = useState({});
    const [data3, setData3] = useState({});
    const [listPost, setListPost] = useState({});
    const formatImgResult = (res) => {
        let listImgs = [];
        listImgs = res.map(e => e.urlImage)

        setData(listImgs.reverse());
    };
    const getData = async () => {
        if (!isLoading) setIsLoading(true);
        try {
            const response = await fetch('http://gpt.winds.vn/api/Service/Home');
            const jsonResponse = await response.json();
            formatImgResult(jsonResponse.data.listBaner);
            setData2(jsonResponse.data.listProduct)
            setData3(jsonResponse.data.listSale)
            setListPost(jsonResponse.data.listNews)
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getData();
    }, []);
    if (isLoading) {
        return <Text>Vui lòng đợi</Text>;
    }
    if (error) {
        return <Text>Đã có lỗi sảy ra</Text>;
    }
    const renderList = ({ item }) => {
        return (
            <TouchableOpacity style={styles.CardProductItem}>

                <Card style={styles.CardProduct}
                    children={
                        <>
                            <FastImage source={{ uri: item.image }}
                                style={{ width: 148, height: 89 }}
                                resizeMode='cover'
                            />
                            <Text style={{ fontWeight: 'bold', marginTop: 5, fontSize: 14 }}>{item.itemName}</Text>
                            <Text style={styles.cardPrice} children={`${(item.itemPrice)} VND`} />
                        </>
                    } />
            </TouchableOpacity>
        )
    }
    const renderListSale = ({ item }) => {
        return (
            <TouchableOpacity style={{ marginTop: 10, flexDirection: 'row', backgroundColor: 'white', }}>
                <FastImage source={{ uri: item.urlImage }}
                    style={{ width: 90, height: 90, borderRadius: 5 }} />
                <Card style={{ marginLeft: 5 }}>
                    <Text children={item.title} style={{ fontWeight: 'bold', }} />
                    <Text children={item.content} />
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <Image source={R.images.ic_clock} style={{ marginRight: 5, marginTop: 2 }} />
                        <Text children={item.date} />
                    </View>

                </Card>
            </TouchableOpacity>
        )
    }





    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'white', marginLeft: 10 }}> Giang Phong Thủy </Text>
                    <TouchableOpacity>
                        <Image source={R.images.ic_noti}
                            style={{ marginRight: 10 }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: 5 }}>
                    <Slider list={data} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: '#C61D23', fontSize: 15, marginLeft: 10 }}> Sản Phẩm</Text>
                    <TouchableOpacity onPress={() => navigation.navigate(ProductScreen)}>
                        <Text style={{ color: '#707070', fontSize: 12, marginRight: 15 }}> Xem Thêm</Text>
                    </TouchableOpacity>
                </View>
                <View
                    children={
                        <FlatList
                            data={data2}
                            renderItem={renderList}
                            horizontal={true}
                        // keyExtractor={(item, index) => index.toString()}
                        />
                    } />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text children={'Khuyến mãi'} style={styles.cardPrince} />
                    <TouchableOpacity>
                        <Text children={'Xem thêm '} style={{ color: '#707070', fontSize: 12, marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
                <View children={
                    <>
                        <FlatList
                            data={data3}
                            renderItem={renderListSale}
                            showsHorizontalScrollIndicator={false}
                        />
                    </>
                } />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <Text children={'Bài viết'} style={styles.cardPrince} />
                    <TouchableOpacity>
                        <Text children={'Xem thêm '} style={{ color: '#707070', fontSize: 12, marginRight: 15 }} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cardPrince: {
        fontWeight: 'bold', color: 'red', marginLeft: 10
    },
    CardProduct: {
        width: 148,
        height: 100
    },
    CardProductItem: {
        width: 148,
        marginTop: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 200,
        borderRadius: 10,
        // width: Dimensions.get("window").width / 2.6,
        // height: Dimensions.get("window").width / 2.6,
    }
});
export default HomeScreen
