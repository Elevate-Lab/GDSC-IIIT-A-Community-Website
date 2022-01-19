import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styles from './TeamSpecialCard.module.css';
import { ReactComponent as ViewProject } from '../../Assets/svg_link.svg';
import { Link } from 'react-router-dom';
// import Stack from "@mui/material/Stack";
import person from '../../Assets/Images/person.png';
import { ReactComponent as Twitter } from '../../Assets/twitter-filled.svg';
import { ReactComponent as Github } from '../../Assets/github-filled.svg';
import { ReactComponent as Linkedin } from '../../Assets/linkedin-filled.svg';

function TeamSpecialCard() {
    const [admin, setAdmin] = useState(true);
    return (
        <div className={styles.cards_container}>
            <Box className={styles.card} sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.img}>
                                <Avatar src={person} sx={{ width: 140, height: 140 }} />
                            </div>
                            <div className={styles.name}>
                                <Typography
                                    sx={{ lineHeight:"110%", margin: '0' , marginBottom: '0.4vh',fontSize: 20 ,fontFamily:"Open Sans,sans-serif" ,fontWeight: '600'}}
                                    color="#1B2733"
                                    gutterBottom
                                >
                                    Tejas Mane
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 16, margin: '0', marginBottom: '1vh',fontFamily:"Open Sans,sans-serif"}}
                                    color="#637282"
                                    gutterBottom
                                >
                                    GDSC Lead IIITA
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, margin: '0', paddingTop: '10px' ,fontFamily:"Open Sans,sans-serif" }}
                                    color="#637282"
                                    gutterTop
                                >
                                    About....... Lorem Ipsum
                                </Typography>
                            </div>
                            <div className={styles.social_icons}>
                                <a href="www.twitter.com">
                                    <Twitter width="25px" />
                                </a>
                                <a href="www.github.com">
                                    <Github width="25px" />
                                </a>
                                <a href="www.linkedin.com">
                                    <Linkedin width="25px" />
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>
            <Box className={styles.card} sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.img}>
                                <Avatar src={person} sx={{ width: 140, height: 140 }} />
                            </div>
                            <div className={styles.name}>
                                <Typography
                                    sx={{ lineHeight:"110%", margin: '0' , marginBottom: '0.4vh',fontSize: 20 ,fontFamily:"Open Sans,sans-serif" ,fontWeight: '600'}}
                                    color="#1B2733"
                                    gutterBottom
                                >
                                    Dr. Mohammed Javed
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 16, margin: '0', marginBottom: '1vh',fontFamily:"Open Sans,sans-serif"}}
                                    color="#637282"
                                    gutterBottom
                                >
                                    Faculty Advisor
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 12, margin: '0', paddingTop: '10px' ,fontFamily:"Open Sans,sans-serif" }}
                                    color="#637282"
                                    gutterTop
                                >
                                    About....... Lorem Ipsum
                                </Typography>
                            </div>
                            <div className={styles.social_icons}>
                                <a href="www.twitter.com">
                                    <Twitter width="25px" />
                                </a>
                                <a href="www.github.com">
                                    <Github width="25px" />
                                </a>
                                <a href="www.linkedin.com">
                                    <Linkedin width="25px" />
                                </a>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}

export default TeamSpecialCard;
