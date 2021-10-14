import React from 'react';
import { View, Image, Text, TouchableHighlight, Linking } from 'react-native';
import styles from './styles';

function Social() {
  return (
    <View style={[styles.col, styles.center]}>
      <Text style={[styles.text, styles.heading]}>Follow us here</Text>
      <View style={styles.socialContainer}>
        <TouchableHighlight
          onPress={() =>
            window.open('https://twitter.com/AnitaB_org', '_blank')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/twitter_logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            window.open('https://www.instagram.com/anitab_org/', '_blank')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/instagram_logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            window.open('https://www.facebook.com/AnitaB.0rg/', '_blank')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/facebook_logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            window.open(
              'https://www.linkedin.com/company/anitab-org/',
              '_blank'
            )
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/linkedin-logo.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL('https://medium.com/anitab-org-open-source')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/Medium.png')}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Social;
