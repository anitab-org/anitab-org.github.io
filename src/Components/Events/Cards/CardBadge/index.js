import React from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { ThemeContext } from '../../../../Context/ThemeContext';

const Badge = (props) => {
  const { colors } = React.useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <Image
        style={[styles.image, { tintColor: colors.iconColor || colors.text }]}
        source={props.link}
      />
      <Text style={[styles.description, { color: colors.text }]}>
        {props.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  image: {
    width: 25,
    height: 25,
    tintColor: '#103B81',
  },
  description: {
    fontSize: 16,
    color: '#103B81',
    fontWeight: 200,
    marginLeft: 16,
  },
});

export default Badge;
