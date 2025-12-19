import React from 'react';
import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import { ThemeContext } from '../../Context/ThemeContext';

function Header({ selected, setSelected, titles }) {
  const { theme, toggleTheme, colors } = React.useContext(ThemeContext);
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '80%',
        borderBottomColor: colors.headerBorder,
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
          source={
            theme === 'dark'
              ? require('./../../assets/logo_dark.png')
              : require('./../../assets/logo.png')
          }
        />
      </TouchableHighlight>
      {MenuItem(1, selected, setSelected, titles[1], colors)}
      {MenuItem(2, selected, setSelected, titles[2], colors)}
      {MenuItem(3, selected, setSelected, titles[3], colors)}
      {MenuItem(4, selected, setSelected, titles[4], colors)}
      {MenuItem(5, selected, setSelected, titles[5], colors)}
      <View style={{ justifyContent: 'flex-end', marginLeft: 20 }}>
        <Expand
          duration={550}
          toggled={theme === 'dark'}
          onToggle={toggleTheme}
          style={{ color: colors.iconColor, fontSize: '1.4em' }}
        />
      </View>
    </View>
  );
}

function MenuItem(index, selected, setSelected, title, colors) {
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
          color: colors.text,
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
