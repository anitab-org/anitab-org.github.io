import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './styles';
import contentJson from '../../content/contact_us.json';
import Hyperlink from 'react-native-hyperlink';

function Contact() {
  const content = contentJson.sections.find(
    (section) => section.title === 'Contact Us'
  ).content;

  return (
    <View style={[styles.col, styles.right]}>
      <Text style={[styles.text, styles.heading]}>Contact Us</Text>
      {content.map((content, i) => (
        <Hyperlink
          linkStyle={{ color: '#2980b9' }}
          onPress={(url) => window.open(url, '_blank')}
        >
          <Text style={[styles.text, styles.description]} key={i}>
            {content.par}
          </Text>
        </Hyperlink>
      ))}
      <View style={styles.socialContainer}>
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
            window.open('https://www.linkedin.com/company/anitab-org/', '_blank')
          }
        >
          <Image
            style={[styles.socialImage]}
            source={require('./../../assets/linkedin-logo.png')}
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
      </View>
    </View>
  );
}

export default Contact;
