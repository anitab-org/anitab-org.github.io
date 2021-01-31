import React from 'react';
import { View, Text, Image } from 'react-native';
import Projects from './../Projects';
import Home from './../Home';
import AboutUs from './../AboutUs';
import Programs from './../Programs';
import Contribute from '../Contribute';
import Events from './../Events/index';

function Content({ selected, titles }) {
  if (selected === 0) {
    return <Home />;
  } else if (selected === 1) {
    return <AboutUs />;
  } else if (selected === 3) {
    return <Projects />;
  }else if (selected === 2) {
    return <Programs />;
  } else if(selected === 4){
    return <Events/>
  }else if (selected === 5) {
    return <Contribute />;
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
