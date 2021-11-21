import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/index';
import Navbar from './Components/Navbar/index';
import About from './pages/About/index';
import Blogs from './pages/Blogs/index';
import Contact from './pages/Contact/index';
import Events from './pages/Events/index';
import EditEvent from './pages/Events/editEvent';
import NewEvent from './pages/Events/newEvent';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import Team from './pages/Team/index';

import ViewportProvider from "./viewport";

function App() {
  return (
    <ViewportProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Events" exact>
            <Events />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/Blogs">
            <Blogs />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Events/newEvent">
             <NewEvent/>
          </Route>
          <Route path="/Events/editEvent">
             <EditEvent/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;
