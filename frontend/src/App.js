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
import EditBlog from './pages/Blogs/editBlog';
import NewBlog from './pages/Blogs/newBlog';
import Contact from './pages/Contact/index';
import Events from './pages/Events/index';
import EditEvent from './pages/Events/editEvent';
import NewEvent from './pages/Events/newEvent';
import Home from './pages/Home/index';
import Projects from './pages/Projects/index';
import EditProject from './pages/Projects/editProject';
import NewProject from './pages/Projects/newProject';
import Team from './pages/Team/index';
import EditMember from './pages/Team/editMember';
import NewMember from './pages/Team/newMember';

import ViewportProvider from "./viewport";
import LeaderBoard from './Components/LeaderBoard/LeaderBoard';

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
          <Route path="/Team" exact>
            <Team />
          </Route>
          <Route path="/Projects" exact>
            <Projects />
          </Route>
          <Route path="/Blogs" exact>
            <Blogs />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Events/NewEvent">
             <NewEvent/>
          </Route>
          <Route path="/Events/EditEvent">
             <EditEvent/>
          </Route>
          <Route path="/Events/EventDetails">
             <LeaderBoard/>
          </Route>
          <Route path="/Blogs/NewBlog">
             <NewBlog/>
          </Route>
          <Route path="/Blogs/EditBlog">
             <EditBlog/>
          </Route>
          <Route path="/Team/NewMember">
             <NewMember/>
          </Route>
          <Route path="/Team/EditMember">
             <EditMember/>
          </Route>
          <Route path="/Projects/NewProject">
             <NewProject/>
          </Route>
          <Route path="/Projects/EditProject">
             <EditProject/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
  );
}

export default App;
