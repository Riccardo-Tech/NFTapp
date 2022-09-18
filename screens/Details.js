import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from "react-native";
import React from 'react';

import {COLORS, SIZES, SHADOWS, FONTS, assets} from '../constants';
import { CircleButton, RectButton, SubInfo, FocusedStatusBar, DetailsDesc, DetailsBid }
from "../components";

const DetailsHeader = ({ data, navigation }) => (
    <View style={{ width: '100%', height: '100%'}}>
        <Image 
            resizeMode="contain"
            source = {data.image}
        />  
    </View> 
)


const Details = ({navigation, route}) => {
    const { data } = route.params; 
    console.debug({data})
    return (
        // <SafeAreaView style={{flex: 1}}>
        //     <FocusedStatusBar 
        //         barStyle= "dark-content"
        //         backgoroundColor= "trasparent"
        //         tranLucent={true}
        //      /> 
        //     <View style={{
        //         width: "100%",
        //         position: "absolute",
        //         bottom: 0,
        //         paddingVertical: SIZES.font,
        //         justifyContent: 'center',
        //         alignItems: 'center',
        //         backgroundColor: 'rgba(255,255,255,0.5)',
        //         zIndex: 1,
        //     }}>
        //         <RectButton 
        //             minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark}
        //         />
        //     </View>

            <FlatList  
                data ={ data.bids }
                renderItem={({ item }) => <DetailsBid bid={item} />}
                keyExtractor={(item => item.id)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: SIZES.extraLarge * 3}} 
            /> 
        // </SafeAreaView> 
    )
}

export default Details