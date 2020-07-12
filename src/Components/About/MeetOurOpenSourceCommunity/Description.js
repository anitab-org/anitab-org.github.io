import React from 'react';
import styles from './styles';
import {
    View,
    Text,
    Linking,
    TouchableHighlight,
} from 'react-native';


function Description() {

    return (
        <View >
            <View style={styles.lineStyle} />
            <Text style={[styles.heading]}>MEET OUR OPEN SOURCE COMMUNITY</Text>
            <Text style={[styles.description]}>
                Women transform technology. Technology transforms the world. Join us at -
            <TouchableHighlight
                    underlayColor='transparent'
                    accessible={true}
                    onPress={() => Linking.openURL('http://anitab-org.zulipchat.com')}
                >
                    <Text > Zulip </Text>
                </TouchableHighlight>
            </Text>
        </View>

    );
};

export default Description;

