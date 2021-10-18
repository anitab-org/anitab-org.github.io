import React, { useState } from 'react';
import { View } from 'react-native';
import { useRoutes } from 'hookrouter';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import Programs from './Components/Programs';
import Projects from './Components/Projects';
import Events from './Components/Events';
import Contribute from './Components/Contribute';

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

  const routes = {
    '/': () => <Home />,
    '/about-us': () => <AboutUs />,
    '/programs': () => <Programs />,
    '/projects': () => <Projects />,
    '/events': () => <Events />,
    '/contribute': () => <Contribute />,
  };

  const routeResult = useRoutes(routes);
  return (
    <View style={{ position: 'absolute', width: '100%', alignItems: 'center' }}>
      <Header selected={selected} setSelected={setSelected} titles={titles} />
      {routeResult}
      <Footer />
    </View>
  );
}

export default App;
