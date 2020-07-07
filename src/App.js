import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';
import Events from './Components/Events'


function App() {
  const [selected, setSelected] = useState(0);
  const titles = [
    'HOME',
    'ABOUT US',
    'PROGRAMS',
    'PROJECTS',
    'EVENTS',
    'CONTRIBUTE',
  ];
  return (
    <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
      <Header selected={selected} setSelected={setSelected} titles={titles} />

      <Events />
    </View>
  );
}

export default App;
