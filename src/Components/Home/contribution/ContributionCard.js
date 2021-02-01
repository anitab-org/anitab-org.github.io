import React from "react";
import { Text, View, Image } from 'react-native';
import styles from '../styles';

function ContributionCard({imageFile, imageText=[], style=[]}) {
    return (

        <View style={[...style, styles.card]}>
            <Image
                source={require(`./../../../assets/contribution/${imageFile}`)}
                style={styles.contributionImage}
                resizeMode="contain"
            />
            {imageText.map(((text,index) => {
              return <Text key={index} style={styles.imageText}>{text}</Text>
            }))}
        </View>
    );
}

export default ContributionCard;
