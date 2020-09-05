import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';
import ImageTextSection from '../ImageTextSection';

const {width} = Dimensions.get('window');
const {sections} = contentJson;
var content ="";

sections[1].content.forEach(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
            <ImageTextSection
                title = {sections[1].title}
                image = {require("./../../assets/home/contribute.png")}
                content = {sections[1].content}
                imageSide = {'right'}
                imageHeight = {220}
            />
           {/* {(width-0.7*width<400) ? 
            <SectionImage
                source={require("./../../assets/home/contribute.png")} 
                height={220} 
                width={273}
            /> : null }
            <View>
                <SectionHeader title={sections[1].title}></SectionHeader>
                <SectionBody content={content}></SectionBody>
            </View>
            {(width-0.7*width>=400) ? 
            <SectionImage
                source={require("./../../assets/home/contribute.png")} 
                height={220} 
                width={273}
            /> : null } */}
        </View>
        
    );
}

export default GettingStarted;