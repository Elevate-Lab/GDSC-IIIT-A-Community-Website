import React from 'react';
import heroleft from './Hero_left.svg';

function HeroLeft() {
    return(
        <div
            className="hero-section-left"
            style={{
                position: 'relative',
                height: '100%',
                width: '24vw'
            }}>
            <object 
                type="image/svg+xml" 
                data={heroleft} 
                style={{ 
                    height: '88vh',
                    zIndex: '-2',
                    position: 'absolute',
                    top:'0',
                    left:'0'
                }}>Hero-left-animation</object>
        </div>
    );
}

export default HeroLeft;
