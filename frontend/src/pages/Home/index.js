import React from 'react';
// import {Typography} from '@material-ui/core'
import About from '../About/index';
import Contact from '../Contact/index';

function Home() {
    return (
        <section
            style={{
                // height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <section
                className="hero-section"
                style={{
                    height: '89vh',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#C4C4C4',
                }}
            >
                Hero
            </section>
            <About />
            <Contact />
        </section>
    );
}

export default Home;
