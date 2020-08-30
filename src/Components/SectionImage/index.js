import React from 'react';
import {View, Image } from 'react-native';


function SectionImage({source, width, height}){
    const viewStyle = {
        alignSelf: 'center',
        width: 350,
        marginTop: 32+8,
    }
    const imageStyle = {
        width: width,
        height: height,
        alignSelf: 'center',
    }
    return(
        <View style={viewStyle}>
        <Image 
            source={source}
            style = {imageStyle}
        />
        </View>
    )
}


export default SectionImage;