import React, { useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ThemeContext } from '../../Context/ThemeContext';

function SectionSubheader({ title }) {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Text style={[styles.header, { color: colors.text }]}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    color: '#103B81',
    alignItems: 'flex-start',
    fontWeight: '400',
    fontSize: 24,
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default SectionSubheader;
