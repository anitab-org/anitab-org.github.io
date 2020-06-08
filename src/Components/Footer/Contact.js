import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

function Contact() {
  return (
    <View style={[styles.col, styles.right]}>
      <Text style={[styles.text, styles.heading]}>Contact Us</Text>
      <Text style={[styles.text, styles.description]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
        at neque a pharetra. Cras ornare placerat imperdiet. Aliquam erat
        volutpat. Cras rhoncus massa et molestie rutrum. Vivamus sit amet arcu
        et felis auctor auctor. Fusce nec augue nec lacus imperdiet viverra.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Ut ac leo risus. Aliquam a eleifend est, sit
        amet tempor nisi. Donec scelerisque elit ac lorem interdum sodales.
        Fusce at est id sem porttitor aliquam quis quis nibh. Morbi lobortis
        neque lectus, in rhoncus magna viverra ut.
      </Text>
    </View>
  );
}

export default Contact;
