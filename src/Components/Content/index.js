import React from 'react';
import { View, Text, Image } from 'react-native';
import About from '../About';

function Content({ selected, titles }) {
  return (
    <View
      style={{
        width: '100%',
        paddingTop: 40,
      }}
    >
      {renderContent(titles[selected])}
{/*
      <Image
        style={{ height: 200, width: 200 }}
        source={require('./../../assets/contribute.png')}
      />
      <Text>UNDER CONSTRUCTION</Text>
*/}
    </View>
  );
}

function renderContent(title) {
  return title === 'ABOUT US' ? <About/> : title;
}

export default Content;
