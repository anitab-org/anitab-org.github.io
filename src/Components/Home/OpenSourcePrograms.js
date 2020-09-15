import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import ImageTextSection from '../ImageTextSection';

function GettingStarted({content}){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {content.title}
                imageSide = {'right'}
                image = {content.image.source}
                content = {content.content}
                imageHeight = {208}
            />
        </View>
        
    );
}

export default GettingStarted;