import React from 'react'
// import {Typography} from '@material-ui/core'

function About() {
    return (
        <section style={{
            height: '110.35vh',
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'center',
            // alignItems: 'center',
            background: '#ffffff'
        }}>
        <div style={{
            marginLeft:'9.02vw',
            marginTop:'9.57vh',
            display: 'flex',
            flexDirection: 'column',
            gap:'2px'
        }}>
            <p style={{
                fontWeight: 'bold',
                fontSize: '3.33vw',
                lineHeight: '4.79vw',                
                color: '#1B2733',
                margin: '0',
                padding: '0'
            }}>About The Community</p>
            <p style={{
                fontWeight: '600',
                fontSize: '1.11vw',
                lineHeight: '1.53vw',                
                color: '#637282',
                margin: '0',
                padding: '0'
            }}>What we do and How we are so good at it... !</p>
        </div>
        
        </section>
    )
}

export default About
