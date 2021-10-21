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
      {titles.map(
        (title, index) =>
          index > 0 && MenuItem(index, selected, setSelected, title)
      )}
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
          borderBottomColor: index === selected ? 'powderblue' : 'transparent',
          borderBottomWidth: 2,
          alignSelf: 'center',
          textTransform: 'uppercase',
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
    marginRight: 70,
  },
  buttonContainer: { marginTop: 25, marginLeft: 40 },
});

export default Header;
