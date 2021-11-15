import React from 'react'
import { makeStyles } from '@material-ui/core'
import { CenterFocusStrong, FormatAlignCenter, Height } from '@material-ui/icons';
import { findByLabelText } from '@testing-library/react';
import { Images } from "./CarouselData.js";
import { useState } from 'react';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import { borderColor, fontFamily } from '@mui/system';
import { borders } from '@material-ui/system';
const useStyles = makeStyles(theme => ({
    hello: {
        width: "48rem",
        height: "35rem",
        backgroundColor: 'black',
        color: "white",
        alignContent: "center",
        marginLeft: '0.3rem'

    },
    carousel: {

        width: "46.5rem",
        height: "35rem",

    },

    dis: {
        display: "flex",
        flexDirection: "row",
        borderLeft: '0.5rem',
        borderColor:'red',
    },
    carouselInner: {
        height: "100%",
        width: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex"

    },
    left: {
        flex: "2%",
        opacity: "0.9",
        display: 'grid',
        color: 'white',
        placeItems: "center",
        cursor: "pointer"
    },
    center: {
        flex: "80%",
    },
    right: {
        flex: "2%",
        opacity: "0.9",
        display: 'grid',
        color: 'white',
        placeItems: "center",
        cursor: "pointer"
    },
    textUs: {
        width: "30rem",
        textAlign: "center",
        marginLeft: "6rem",
        marginTop: "3rem"
    },
    designtext: {
        fontFamily: "sans-serif"
    }


}))

function Carousel() {
    const Classes = useStyles();
    const x = 0;
    const [currImg, setCurrImg] = useState(0);
    return (
        
        <div conatined className={Classes.dis}>
            <div className={Classes.hello}>

                <div className={Classes.textUs}>
                    <h2
                        className={Classes.designtext}>What we Teach in Workshops</h2>
                    <h3
                        className={Classes.designtext}>Google collabrates with University Students through Student Clubs to grow Google Communities</h3>
                    <h3
                        className={Classes.designtext}>DSC Provides:</h3>
                    <h4
                        className={Classes.designtext}>1. Oppurtunities to Enhance their technical knowledge.</h4>
                    <h4
                        className={Classes.designtext}>2. Gain Industrial experience by solving Problems using Technology.</h4>
                    <h4
                        className={Classes.designtext}>3. Display prototypes & Solutions for industries and Organizations.</h4>
                    <h3
                        className={Classes.designtext}>Google Developers supports and recognizes DSC's but does not own or manage them. </h3>
                </div>
            </div>
            <div className={Classes.carousel}>
                <div className={Classes.carouselInner}
                    style={{ backgroundImage: `url(${Images[currImg].img})` }}>
                    <div className={Classes.left} onClick={() => {

                        currImg > 0 && setCurrImg(currImg - 1);
                        if (currImg === 0) setCurrImg(Images.length - 1);

                    }}>

                        <ArrowBackIosOutlinedIcon />
                    </div>
                    <div className={Classes.center} >


                    </div>
                    <div className={Classes.right} onClick={() => {
                        if (currImg == Images.length - 1) {
                            setCurrImg(0);
                        }
                        else {
                            currImg < Images.length - 1 && setCurrImg(currImg + 1);
                        }
                    }}>

                        <ArrowForwardIosOutlinedIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel
