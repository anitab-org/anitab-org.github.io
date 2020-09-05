import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';
import ImageTextSection from '../ImageTextSection';

const {sections} = contentJson;
var content ="";

sections[2].content.forEach(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {sections[2].title}
                image = {require("./../../assets/home/our-projects.png")}
                content = {sections[2].content}
                imageHeight = {261}
            />
            {/* <SectionImage
                source={require("./../../assets/home/our-projects.png")} 
                height={261} 
                width={282}
            />
            <View>
                <SectionHeader title={sections[2].title}></SectionHeader>
                <SectionBody content={content}></SectionBody>
            </View> */}
        </View>
        
    );
}

export default GettingStarted;