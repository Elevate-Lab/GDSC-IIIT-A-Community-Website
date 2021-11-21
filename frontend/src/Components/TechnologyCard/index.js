import React from 'react';
import TechnologyCard from './TechnologyCard';

function TechnologyCards() {
    return (
        <>
            <h2 style={{ textAlign: 'center', color: '#4285f4', fontSize: '35px', fontWeight: 'bolder' }}>
                Technologies
            </h2>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}
            >
                <TechnologyCard />
                <TechnologyCard />
                <TechnologyCard />
                <TechnologyCard />
                <TechnologyCard />
            </div>
        </>
    );
}

export default TechnologyCards;
