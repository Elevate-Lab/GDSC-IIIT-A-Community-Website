import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Bluetooth, BlurLinear, Height } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { blue, red, yellow, green } from "@material-ui/core/colors";
import FouthCarousel from "./Fourth/FourthCarousel";
import { ReactDOM } from "react";
const useStyles = makeStyles(theme => ({

    eventHeading: {
        textAlign: "center",
        textDecoration: "Bold",
        marginTop:'-3rem',
        marginBottom:'1.7rem',
        fontSize:'4rem',
        fontFamily:"PT Serif Caption",
        fontWeight:'bold'
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
        <div style={{ width: '100%' }}>
            
            <h1 className={Classes.eventHeading}>Events</h1>

            <div style={{ display: 'flex', justifyContent: 'center', direction: 'row' }}>
                <div style={{ backgroundColor: 'blue', width: `calc(100vw/3)`, height: '0.4rem' }}>

                </div>
                <div style={{ backgroundColor: 'yellow', width: `calc(100vw/3)`, height: '0.4rem' }}>

                </div>
                <div style={{ backgroundColor: 'red', width: `calc(100vw/3)`, height: '0.4rem' }}>

                </div>
            </div>



       
            <div style={{ minHeight: '40rem' }}>
                <FouthCarousel />
            </div>

        </div>
    )
}

export default Content;
