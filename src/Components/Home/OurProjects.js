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
                title = {sections[2].title}
                image = {require("./../../assets/home/our-projects.png")}
                content = {sections[2].content}
                imageHeight = {261}
            />
        </View>
        
    );
}

export default GettingStarted;