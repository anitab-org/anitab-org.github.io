import React from 'react';
import { View, Text, Image } from 'react-native';
import Projects from './../Projects';
import AboutUs from './../AboutUs';
import Programs from './../Programs';

function Content({ selected, titles }) {
  if (selected === 1) {
    return <AboutUs />;
  }
  if (selected === 3) {
    return <Projects />;
  }
  if (selected === 2) {
    return <Programs />;
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

export default Content;
