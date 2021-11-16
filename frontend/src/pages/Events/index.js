import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Headings from '../../Components/Page_headings';
import EventCards from '../../Components/EventCard/index';
import NewEvent from './newEvent';
import EditEvent from './editEvent';


function Events() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/Events/newEvent" render={() => <NewEvent/>} />
                    <Route exact path="/Events/editEvent" render={() => <EditEvent/>} />
                    <Route>
                        <Headings LargeHeading="Events" SmallHeading="Whats happening..." />
                        <EventCards />
                    </Route>
                </Switch>
                
            </Router>

        </>
    );
}

export default Events;
