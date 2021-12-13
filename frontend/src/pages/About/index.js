import React from 'react'
// import {Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import About_DSC_Image from '../../Assets/About_DSC_Image.png'
import About_DSC_IIITA_Image from '../../Assets/About_DSC_IIITA_Image.png'
import Headings from '../../Components/Page_headings'
import KnowMore_icon from '../../Assets/external-link.svg'
import './About.css'
import what_we_do_card_img_1 from '../../Assets/What_we_do_Projects.svg'
import what_we_do_card_img_2 from '../../Assets/What_we_do_Seminars.svg'
import what_we_do_card_img_3 from '../../Assets/What_we_do_Hackathons.svg'
import what_we_do_card_img_4 from '../../Assets/What_we_do_StudyJams.svg'
import join_the_convo_img_1 from '../../Assets/Join_twitter.png'
import join_the_convo_img_2 from '../../Assets/Join_discord.png'

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
            Text=""
            PageIllustration={''}
        />

        <div className="About_DSC About"  >
            <img src={About_DSC_Image}
                 alt="About_DSC.jpg" />
            <div>
                <p className="Abt_Heading">About DSC</p>
                <p className="Abt_Content">Developer Student Club (DSC) is a Google Developers program for university students to learn mobile and web development skills. The club will be open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills. The club is intended as a space for students to try out new ideas and collaborate to solve mobile and web development problems.</p>
                <button>
                    <img src={KnowMore_icon} alt="Know More" />
                    Know More
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

        <div className="What_we_do">
            <p className="What_we_do_heading">What DSC IIITA does?</p>
            <div className="What_we_do_cards">
                <div className="What_we_do_card1">
                    <div className="What_we_do_card_img">
                        <img src={what_we_do_card_img_1} alt="Projects"/>
                    </div>
                    <div className="What_we_do_card_text">
                        <p className="What_we_do_card_head">Projects</p>
                        <p className="What_we_do_card_desc">Projects with a social impact that help a large part of society.</p>
                    </div>
                </div>
                <div className="What_we_do_card2">
                    <div className="What_we_do_card_img">
                        <img src={what_we_do_card_img_2} alt="Seminars"/>
                    </div>
                    <div className="What_we_do_card_text">
                        <p className="What_we_do_card_head">Seminars</p>
                        <p className="What_we_do_card_desc">Get updated with the latest news and announcements.</p>
                    </div>
                </div>
                <div className="What_we_do_card3">
                    <div className="What_we_do_card_img">
                        <img src={what_we_do_card_img_3} alt="Hackathons"/>
                    </div>
                    <div className="What_we_do_card_text">
                        <p className="What_we_do_card_head">Hackathons</p>
                        <p className="What_we_do_card_desc">Dream. Explore. Wonder. Build it Together.</p>
                    </div>
                </div>
                <div className="What_we_do_card4">
                    <div className="What_we_do_card_img">
                        <img src={what_we_do_card_img_4} alt="Study Jams"/>
                    </div>
                    <div className="What_we_do_card_text">
                        <p className="What_we_do_card_head">Study Jams</p>
                        <p className="What_we_do_card_desc">Hands-on experience with the community members.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="Join_the_convo">
            <p className="Join_the_convo_heading">Join the Conversation</p>
            <div className="Join_the_convo_cards">
                <div className="Join_twitter_card">
                    <p>Follow our Twitter Handle for regular updates regarding Events and many more... </p>
                    <div className="Join_twitter" style={{background:"#00A3F2"}}>
                        <img src={join_the_convo_img_1} alt="Twitter"/>
                        <a href="https://twitter.com/Gdsciiita" target="_blank" rel="noopener noreferrer">
                            Follow Twitter
                        </a>
                    </div>
                </div>
                <div className="Join_discord_card">
                    <p>Join our Discord Server to know more about the Activities, Sessions and other fun stuff</p>
                    <div className="Join_discord" style={{background:"#586AEA"}}>
                        <img src={join_the_convo_img_2} alt="Discord"/>
                        <a href="https://discord.com/invite/gv9zzDcQUH" target="_blank" rel="noopener noreferrer">
                            Join Discord
                        </a>
                    </div>
                </div>
            </div>
        </div>

        </section>
    )
}

export default About
