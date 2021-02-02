import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Projects from "./components/Projects/Projects";
import Events from "./components/Events/Events";
import Contribute from "./components/Contribute/Contribute";
import Default from "./components/Default/Default";
import NavbarComponent from "./components/navbar/NavbarComponent";

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/programs" component={Programs} />
        <Route path="/projects" component={Projects} />
        <Route path="/events" component={Events} />
        <Route path="/contribute" component={Contribute} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
