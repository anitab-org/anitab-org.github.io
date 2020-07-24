import React from 'react';
import { View, Text, Image } from 'react-native';
import Projects from './../Projects';

function Content({ selected, titles }) {
  if (selected === 3) {
    return <Projects />;
  } else {
    return (
      <View
        style={{
          width: '80%',
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
}

function renderContent(title) {
  return <Text>{title}</Text>;
}

function renderContent(title) {
  return <Text>{title}</Text>;
}

export default Content;
