import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

function SectionImage({source, width, height}){
    const viewStyle = {
        alignSelf: 'center',
        width: 350
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