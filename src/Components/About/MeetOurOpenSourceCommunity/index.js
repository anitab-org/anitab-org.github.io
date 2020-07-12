import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Description from './Description';
import Members from './Members';

const MeetOsc = () => {

    return (
        <View style={styles.container}>
            <Description />
            <Members />
        </View>
    );
};

export default MeetOsc;