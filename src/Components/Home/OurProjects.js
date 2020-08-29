import React from 'react';
import styles from './styles';
import { View, Text, Image, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';

const {sections} = contentJson;
// const {width} = Dimensions.get('window');
var content ="";

sections[2].content.map(text=>{
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
                {/* {sections[2].content.map((text, j)=>(
                    <Text key={j} style={styles.description}>
                        {text.par}
                    </Text>
                ))} */}
            </View>
        </View>
        
    );
}

export default GettingStarted;