
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
            height: '90vh',
            direction: 'left'
        },
        textUs: {
            width: width > 900 ? "50%" : '100%',
            textAlign: "center",
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            // background: '#fff',  /* fallback for old browsers */
            // background: '-webkit-linear-gradient(to right, #FFF8E1, #fff)',  /* Chrome 10-25, Safari 5.1-6 */
            background: 'linear-gradient(to left, #fff, #FFD54F)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        },
        //#FFF8E1
        //#fff
        combined: {
            display: 'flex',
            flexDirection: width > 900 ? 'row' : 'column'
        },
        designtext: {
            color: '#3F3F3E',
            fontFamily: 'Poppins,sans serif',
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
                        style={{fontSize:width>500?'6.0vh':'4.0vh', fontWeight:'600', marginTop: '8vh', marginBottom: '5vh'}}
                    >What we Teach in Workshops</h2>
                    <h4
                        className={Classes.designtext}
                        style={{fontSize:width>500?'3.0vh':'2.4vh', marginBottom: '1vh'}}
                    >Google collabrates with University Students through Student Clubs to grow Google Communities</h4>
                    <h4
                        className={Classes.designtext}
                        style={{fontSize:width>500?'3.0vh':'2.4vh',marginTop: '1vh'}}
                    >GDSC Provides:</h4>
                    <h4  style={{fontSize:width>500?'2.6vh':'2.0vh',marginTop: '2vh'}}  sx={{fontSize:'0.4rem'}}
                        className={Classes.designtext}>1. Oppurtunities to Enhance their technical knowledge.</h4>
                    <h4 style={{fontSize:width>500?'2.6vh':'2.0vh',marginTop: '0'}} sx={{fontSize:'4vh'}}
                        className={Classes.designtext}>2. Gain Industrial experience by solving Problems using Technology.</h4>
                    <h4 style={{fontSize:width>500?'2.6vh':'2.0vh',marginTop: '0', marginBottom: '8vh'}} sx={{fontSize:'4vh'}}
                        className={Classes.designtext}>3. Display prototypes & Solutions for industries and Organizations.</h4>
                     
                </div>
                <div style={{ width: width > 900 ? `50%` : ( width> 500 ? '100%' : '100%' ), marginRight: 0 }}>
                    <Swiper spaceBetween={30} centeredSlides={true} loop={true}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                        // pagination={{
                        //     "clickable": true,
                        //     "display": false
                        // }} 
                        navigation={false} className={Classes.mySwiper} >
                           
                        <SwiperSlide style={{ backgroundImage: `url(${Images[0].img})`,height:width>800?'100%':(width>500?'80%':'65%'), width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >
                            Slide 1
                        </SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[1].img})`,height:width>800?'100%':(width>500?'80%':'65%'), backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>
                            Slide 2</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[2].img})`,height:width>800?'100%':(width>500?'80%':'65%'), backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 3</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[3].img})`,height:width>800?'100%':(width>500?'80%':'65%'), backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }}>Slide 4</SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: `url(${Images[4].img})`,height:width>800?'100%':(width>500?'80%':'65%'), backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", justifyContent: 'center', marginRight: 0 }} >Slide 5</SwiperSlide>

                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FouthCarousel


