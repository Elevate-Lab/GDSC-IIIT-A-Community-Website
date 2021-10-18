import React from 'react'
// import {Typography} from '@material-ui/core'
import About_Image from './Assets/About_DSC_Image.png'

function About() {
    return (
        <section style={{
            height: '125.55vh',
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            gap:'10vh',
            // justifyContent: 'center',
            // alignItems: 'center',
            background: '#ffffff'
        }}>
        <div style={{
            marginTop:'10.88vh',
            display: 'flex',
            flexDirection: 'column',
            gap:'2px',
            paddingLeft:'9.02%',
            width: 'max-content'
        }}>
            <p style={{
                fontWeight: 'bold',
                fontSize: '3.33vw',
                lineHeight: '4.79vw',                
                color: '#1B2733',
                margin: '0',
                padding: '0',
                width: 'max-content'
            }}>About The Community</p>
            <p style={{
                fontWeight: '600',
                fontSize: '1.11vw',
                lineHeight: '1.53vw',                
                color: '#637282',
                margin: '0',
                padding: '0',
                width: 'max-content'
            }}>What we do and How we are so good at it... !</p>
        </div>
        <div style={{
            display: 'flex',
            gap: '6.11vw',
            width: 'max-content',
            paddingLeft:'9.02%'
            // flexDirection: 'row'
        }}>
            <img 
                src={About_Image}
                alt="About_DSC.jpg"
                style={{
                height: '20.83vw',
                width:'37.99vw',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'fit',
                boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)',
                borderRadius: '4px'
            }}/>
            <div style={{
                height: '20.83vw',
                width:'37.99vw',
                background: 'red'
            }}></div>
        </div>
        </section>
    )
}

export default About
