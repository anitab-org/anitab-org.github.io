import React from 'react';
import { View, Text, Image } from 'react-native';

function Content({ selected }) {
  return (
    <View
      style={{
        width: 800,
        height: 600,
        alignItems: 'center',
        paddingTop: 40,
      }}
    >
      {renderContent(selected)}
      <Image
        style={{ height: 200, width: 200 }}
        source={require('./../../assets/contribute.png')}
      />
      <Text>UNDER CONSTRUCTION</Text>
    </View>
  );
}

function renderContent(selected) {
  const titles = [
    'HOME',
    'About us',
    'Programs',
    'Projects',
    'Events',
    'Contribute',
  ];
  const title = titles[selected];
  return <Text>{title}</Text>;
}

export default Content;
