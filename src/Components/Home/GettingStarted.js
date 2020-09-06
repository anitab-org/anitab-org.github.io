import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import contentJson from '../../content/home.json';
import ImageTextSection from '../ImageTextSection';

const {sections} = contentJson;

function GettingStarted(){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {sections[0].title}
                image = {require("./../../assets/home/started.png")}
                content = {sections[0].content}
                imageHeight = {273}
            />
        </View>
        
    );
}

export default GettingStarted;