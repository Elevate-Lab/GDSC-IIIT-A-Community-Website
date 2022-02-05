import React from 'react'
import {
  HashRouter as Router,
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
import LoginPage from "./pages/Projects/loginPage"
import ViewportProvider from "./viewport";
import ApiState from './ContextApi/ApiState';
import ScrollToTop from "./scrollToTop";

// import Loader from "../src/Loader";
import { useState, useEffect } from 'react';
import Secondload from './Secondload';


import LeaderBoard from './Components/LeaderBoard/LeaderBoard';


function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
setLoading(false);
    },4500)
  }, [])

  return (
    <React.Fragment>
      {
loading?
<Secondload />


:
<ApiState>
    <ViewportProvider>
      <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/events" exact>
            <Events />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/blogs" exact>
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/events/new_event">
             <NewEvent/>
          </Route>
          <Route path="/events/edit_event">
             <EditEvent/>
          </Route>
          <Route path="/events/event_details">
             <LeaderBoard/>
          </Route>
          <Route path="/blogs/new_blog">
             <NewBlog/>
          </Route>
          <Route path="/blogs/edit_blog">
             <EditBlog/>
          </Route>
          <Route path="/team/new_member">
             <NewMember/>
          </Route>
          <Route path="/team/edit_member">
             <EditMember/>
          </Route>
          <Route path="/projects/new_project">
             <NewProject/>
          </Route>  
           <Route path="/projects/login_page">
                  <LoginPage />
                </Route>
          <Route path="/projects/edit_project">
             <EditProject/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </ViewportProvider>
    </ApiState>
}
</React.Fragment>
  );
}

export default App;
