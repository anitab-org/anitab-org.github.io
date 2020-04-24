import React from 'react';
import { View, Text, Image } from 'react-native';

function Content({ selected, titles }) {
  return (
    <View
      style={{
        width: 800,
        height: 600,
        alignItems: 'center',
        paddingTop: 40,
      }}
    >
      {renderContent(titles[selected])}
      <Image
        style={{ height: 200, width: 200 }}
        source={require('./../../assets/contribute.png')}
      />
      <Text>UNDER CONSTRUCTION</Text>
    </View>
  );
}

function renderContent(title) {
  return <Text>{title}</Text>;
}

export default Content;
