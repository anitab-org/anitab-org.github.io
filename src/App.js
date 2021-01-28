import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from "./Components/Theme";
// import { useDarkMode } from "./Components/useDarkMode";
// import Toggle from "./Components/Toggler"

function App() {
  const [selected, setSelected] = useState(0);
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
 
  const titles = [
    'HOME',
    'ABOUT US',
    'PROGRAMS',
    'PROJECTS',
    'EVENTS',
    'CONTRIBUTE'
  ];
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
   
      <>
      <GlobalStyles/>
        <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
          
          <Header selected={selected} setSelected={setSelected} titles={titles} />
          <button onClick={themeToggler}>Switch Theme</button>
          
      <Content selected={selected} titles={titles} />
      <Footer />
    </View>
  </>
    </ThemeProvider>);
}

export default App;
