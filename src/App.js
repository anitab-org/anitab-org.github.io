import React from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header />
      <Content />
    </View>
  );
}

export default App;
