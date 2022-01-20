import React from 'react';
import heroright from './Hero_right.svg';

function HeroRight() {
    return(
        <div
            className="hero-section-right" 
            style={{
                position: 'relative'
            }}>
        <object 
            type="image/svg+xml" 
            data={heroright} 
            style={{ 
                zIndex: '-2',
                position: 'absolute',
                top:'0',
                right:'0'
            }}>Hero-right-animation</object>
        </div>
    );
}

export default HeroRight;
