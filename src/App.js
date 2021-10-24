import React from 'react';
import { View } from 'react-native';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Programs from './Components/Programs';
import Projects from './Components/Projects';
import Events from './Components/Events';
import Contribute from './Components/Contribute';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
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
      <Header titles={titles} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/events" component={Events} />
        <Route exact path="/contribute" component={Contribute} />
      </Switch>
      <Footer />
    </View>
  );
}

export default App;
