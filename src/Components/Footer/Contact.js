import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import contentJson from '../../content/contact_us.json';

function Contact() {
  const content = contentJson.sections.find(
    section => section.title === 'Contact Us'
  ).content;

  return (
    <View style={[styles.col, styles.right]}>
      <Text style={[styles.text, styles.heading]}>Contact Us</Text>
      {content.map((content, i) => (
        <Text style={[styles.text, styles.description]} key={i}>
          {content.par}
        </Text>
      ))}
    </View>
  );
}

export default Contact;
