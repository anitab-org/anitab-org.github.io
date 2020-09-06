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
                title = {sections[3].title}
                imageSide = {'right'}
                image = {require("./../../assets/home/space1.png")}
                content = {sections[3].content}
                imageHeight = {208}
            />
        </View>
        
    );
}

export default GettingStarted;