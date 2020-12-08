import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

function Header({ selected, setSelected, titles }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '80%',
        borderBottomColor: '#FF0000',
        borderBottomWidth: 1,
        alignContent: 'center',
      }}
    >
      <TouchableHighlight
        style={styles.logoContainer}
        underlayColor="transparent"
        onPress={() => setSelected(0)}
        accessible={true}
        accessibilityLabel={titles[0]}
      >
        <Image
          style={{ height: 50, width: 100 }}
          source={require('./../../assets/logo.png')}
        />
      </TouchableHighlight>
      {MenuItem(1, selected, setSelected, titles[1])}
      {MenuItem(2, selected, setSelected, titles[2])}
      {MenuItem(3, selected, setSelected, titles[3])}
      {MenuItem(4, selected, setSelected, titles[4])}
      {MenuItem(5, selected, setSelected, titles[5])}
    </View>
  );
}

function MenuItem(index, selected, setSelected, title) {
  return (
    <TouchableHighlight
      style={styles.buttonContainer}
      underlayColor="transparent"
      onPress={() => setSelected(index)}
      accessible={true}
      accessibilityLabel={title}
    >
      <Text
        style={{
          borderBottomColor: selected === index ? 'powderblue' : 'transparent',
          borderBottomWidth: 2,
          alignSelf: 'center',
        }}
      >
        {title}
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    marginRight:70,
  },
  buttonContainer: { marginTop: 25, marginLeft: 40 },
});

export default Header;
