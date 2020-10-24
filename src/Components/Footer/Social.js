import React from 'react';
import { View, Image, Text, Linking, TouchableHighlight } from 'react-native';
import styles from './styles';

function Social() {
  return (
    <View style={[styles.col, styles.center]}>
      <Text style={[styles.text, styles.heading]}>Follow us here</Text>
      <View style={styles.socialContainer}>
        <TouchableHighlight
          onPress={() => Linking.openURL('https://twitter.com/AnitaB_org')}
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/twitter_logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL('https://www.instagram.com/anitab_org/')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/instagram_logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL('https://www.facebook.com/AnitaB.0rg/')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/facebook_logo.png')}
          />
        </TouchableHighlight>
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
      </View>
    </View>
  );
}

export default Social;
