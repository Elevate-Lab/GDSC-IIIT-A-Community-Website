import React from 'react';
import heroright from './Hero_right.svg';

function HeroRight() {
    return(
        <div
            className="hero-section-right" 
            style={{
                position: 'relative',
                height: '100%',
                width: '24vw'
            }}>
        <object 
            type="image/svg+xml" 
            data={heroright} 
            style={{ 
                height: '88vh',
                zIndex: '-2',
                position: 'absolute',
                top:'0',
                right:'0'
            }}>Hero-right-animation</object>
        </div>
    );
}

export default HeroRight;
