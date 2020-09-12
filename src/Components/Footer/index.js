import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Form from './Form';
import Social from './Social';
import Contact from './Contact';

function Footer() {
  return (
    <View style={styles.container}>
      <Form />
      <Social />
      <Contact />
    </View>
  );
}

export default Footer;
