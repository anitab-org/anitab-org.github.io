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

sections[0].content.forEach(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
            {/* <ImageTextSection
                title = {sections[0].title}
                image = {require("./../../assets/home/started.png")}
                content = {sections[0].content}
                imageHeight = {273}
            /> */}
            <SectionImage
                source={require("./../../assets/home/started.png")} 
                height={273} 
                width={343}
            />
            <View>
                <SectionHeader title={sections[0].title} ></SectionHeader>
                <SectionBody content={content}></SectionBody>
            </View>
        </View>
        
    );
}

export default GettingStarted;