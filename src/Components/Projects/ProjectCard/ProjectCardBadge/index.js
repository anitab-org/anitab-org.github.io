import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProjectCardBadge = (props) => {
  return (
    <View style={styles.container}>
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <Image style={styles.image} source={props.source} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href={props.url}>
        <Text style={styles.title}>{props.title}</Text>
      </a>
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
    width: 32,
    height: 32,
  },
  title: {
    color: '#103B81',
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 8,
  },
});

export default ProjectCardBadge;
