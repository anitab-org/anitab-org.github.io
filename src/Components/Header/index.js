import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

function Header({ selected, setSelected, titles, path }) {
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
        <a styles={styles.links} href="/">
          <Image
            style={{ height: 50, width: 100 }}
            source={require('./../../assets/logo.png')}
          />
        </a>
      </TouchableHighlight>
      {MenuItem(1, selected, setSelected, titles[1], '/about-us')}
      {MenuItem(2, selected, setSelected, titles[2], '/programs')}
      {MenuItem(3, selected, setSelected, titles[3], '/projects')}
      {MenuItem(4, selected, setSelected, titles[4], '/events')}
      {MenuItem(5, selected, setSelected, titles[5], '/contribute')}
    </View>
  );
}

function MenuItem(index, selected, setSelected, title, path) {
  return (
    <TouchableHighlight
      style={styles.buttonContainer}
      underlayColor="transparent"
      onPress={() => setSelected(index)}
      accessible={true}
      accessibilityLabel={title}
    >
      <a styles={styles.links} href={path}>
        <Text
          style={{
            borderBottomColor:
              selected === index ? 'powderblue' : 'transparent',
            borderBottomWidth: 2,
            alignSelf: 'center',
          }}
        >
          {title}
        </Text>
      </a>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    marginRight: 70,
  },
  buttonContainer: { marginTop: 25, marginLeft: 40 },
  links: {
    textDecoration: 'none',
    '&:visited': {
      textDecoration: 'none',
    },
  },
});

export default Header;
