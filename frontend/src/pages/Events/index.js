import React from 'react';
import { Typography } from '@material-ui/core';
import Headings from '../../Components/Page_headings';
import EventCards from '../../Components/EventCard/index';

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
            <Headings LargeHeading="Events" SmallHeading="Whats happening..." />
            <EventCards />
        </>
    );
}

export default Events;
