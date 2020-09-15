import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import contentJson from '../../content/home.json';
import ImageTextSection from '../ImageTextSection';

const {sections} = contentJson;

function GettingStarted({content}){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {content.title}
                image = {require("./../../assets/home/contribute.png")}
                content = {content.content}
                imageSide = {'right'}
                imageHeight = {220}
            />
        </View>
        
    );
}

export default GettingStarted;