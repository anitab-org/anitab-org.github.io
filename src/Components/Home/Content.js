import React, { useState} from 'react';
import styles from './styles';
import { View, Text, Image } from 'react-native';
import contentJson from '../../content/home.json';

function Content(){
    const [index, setIndex] = useState(0);
    const inc = () => {
        setIndex(index+1);
    }
    
    return(
        <View >
            {contentJson.sections.map((content, i)=>(
                <View style={styles.container}>
                    <View style={ (i%2==0) ? styles.imageEven : styles.imageOdd}>
                    <Image
                        style={{ height: 150, width: 150 }}
                        source={require('./../../assets/home/1.png')}
                    />
                    </View>
                    <View key={i} style={[styles.verticle, (i%2==0) ? styles.contentEven : styles.contentOdd]}>
                        <Text style={styles.heading} onC>{content.title}</Text>
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