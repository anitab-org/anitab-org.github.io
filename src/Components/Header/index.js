import React from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';

function Header() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: 800,
        backgroundColor: 'white',
        borderBottomColor: '#FF0000',
        borderBottomWidth: 1,
        alignContent: 'center',
      }}
    >
      <Image
        style={{ height: 50, width: 100 }}
        source={require('./../../logo.png')}
      />
      <TouchableHighlight style={{ paddingTop: 25 }}>
        <Text
          style={{
            marginLeft: 100,
            borderBottomColor: 'powderblue',
            borderBottomWidth: 2,
            alignSelf: 'center',
          }}
        >
          Home
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={{ paddingTop: 25 }}>
        <Text
          style={{
            marginLeft: 40,
            alignSelf: 'center',
          }}
        >
          Program
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={{ paddingTop: 25 }}>
        <Text
          style={{
            marginLeft: 40,
            alignSelf: 'center',
          }}
        >
          Projects
        </Text>
      </TouchableHighlight>
      <TouchableHighlight style={{ paddingTop: 25 }}>
        <Text
          style={{
            marginLeft: 40,
            alignSelf: 'center',
          }}
        >
          Events
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Header;
