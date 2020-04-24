import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  const [selected, setSelected] = useState(0);
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Header selected={selected} setSelected={setSelected} />
      <Content selected={selected} />
    </View>
  );
}

export default App;
