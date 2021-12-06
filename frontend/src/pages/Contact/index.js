import React from 'react'
// import {Typography} from '@material-ui/core'
import Headings from '../../Components/Page_headings'
import Send_icon from '../../Assets/Send_icon.svg'
import Contact_image from '../../Assets/Contact_image.png'
import './Contact.css'

function Contact() {
    return (
        <section
            className='Contact_section'
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                gap: '6.22vh',
                background: '#ffffff'
            }}>

            <Headings
                LargeHeading="Contact Us"
                SmallHeading="Have any queries? We'd love to hear from you!"
                Text=""
                PageIllustration={''}
            />

            <div className="Contact_form_n_image">
                <div className="form_container">
                    <form className="contact_form">
                        <div className="form_name_inp"><input type="text" placeholder="" className="Name_input" /><span className="Name_inp"></span></div>
                        <div className="form_email_inp"><input type="text" placeholder="" className="Email_input" /><span className="Email_inp"></span></div>
                        <div className="form_message_inp"><textarea placeholder="" className="Message_input" /><span className="Message_inp"></span></div>
                        <button type="submit" className="Send_btn">
                            Send
                            <img src={Send_icon} alt="Send"
                                style={{
                                    height: '24px',
                                    width: '24px',
                                }} />
                        </button>
                    </form>
                </div>
                <div className="Contact_image">
                    <img src={Contact_image} alt="Contact_Image" />
                </div>
            </div>

        </section>
    )
}

export default Contact
