import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import img1 from '../../Assets/Images/img1.png'
import DSBtn from '../DSBtn'
import useViewport from '../../viewport/useViewport'


function DSBlogCard({title, date, body}) {
    const { width } = useViewport()
    
    return (
        <div style={{
            margin: '1rem'
        }}>
            <Paper style={{
                padding: '1.5rem',
                borderRadius: 30,
                width: width > 1440 ? '25vw' : (width > 1000 ? '25vw' : '20rem')
            }}>
                <img style={{
                    width: width > 1440 ? '25vw' : (width > 1000 ? '25vw' : '20rem')
                }} src={img1} alt="img1" />
                <Typography style={{
                    fontFamily: 'poppins',
                    fontWeight: 500,
                    fontSize: width > 1000 ? '1.5rem' : '1rem',
                    marginTop: '1rem'
                }}>{title}</Typography>

                <Typography style={{
                    fontFamily: 'poppins',
                    fontWeight: 300,
                    fontSize:  width > 1000 ? '1rem' : '0.8rem',
                    marginTop: '1rem'
                }}>{date}</Typography>
                <Typography style={{
                    fontFamily: 'poppins',
                    fontSize:  width > 1000 ? '1rem' : '0.8rem',
                    marginTop: '1rem'
                }}> {body}
                </Typography>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: 30
                }}>
                    <Typography style={{
                        fontFamily: 'poppins',
                        fontSize: '1rem',
                        fontWeight: 600,
                    }}>
                        Read Full Blog
                    </Typography>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <DSBtn
                            label="Edit"
                            backgroundColor="#f5edff"
                            height='2rem'
                            borderRadius={5}
                            color="#AF48FF"
                            style={{
                                fontSize: '1rem'
                            }}
                            divStyle={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem'
                            }}
                        />
                        <DSBtn
                            label="Delete"
                            backgroundColor="#f5edff"
                            height='2rem'
                            borderRadius={5}
                            color="#AF48FF"
                            style={{
                                fontSize: '1rem'
                            }}
                            divStyle={{
                                marginLeft: '0.5rem',
                                marginRight: '0.5rem'
                            }}
                        />
                    </div>
                </div>
            </Paper>
        </div>
    )
}

export default DSBlogCard
