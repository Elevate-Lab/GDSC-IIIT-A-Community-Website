import React , { ReactDOM } from "react";
import { makeStyles } from "@material-ui/core";
import EventsCarousel from "./Carousel/Carousel";
import "./Events.css";

const useStyles = makeStyles(theme => ({

    eventHeading: {
        textAlign: "center",
        fontWeight: "600",
        marginTop:'-3rem',
        marginBottom:'1.7rem',
        fontSize:'4rem',
        /*fontWeight:'bold',*/
        color: '#EA4335'
    },

    head: {
        backgroundColor: "blue",
    },

    designConatiner: {
        display: 'flex',
        flexDirection: "row",
    },

    designingConatiner: {

        flexDirection: "row",
    }
}))

// ReactDOM.render(<FouthCarousel />, document.getElementById("app"));

function Content() {
    const Classes = useStyles();


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="carousel_container">
            <div className="carousel_info">
                <h2>What we Teach in Workshops</h2>
                <p>Google collabrates with University Students through Student Clubs to grow Google Communities
GDSC Provides:
1. Oppurtunities to Enhance their technical knowledge.
2. Gain Industrial experience by solving Problems using Technology.
3. Display prototypes & Solutions for industries and Organizations.</p>
            </div>      
            <div className="carousel_the_real_deal" >
                <EventsCarousel />
            </div>
        </div>
    )
}

export default Content;
