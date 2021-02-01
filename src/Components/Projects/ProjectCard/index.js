import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScaledImage from './../../ScaledImage';
import { withCard } from './../../../Decorators/Card';
import ProjectCardBadge from './ProjectCardBadge';
import Contributing from './../../Contributors';

const ProjectCard = ({ props, isOver }) => {
  return (
    <View
      style={{
        flex: 1,
        width: 286,
        borderRadius: 4,
        overflow: 'hidden',
      }}
    >
      <ScaledImage width={286} source={props.image.source} />
      <Text style={styles.title}>{props.title}</Text>
      {props.badges.map((badge,index) => (
        <ProjectCardBadge {...badge} key={index} /> //index can be used as unique key here
      ))}

      <Text style={styles.description}>{props.description}</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 0,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          {props.labels.map((label,index) => (
            <Text key={index}
              style={{
                backgroundColor: label.color,
                marginRight: 8,
                marginTop: 8,
                borderRadius: 4,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              {label.title}
            </Text>
          ))}
        </View>
        <Contributing url={props.contributors_url} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#103B81',
    fontWeight: '400',
    fontSize: 18,
    marginTop: 8,
  },
  smallText: {
    color: '#103B81',
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 8,
  },
  description: {
    color: '#103B81',
    fontWeight: '200',
    fontSize: 14,
    marginTop: 8,
  },
});

export default withCard(ProjectCard);
