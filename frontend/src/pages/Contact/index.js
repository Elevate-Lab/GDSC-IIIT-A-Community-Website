import React from 'react'
// import {Typography} from '@material-ui/core'
import Headings from '../../Components/Page_headings'
import Send_icon from '../../Assets/Send_icon.png'
import Contact_image from '../../Assets/Contact_image.png'
import './Contact.css'

function Contact() {
    return (
        <section 
            className='Contact_section'
            style={{
            width:'100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            gap:'6.22vh',
            background: '#ffffff'
        }}>
            
            <Headings 
                LargeHeading="Contact Us" 
                SmallHeading="Have any queries? We'd love to hear from you!"
            />

            <div className="Contact_form_n_image">
                <div className="form_container">
                    <form classNamae="contact_form">
                        <input type="text" placeholder="Name" className="Name_input"/>
                        <input type="text" placeholder="E-mail" className="Email_input"/>
                        <textarea placeholder="Message" className="Message_input" /> 
                        <button type="submit" className="Send_btn">
                            Send
                            <img src={Send_icon} alt="Send"
                                style={{
                                height:'24px',
                                width:'24px',
                                }} />
                        </button>                       
                    </form>
                </div>
                <div className="Contact_image">
                    <img src={Contact_image} alt="Contact_Image"/>
                </div>
            </div>

        </section>
    )
}

export default Contact
