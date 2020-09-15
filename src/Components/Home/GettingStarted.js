import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import ImageTextSection from '../ImageTextSection';


function GettingStarted({content}){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {content.title}
                image = {require("./../../assets/home/started.png")}
                content = {content.content}
                imageHeight = {273}
            />
        </View>
        
    );
}

export default GettingStarted;