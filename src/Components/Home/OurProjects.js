import React from 'react';
import styles from './styles';
import { View } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';

const {sections} = contentJson;
var content ="";

sections[2].content.forEach(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
            <SectionImage
                source={require("./../../assets/home/our-projects.png")} 
                height={261} 
                width={282}
            />
            <View>
                <SectionHeader title={sections[2].title}></SectionHeader>
                <SectionBody content={content}></SectionBody>
            </View>
        </View>
        
    );
}

export default GettingStarted;