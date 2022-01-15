
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
import 'swiper/components/navigation/navigation.min.css'

import 'swiper/components/pagination/pagination.min.css'

import { Images } from "../CarouselData.js";

import { makeStyles } from '@material-ui/core';

// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Navigation, Pagination, Keyboard, Mousewheel
} from 'swiper';
import useViewport from "../../../viewport/useViewport";
import { fontSize } from "@mui/system";
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);





function FouthCarousel() {
    const { width } = useViewport();
    const useStyles = makeStyles(theme => ({
        mySwiper: {
            backgroundColor: '#ffffff',
            display: 'flex',
            // textAlign: 'center',
            // justifyContent: 'center',
            fontSize: '.000002rem',
            height: '87vh',
            direction: 'left'
        },
        textUs: {
            width: width > 900 ? "50%" : '100%',
            textAlign: "center",
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#4e4e4e',
            justifyContent: 'center',
            alignItems: 'center'
        },
        combined: {
            display: 'flex',
            flexDirection: width > 900 ? 'row' : 'column'
        },
        designtext: {
            color: '#ffffff',
            fontFamily: 'Open-Sans',
            fontWeight: '400',
            width: '86%',
            marginTop: '2vh',
            marginBottom: '2vh',
            textAlign: 'left'
        }

    }))
    const Classes = useStyles();
    return (
        <>
            <div className={Classes.combined}>
                <div className={Classes.textUs}>
                    <h2 
                        className={Classes.designtext}
                        style={{fontSize:'6.8vh', fontWeight:'600', marginTop: '8vh', marginBottom: '5vh'}}
                    >What we Teach in Workshops</h2>
                    <h4
                        className={Classes.designtext}
                        style={{fontSize:'3.4vh', marginBottom: '1vh'}}
                    >Google collabrates with University Students through Student Clubs to grow Google Communities</h4>
                    <h4
                        className={Classes.designtext}
                        style={{fontSize:'3.4vh', marginTop: '1vh'}}
                    >DSC Provides:</h4>
                    <h4  style={{fontSize: '2.6vh', marginTop: '2vh'}}  sx={{fontSize:'0.4rem'}}
                        className={Classes.designtext}>1. Oppurtunities to Enhance their technical knowledge.</h4>
                    <h4 style={{fontSize: '2.6vh', marginTop: '0'}} sx={{fontSize:'4vh'}}
                        className={Classes.designtext}>2. Gain Industrial experience by solving Problems using Technology.</h4>
                    <h4 style={{fontSize: '2.6vh', marginTop: '0', marginBottom: '8vh'}} sx={{fontSize:'4vh'}}
                        className={Classes.designtext}>3. Display prototypes & Solutions for industries and Organizations.</h4>
                     
                </div>
                <div style={{ width: width > 900 ? `50%` : ( width> 500 ? '100%' : '100%' ) , marginRight: 0 }}>
                    <Swiper spaceBetween={30} centeredSlides={true} loop={true}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                        pagination={{
                            "clickable": true
                        }} navigation={true} className={Classes.mySwiper} >
                           
                        <SwiperSlide style={{ backgroundImage: `url(${Images[0].img})`, height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >
                            Slide 1
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[1].img})`, height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>
                            Slide 2</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[2].img})`, height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 3</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[0].img})`, height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 4</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[1].img})`, height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >Slide 5</SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FouthCarousel


