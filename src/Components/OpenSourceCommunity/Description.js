import React from 'react';
import styles from './styles';
import { View, Text } from 'react-native';


function Description() {

    return (
        <View >
            <View style={styles.lineStyle} />
            <Text style={[styles.heading]}>MEET OUR OPEN SOURCE COMMUNITY</Text>
            <Text style={[styles.description]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum</Text>
        </View>

    );
};

export default Description;

