import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { Bluetooth, BlurLinear, Height } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { blue, red, yellow, green } from "@material-ui/core/colors";
import { findByLabelText } from "@testing-library/react";
import { Component } from "react";
import Slider from "react-slick";
import Carousel from "./Carousel";



const useStyles = makeStyles(theme => ({

    eventHeading: {
        textAlign: "center",
        textDecoration: "Bold"
    },

head:{
    backgroundColor:"blue",
},
    
    designConatiner: {
        display: "flex",
        flexDirection: "row",
    },
    designingConatiner: {
        display: "flex",
        flexDirection: "row",
    }
}))



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
        <div>
            <div className={Classes.head} style={{
                    width: "100%",
                    height: "20px",
                    backgroundColor: `black`
                }}>

            </div>
            <h1 className={Classes.eventHeading}>Event</h1>


            <div className={Classes.designConatiner}>
                <div style={{
                    width: `calc(100vw/3)`,
                    height: `0.4rem`,
                    backgroundColor: `red`
                }} />
                <div style={{
                    width: `calc(100vw/3)`,
                    height: `0.4rem`,
                    backgroundColor: `blue`
                }} />
                <div style={{
                    width: `calc(100vw/3)`,
                    height: `0.4rem`,
                    backgroundColor: `yellow`
                }} />
            </div>


<Carousel />
            {/* <div className={Classes.designingConatiner} sx={{height:'30rem'}}>
                <Slider {...settings}>
                    
                        <div className={Classes.designingConatiner}>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                                backgroundColor: `black`
                            }}>
                            <h1>Hello.1</h1>
                            </div>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                            }}>
                                <img src="../public/logo512.png" alt="hell" />
                            </div>
                        </div>
                    
                
                        <div className={Classes.designingConatiner}>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                                backgroundColor: `red`
                            }}>
                                    <h1>Hello.2</h1>
                            </div>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                            }}>
                                <img src="../public/logo512.png" alt="hell" />
                            </div>
                        </div>
                    
                
                        <div className={Classes.designingConatiner}>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                                backgroundColor: `yellow`
                            }}>
                                <h1>Hello.3</h1>
                            </div>
                            <div style={{
                                width: `calc(100vw/2)`,
                            
                            }}>
                                <img src="../public/logo512.png" alt="hell" />
                            </div>
                        </div>
                    
                
                      
                    
                </Slider>

            </div> */}
        </div>
    )
}

export default Content;
