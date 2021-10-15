import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Team from './pages/Team';
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
          <Route path="/Events">
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
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;
