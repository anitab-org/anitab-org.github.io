import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Header({ titles }) {
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
      {MenuItem(titles[1], '/about-us')}
      {MenuItem(titles[2], '/programs')}
      {MenuItem(titles[3], '/projects')}
      {MenuItem(titles[4], '/events')}
      {MenuItem(titles[5], '/contribute')}
    </View>
  );
}

function MenuItem(title, path) {
  const location = useLocation();
  const currentPath = location.pathname;
  const isSelected = (path) => currentPath === path;

  return (
    <TouchableHighlight
      style={styles.buttonContainer}
      underlayColor="transparent"
      accessible={true}
      accessibilityLabel={title}
    >
      <Link to={path}>
        <Text
          style={{
            borderBottomColor: isSelected(path) ? 'powderblue' : 'transparent',
            borderBottomWidth: 2,
            alignSelf: 'center',
          }}
        >
          {title}
        </Text>
      </Link>
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
