import React from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import contentJson from '../../content/home.json';

function Content(){
    
    return(
        <View style={{marginTop: 32}}>
            {contentJson.sections.map((content, i)=>(
                <View style={styles.container}>
                    <View style={ (i%2==0) ? styles.imageEven : styles.imageOdd}>
                    <Image
                        style={{ height: content.height, width: content.width }}
                        source={require("./../../assets/home/" + content.image)}
                    />
                    </View>
                    <View key={i} style={(i%2==0) ? styles.contentEven : styles.contentOdd}>
                        <Text style={styles.heading}>{content.title}</Text>
                        {content.content.map((text, j)=>(
                            <Text key={j} style={styles.description}>
                                {text.par}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
        </View>
        
    );
}

export default Content;