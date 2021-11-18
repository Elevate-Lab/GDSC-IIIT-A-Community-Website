import React, { useState, useEffect } from 'react'
import Headings from '../../Components/Page_headings/index'
import CoreTeam from './Teams_field/CoreTeam'
import WebTeam from './Teams_field/WebTeam'
import DesignTeam from './Teams_field/DesignTeam'
import MLTeam from './Teams_field/MLTeam'
import OpenSourceTeam from './Teams_field/OpenSourceTeam'
import AppTeam from './Teams_field/AppTeam'
import ManagementTeam from './Teams_field/ManagementTeam'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import leftArrow from '../../Assets/Group 66.svg'
import rightArrow from '../../Assets/Group 65.svg'
import tempImg from '../../Assets/Images/img_teams.jpg'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import './Team.css'

const Fields = [
    "Core Team", "Web", "Design", "ML", "Open Source", "App", "Management"
]
const FieldPages = [
    <CoreTeam />, <WebTeam />, <DesignTeam />, <MLTeam />, <OpenSourceTeam />, <AppTeam />, <ManagementTeam />
]

const slider_img = [
    tempImg,tempImg,tempImg
]

function Team() {

    const [showField, setshowField] = useState("CoreTeam");
    const [showFieldIdx, setshowFieldIdx] = useState(0);

    useEffect(() => {
    }, [showField])

    const UpdateField = e => {
        let field = e.target.innerText;
        setshowField(field.replace(/ /g, ""));
        setshowFieldIdx(Fields.indexOf(field));
    }
    const Left = ({ onClick }) => {
        return (
            <div style={{
                position: 'absolute',
                zINdex: 10,
                cursor: 'pointer',
                left: '0%',
                // top: '50%'
                marginTop: 'auto',
                marginBottom: "auto",
                top: '100%',
                bottom: '100%'
            }} onClick={onClick}>
                {/* <img src={leftArrow} alt="img" /> */}
                <ChevronLeftIcon style={{
                    color: "#fff",
                    fontSize: '5rem'
                }} />
            </div>
        )
    }

    const Right = ({ onClick }) => {
        return (
            <div style={{
                position: 'absolute',
                zIndex: 10,
                cursor: 'pointer',
                right: '0%',
                // top: '50%',
                marginTop: 'auto',
                marginBottom: "auto",
                top: '100%',
                bottom: '100%'
            }} onClick={onClick}>
                {/* <img src={rightArrow} alt="img" /> */}
                <ChevronRightIcon style={{
                    color: "#fff",
                    fontSize: '5rem'
                }} />
            </div>
        )
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <Left />,
        prevArrow: <Right />
    };
    return (
        <div>
            <div>
                <Slider {...settings}>
                    {
                        slider_img.map((item, index) => (
                            <div key={index}>
                                <img style={{
                                    width: '100%'
                                }} src={item} alt="img" />
                            </div>
                        ))
                    }
                </Slider>
            </div>
            <section className='Team_section'>
                <Headings
                    LargeHeading="Our Team"
                    SmallHeading="The ones, who are making it happen"
                />
                <div className="Member-field">
                    <ul className="Field-select">
                        {
                            Fields.map((item, index) => (
                                <li key={index} className={`Field-item ${item.replace(/ /g, "") === showField ? "field-selected" : ""}`} >
                                    <p className="field-link" onClick={UpdateField}>
                                        {item}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="Member_cards_container">
                    {
                        FieldPages[showFieldIdx]
                    }
                </div>
            </section>
        </div>

    )
}

export default Team
