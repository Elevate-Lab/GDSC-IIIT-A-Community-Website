import React from 'react'
// import {Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import About_DSC_Image from '../../Assets/About_DSC_Image.png'
import About_DSC_IIITA_Image from '../../Assets/About_DSC_IIITA_Image.png'
import Headings from '../../Components/Page_headings'
import KnowMore_icon from '../../Assets/know_more_icon.png'
import './About.css'

function About() {
    return (
        <section 
            className="About_section" 
            style={{
            width:'100%',
            display: 'flex',
            flexDirection:'column',
            gap:'10vh',
            paddingTop: '10.88vh',
            paddingBottom: '6vh',
            background: '#ffffff'
        }}>
        
        <Headings 
            LargeHeading="About The Community" 
            SmallHeading="What we do and How we are so good at it... !"
        />

        <div className="About_DSC About"  >
            <img src={About_DSC_Image}
                 alt="About_DSC.jpg" />
            <div>
                <p className="Abt_Heading">About DSC</p>
                <p className="Abt_Content">Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.</p>
                <button>
                    <img src={KnowMore_icon} alt="Know More" />
                    Know more
                </button>
            </div>
            
        </div>
        <div className="About About_DSC_IIITA" >
            <img src={About_DSC_IIITA_Image}
                 alt="About_DSC.jpg" />
            <div>
                <p className="Abt_Heading">About DSC IIITA</p>
                <p className="Abt_Content">Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.</p>
                <button>
                    <Link to="/Team" className="Abt_btn_txt" >
                        Meet the Team
                    </Link>
                </button>
            </div>
        </div>

        </section>
    )
}

export default About
