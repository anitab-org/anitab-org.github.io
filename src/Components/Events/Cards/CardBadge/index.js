import React from 'react';
import {Text, Image, StyleSheet, View} from 'react-native';

const  Badge = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={props.link} />
            <Text style={styles.description}>{props.text}</Text>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 16,
    },
    image: {
        width: 25,
        height: 25,
        tintColor: '#103B81',
    },
    description: {
        fontSize: 16,
        color: '#103B81',
        fontWeight: 200,
        marginLeft: 16,
       
    }
});

export default Badge;