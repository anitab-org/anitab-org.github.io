import React from 'react';
import { View, Image, Text, Linking, TouchableHighlight } from 'react-native';
import styles from './styles';

function Social() {
  return (
    <View style={[styles.col, styles.center]}>
      <Text style={[styles.text, styles.heading]}>Follow us here</Text>
      <View style={styles.socialContainer}>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/company/anitab-org/')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/linkedin-logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={null}>
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/linkedin-logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight onPress={null}>
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/linkedin-logo.png')}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Social;
