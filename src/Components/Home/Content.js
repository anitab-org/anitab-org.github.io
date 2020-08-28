import React from 'react';
import styles from './styles';
import { View, Text, Image, Dimensions } from 'react-native';
import contentJson from '../../content/home.json';


const {width} = Dimensions.get('window');
function Content(){
    return(
        <View style={{marginTop: 32, marginBottom: 32}}>
            {contentJson.sections.map((content,i)=>(
                //Images for landscape view
                    <View key = {i} style={styles.container}>
                        {(width>800) && (i%2===0) ? 
                            <View style={ (i%2===0) ? styles.imageEven : styles.imageOdd}>
                                <Image
                                    style={{ height: content.height, width: content.width }}
                                    source={require("./../../assets/home/" + content.image)}
                                />
                            </View> 
                        : null}

                    {/* Images for potrait view */}
                    {(width<800) ? 
                        <View  style ={styles.imageEven }>
                            <Image
                                style={{ height: content.height, width: content.width }}
                                source={require("./../../assets/home/" + content.image)}
                            />
                        </View> 
                    : null}
                    <View key={i} style={(i%2===0) ? styles.contentEven : styles.contentOdd}>
                        <Text style={styles.heading}>{content.title}</Text>
                        {content.content.map((text, j)=>(
                            <Text key={j} style={styles.description}>
                                {text.par}
                            </Text>
                        ))}
                    </View>
                    {(i%2!==0) && (width>800) ? 
                        <View style={ (i%2===0) ? styles.imageEven : styles.imageOdd}>
                            <Image
                                style={{ height: content.height, width: content.width }}
                                source={require("./../../assets/home/" + content.image)}
                            />
                        </View> 
                    : null}
                    
                </View>
            ))}
        </View>
        
    );
}

export default Content;





