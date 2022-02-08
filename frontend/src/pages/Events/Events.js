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
                <p>We provide students with the necessary skills and tools needed to build scalable and impactful applications. GDSC Provides:
                    <ol>
                        <li>Excellent mentors, who have experience building lasting applications.</li>
                        <li>Tools, which make everything from development to deployment a fun learning experience.</li>
                        <li>Endless oppurtunities for teamwork, by getting an chance to connect with like minded peers, there's no limits to what you might be able to pull off!</li>
                    </ol>
                </p>
            </div>      
            <div className="carousel_the_real_deal" >
                <EventsCarousel />
            </div>
        </div>
    )
}

export default Content;
