import React from 'react';
import styles from './styles';
import { View, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';
import SectionHeader from '../SectionHeader';
import SectionImage from '../SectionImage';
import SectionBody from '../SectionBody';

const {width} = Dimensions.get('window');
const {sections} = contentJson;
var content ="";

sections[3].content.forEach(text=>{
    content += text.par+"\n";
})
function GettingStarted(){
    return(
        <View style={styles.container}>
            {(width-0.7*width<400) ? 
            <SectionImage
                source={require("./../../assets/home/space1.png")} 
                height={208} 
                width={273}
            /> : null}
            <View>
                <SectionHeader title={sections[3].title}></SectionHeader>
                <SectionBody content={content}></SectionBody>
              
            </View>
            {(width-0.7*width>=400) ? 
            <SectionImage
                source={require("./../../assets/home/space1.png")} 
                height={208} 
                width={273}
            /> : null}
        </View>
        
    );
}

export default GettingStarted;