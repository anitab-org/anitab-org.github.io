import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../Context/ThemeContext';

function SectionHeader({ title, index }) {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.container} key={title + index}>
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
    fontSize: 32,
  },
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 64,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default SectionHeader;
