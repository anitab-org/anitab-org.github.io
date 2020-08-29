import React from 'react';
import styles from './styles';
import { View, Text, Image, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';

const {width} = Dimensions.get('window');
const {sections} = contentJson;
// const {width} = Dimensions.get('window');
var content ="";

sections[1].content.map(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
           {(width-0.7*width<400) ? 
            <SectionImage
                source={require("./../../assets/home/contribute.png")} 
                height={220} 
                width={273}
            /> : null }
            <View>
                <SectionHeader title={sections[1].title}></SectionHeader>
                <SectionBody content={content}></SectionBody>
                {/* {sections[1].content.map((text, j)=>(
                    <Text key={j} style={styles.description}>
                        {text.par}
                    </Text>
                ))} */}
            </View>
            {(width-0.7*width>=400) ? 
            <SectionImage
                source={require("./../../assets/home/contribute.png")} 
                height={220} 
                width={273}
            /> : null }
        </View>
        
    );
}

export default GettingStarted;