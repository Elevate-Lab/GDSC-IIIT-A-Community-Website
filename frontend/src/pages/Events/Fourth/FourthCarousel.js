
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
// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);





function FouthCarousel() {
    const { width } = useViewport();
    const useStyles = makeStyles(theme => ({
        mySwiper: {
            backgroundColor: 'skywhite',
            display: 'flex',
            // textAlign: 'center',
            // justifyContent: 'center',
            fontSize: '.000002rem',
            height: '35rem',
            display: 'flex',
            direction: 'left'
        },
        textUs: {
            width: width > 1000 ? "50%" : '100vw',
            textAlign: "center",
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center'
        },
        combined: {
            display: 'flex',
            flexDirection: width > 1000 ? 'row' : 'column'
        },
        designtext: {
            color: '#fff',
            width: '90%',
            marginTop: '1rem',
            marginBottom: '1rem'
        }

    }))
    const Classes = useStyles();
    return (
        <>
            <div className={Classes.combined}>
                <div className={Classes.textUs}>
                    <h2 
                        className={Classes.designtext}>What we Teach in Workshops</h2>
                    <h4
                        className={Classes.designtext}>Google collabrates with University Students through Student Clubs to grow Google Communities</h4>
                    <h4
                        className={Classes.designtext}>DSC Provides:</h4>
                    <h4 sx={{fontSize:'0.4rem'}}
                        className={Classes.designtext}>1. Oppurtunities to Enhance their technical knowledge.</h4>
                    <h4 sx={{fontSize:'0.4rem'}}
                        className={Classes.designtext}>2. Gain Industrial experience by solving Problems using Technology.</h4>
                    <h4 sx={{fontSize:'0.4rem'}}
                        className={Classes.designtext}>3. Display prototypes & Solutions for industries and Organizations.</h4>
                    <h4
                        className={Classes.designtext}>Google Developers supports and recognizes DSC's but does not own or manage them.</h4>
                </div>
                <div style={{ width: width > 1000 ? `50vw` : ( width> 500 ? '100vw' : '100vw' ) , marginRight: 0 }}>
                    <Swiper spaceBetween={30} centeredSlides={true} loop={true}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                        pagination={{
                            "clickable": true
                        }} navigation={true} className={Classes.mySwiper} >
                        <SwiperSlide style={{ backgroundImage: `url(${Images[0].img})`, height: "35rem", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >
                            Slide 1
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[1].img})`, height: "35rem", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>
                            Slide 2</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[2].img})`, height: "35rem", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 3</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[0].img})`, height: "35rem", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 4</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[1].img})`, height: "35rem", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >Slide 5</SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FouthCarousel


