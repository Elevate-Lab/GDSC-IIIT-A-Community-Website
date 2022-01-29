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
        <div style={{ width: '100%' }}>
            
            {/* <h1 className={Classes.eventHeading}>Events</h1> */}

            {/* <div style={{ display: 'flex', justifyContent: 'center', direction: 'row' }}>
                <div style={{ backgroundColor: '#156EFF', width: `calc(100vw/4)`, height: '1vh' }}>

                </div>
                <div style={{ backgroundColor: '#FBBC04', width: `calc(100vw/4)`, height: '1vh' }}>

                </div>
                <div style={{ backgroundColor: '#EA4235', width: `calc(100vw/4)`, height: '1vh' }}>

                </div>
                <div style={{ backgroundColor: '#0F9D58', width: `calc(100vw/4)`, height: '1vh' }}>

                </div>
            </div> */}



       
            <div style={{ minHeight: '100vh' }}>
                <FouthCarousel />
            </div>

        </div>
    )
}

export default Content;
