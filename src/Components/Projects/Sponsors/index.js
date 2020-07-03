import React from 'react';
import { View, StyleSheet } from 'react-native';
import getSponsors from './../../../content/sponsors';
import Section from './Section';
const contentJson = getSponsors();

function Sponsors() {
  const sponsors = contentJson.map((section, index) =>
    Section({ ...section, index, expandable: section.content.length > 3 }),
  );
  return <View style={styles.container}> {sponsors}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'left',
  },
});

export default Sponsors;
