import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import { ThemeContext } from './Context/ThemeContext';
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
    'CONTRIBUTE',
  ];
  const { colors } = useContext(ThemeContext);
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.background,
        minHeight: '100vh',
      }}
    >
      <Header selected={selected} setSelected={setSelected} titles={titles} />
      <Content selected={selected} titles={titles} />
      <Footer />
    </View>
  );
}

export default App;
