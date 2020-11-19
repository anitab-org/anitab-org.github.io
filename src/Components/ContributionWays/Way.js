import React from 'react';
import { View, Text, TouchableHighlight, Linking } from 'react-native';

import styles from './styles';
import ImageContent from '../ImageContent';

const Way = ({ heading, channels, content, imageAlign, image }) => {
  const Child = () => (
    <View>
      <Text style={[styles.text, styles.heading]}>{heading}</Text>
      <Text style={styles.text}>
        Zulip Channels:{' '}
        {channels.map(channel => (
          <TouchableHighlight onPress={() => Linking.openURL(channel.url)}>
            <Text>#{channel.name} </Text>
          </TouchableHighlight>
        ))}
      </Text>
      {content.map(({ par }, i) => (
        <Text key={i} style={styles.text}>
          {par}
        </Text>
      ))}
    </View>
  );

  return (
    <ImageContent
      image={image}
      imageSide={imageAlign}
      Children={Child}
      imageProportion={0.3}
    />
  );
};

export default Way;
