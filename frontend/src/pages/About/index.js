import React from 'react'
// import {Typography} from '@material-ui/core'
import About_DSC_Image from '../../Assets/About_DSC_Image.png'
import About_DSC_IIITA_Image from '../../Assets/About_DSC_IIITA_Image.png'
import Headings from '../../Components/Page_headings'
import KnowMore_icon from '../../Assets/know_more_icon.png'

function About() {
    return (
        <section style={{
            height: '140.55vh',
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            gap:'10vh',
            paddingTop: '10.88vh',
            background: '#ffffff'
        }}>
        
        <Headings 
            LargeHeading="About The Community" 
            SmallHeading="What we do and How we are so good at it... !"
        />

        <div
            className="About_DSC"  
            style={{
            display: 'flex',
            gap: '6.11vw',
            width: 'max-content',
            paddingLeft:'9.02%'
            // flexDirection: 'row'
        }}>
            <img 
                src={About_DSC_Image}
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
                // background: 'red',
                display: 'flex',
                flexDirection: 'column',
                gap: '36px'
            }}>
                <p 
                    style={{
                    fontWeight: 'bold',
                    fontSize: '2.5vw',
                    lineHeight: '1.53vw',
                    color: '#1B2733',
                    margin: '0',
                    padding: '0'
                    }}>About DSC</p>
                <p 
                    style={{
                    fontWeight: 'normal',
                    fontSize: '1.11vw',
                    lineHeight: '1.53vw',
                    color: '#637282',
                    margin: '0',
                    padding: '0'
                    }}>Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.</p>
                <button 
                    style={{
                    height: '50px',
                    width: '200px',
                    background: '#08AD5D',
                    fontWeight: 'bold',
                    fontSize: '1.25vw',
                    lineHeight: '1.8vw',
                    color: '#fff',
                    outline: 'none',
                    border: 'none',
                    marginTop: '20px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'16px'
                    }}>
                    <img src={KnowMore_icon} alt="Know More"
                         style={{
                             height: '24px',
                             width: '24px',
                             backgroundSize:'fit'
                         }} />
                    Know more
                </button>
            </div>
            
        </div>
        <div
            className="About_DSC_IIITA" 
            style={{
            display: 'flex',
            gap: '6.11vw',
            width: 'max-content',
            paddingLeft:'9.02%',
            flexDirection: 'row-reverse'
        }}>
            <img 
                src={About_DSC_IIITA_Image}
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
                // background: 'red',
                display: 'flex',
                flexDirection: 'column',
                gap: '36px'
            }}>
                <p 
                    style={{
                    fontWeight: 'bold',
                    fontSize: '2.5vw',
                    lineHeight: '1.53vw',
                    color: '#1B2733',
                    margin: '0',
                    padding: '0'
                }}>About DSC IIITA</p>
                <p 
                    style={{
                    fontWeight: 'normal',
                    fontSize: '1.11vw',
                    lineHeight: '1.53vw',
                    color: '#637282',
                    margin: '0',
                    padding: '0'
                }}>Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.</p>
                <button 
                    style={{
                    height: '50px',
                    width: '200px',
                    background: '#08AD5D',
                    fontWeight: 'bold',
                    fontSize: '1.25vw',
                    lineHeight: '1.8vw',
                    color: '#fff',
                    outline: 'none',
                    border: 'none',
                    marginTop: '20px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    {/* <img src="{KnowMore_Icon}" alt="Know More" /> */}
                    Meet the Team
                </button>
            </div>
        </div>

        </section>
    )
}

export default About
