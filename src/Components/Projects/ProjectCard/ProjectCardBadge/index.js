import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProjectCardBadge = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.source} />
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
  title: {
    color: '#103B81',
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default ProjectCardBadge;
