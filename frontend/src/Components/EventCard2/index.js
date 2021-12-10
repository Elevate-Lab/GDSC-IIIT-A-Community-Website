import React from 'react';
import { Typography } from '@material-ui/core';
import EventCard from './EventCard';

function EventCards() {
    return (
        <div
            style={{
                padding: '9vh 7vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    );
}

export default EventCards;
