import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { Typography } from '@material-ui/core';
import Headings from '../../Components/Page_headings';
import EventCards from '../../Components/EventCard/index';
import newEvent from './newEvent';


function Events() {
    return (
        <>
            {/* <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography>Events</Typography>
            </div> */}

            <Router>
                <Switch>
                {/* <Route path="/newEvent">
                    <newEvent />
                </Route> */}
                <Route exact path="/newEvent" render={() => <newEvent/>} />
                {/* <Route path="/editEvent">
                    <editEvent />
                </Route> */}
                </Switch>
            </Router>

            <Headings LargeHeading="Events" SmallHeading="Whats happening..." />
            <EventCards />
        </>
    );
}

export default Events;
