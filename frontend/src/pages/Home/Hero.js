import React from 'react';
// import {Typography} from '@material-ui/core'
// import Heroleft './Heroleft';
import './Hero.css';
import Herologo from '../../Assets/DSC-IIITA-Light-Vertical.png'
import ExploreIcon from '../../Assets/chevrons-down.svg'

import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

function Hero() {
    
    return (
        <section className="hero-section">
            <HeroLeft/>
            <div className="hero-section-center">
                <img src={Herologo} alt="Hero Logo"/>
                <div className="hero-join-us">
                    <a href="https://gdsc.community.dev/indian-institute-of-information-technology-allahabad-prayagraj/" target="_blank" rel="noopener noreferrer">
                        Join Us
                    </a>
                </div>
                <div class="hero-explore">
                    <p>Explore</p>
                    <img src={ExploreIcon} alt="Explore"/>
                </div>
            </div>
            <HeroRight/>
        </section>
    );
}

export default Hero;
