import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  const [selected, setSelected] = useState(0);
  const titles = [
    'HOME',
    'ABOUT US',
    'PROGRAMS',
    'PROJECTS',
    'EVENTS',
    'CONTRIBUTE'
  ];
  return (
    <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
      <Header selected={selected} setSelected={setSelected} titles={titles} />
      <Content selected={selected} titles={titles} />
      <Footer />
    </View>
  );
}

export default App;
