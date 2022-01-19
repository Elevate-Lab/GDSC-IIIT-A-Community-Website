import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import styles from './mustRead.module.css';
import Headings from '../Page_headings';
import image1 from '../../Assets/Images/img1.png';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { ReactComponent as ViewProject } from '../../Assets/svg_link.svg';
import { ReactComponent as RSVPsvg } from '../../Assets/svg_link.svg';
import { ReactComponent as Calendar } from '../../Assets/calendar.svg';
import { ReactComponent as Clock } from '../../Assets/clock.svg';
// import Stack from "@mui/material/Stack";

function MustReadCard(props) {
    const [admin, setAdmin] = useState(true);
    return (
        <>
            {/* <div variant="outlined" styles={{ padding: '0' }} className={`${styles.mustReadCard}`}>
                <div className={styles.imgContainer}>
                    <img className={styles.img} src={image1} alt="img" />
                </div>
                <div className={styles.content}>
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.name}>
                                <h3>Dive into StreamBuilder in Flutter</h3>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography variant="body2">
                                In this article, we will be Diving into StreamBuilder In Flutter. We will
                                implement a demo program through which you will get to know how to use
                                StreamBuilder in your flutter applications.
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={` ${styles.row2}`}>
                        <div className={`${styles.writer} ${styles.row}`}>
                            <div className={styles.img}>
                                <Avatar
                                    sx={{ width: 56, height: 56 }}
                                    src="https://miro.medium.com/fit/c/176/176/0*T0oDFuup7Moyup7Z"
                                />
                            </div>
                            <div>
                                <p>Kunal Kaushik</p>
                                <p>Jan 14 · 5 min read</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button
                                className={`${styles.btn} ${styles.mediumBtn}`}
                                size="small"
                                variant="contained"
                                disableElevation
                                style={{ backgroundColor: '#08ad5d', width: '200px' }}
                                href="https://medium.com/developer-student-clubs-iiit-allahabad/dive-into-state-management-in-flutter-fb7952effc18"
                            >
                                <ViewProject
                                    className={styles.svg}
                                    style={{ paddingRight: '3px', marginRight: '7px' }}
                                />
                                Read on Medium
                            </Button>

                            {admin && (
                                <CardActions className={styles.buttonsAdmin}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="contained"
                                            disableElevation
                                            style={{ backgroundColor: '#EA4335', width: '90px' }}
                                        >
                                            Delete
                                        </Button>
                                    </Link>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="outlined"
                                            disableElevation
                                            style={{
                                                color: '#08ad5d',
                                                borderColor: '#08ad5d',
                                                width: '90px',
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardActions>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div variant="outlined" styles={{ padding: '0' }} className={`${styles.mustReadCard}`}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.img}
                        src="https://miro.medium.com/max/1400/0*nL5xUEM0mynOKyGk.jpg"
                        alt="img"
                    />
                </div>
                <div className={styles.content}>
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.name}>
                                <h3>NFTs : much Hyped, How do NFTs work?</h3>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography variant="body2">
                                You've probably heard about the latest new digital craze: non-fungible tokens
                                or NFTs. These unique digital codes rely on the same blockchain technology as
                                cryptocurrencies like Ethereum, but with a big difference: NFTs are completely
                                unique and establish ownership of digital assets. Without a doubt, they've
                                become the hottest thing in crypto.
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={` ${styles.row2}`}>
                        <div className={`${styles.writer} ${styles.row}`}>
                            <div className={styles.img}>
                                <Avatar
                                    sx={{ width: 56, height: 56 }}
                                    src="https://miro.medium.com/fit/c/72/72/0*y77v-OuLXjypDX7u.jpg"
                                />
                            </div>
                            <div>
                                <p>Supriya Patidar</p>
                                <p>Dec 30, 2021 · 5 min read</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button
                                className={`${styles.btn} ${styles.mediumBtn}`}
                                size="small"
                                variant="contained"
                                disableElevation
                                style={{ backgroundColor: '#08ad5d', width: '200px' }}
                                href="https://medium.com/developer-student-clubs-iiit-allahabad/nfts-much-hyped-how-do-nfts-work-286d041c37bc"
                            >
                                <ViewProject
                                    className={styles.svg}
                                    style={{ paddingRight: '3px', marginRight: '7px' }}
                                />
                                Read on Medium
                            </Button>

                            {admin && (
                                <CardActions className={styles.buttonsAdmin}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="contained"
                                            disableElevation
                                            style={{ backgroundColor: '#EA4335', width: '90px' }}
                                        >
                                            Delete
                                        </Button>
                                    </Link>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="outlined"
                                            disableElevation
                                            style={{
                                                color: '#08ad5d',
                                                borderColor: '#08ad5d',
                                                width: '90px',
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardActions>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div variant="outlined" styles={{ padding: '0' }} className={`${styles.mustReadCard}`}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.img}
                        src="https://miro.medium.com/max/1400/1*fOvfuKvYO43HhT63yt21JQ.png"
                        alt="img"
                    />
                </div>
                <div className={styles.content}>
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.name}>
                                <h3>Understanding Android Architecture Patterns</h3>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography variant="body2">
                                In this article, we will be discussing the different architectural patterns in
                                android such as MVC, MVP, and MVVM.
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={` ${styles.row2}`}>
                        <div className={`${styles.writer} ${styles.row}`}>
                            <div className={styles.img}>
                                <Avatar
                                    sx={{ width: 56, height: 56 }}
                                    src="https://miro.medium.com/fit/c/132/132/1*W0bxLXgpvrOWvd1vRzz6Pg.jpeg"
                                />
                            </div>
                            <div>
                                <p>Saloni Doshi</p>
                                <p>Nov 9, 2021 · 4 min read</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button
                                className={`${styles.btn} ${styles.mediumBtn}`}
                                size="small"
                                variant="contained"
                                disableElevation
                                style={{ backgroundColor: '#08ad5d', width: '200px' }}
                                href="https://medium.com/developer-student-clubs-iiit-allahabad/understanding-android-architecture-patterns-c001a6211aec"
                            >
                                <ViewProject
                                    className={styles.svg}
                                    style={{ paddingRight: '3px', marginRight: '7px' }}
                                />
                                Read on Medium
                            </Button>

                            {admin && (
                                <CardActions className={styles.buttonsAdmin}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="contained"
                                            disableElevation
                                            style={{ backgroundColor: '#EA4335', width: '90px' }}
                                        >
                                            Delete
                                        </Button>
                                    </Link>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="outlined"
                                            disableElevation
                                            style={{
                                                color: '#08ad5d',
                                                borderColor: '#08ad5d',
                                                width: '90px',
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardActions>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div variant="outlined" styles={{ padding: '0' }} className={`${styles.mustReadCard}`}>
                <div className={styles.imgContainer}>
                    <img
                        className={styles.img}
                        src="https://miro.medium.com/max/1400/1*PijCAIFhgsU3Iyse9lHRkw.png"
                        alt="img"
                    />
                </div>
                <div className={styles.content}>
                    <CardContent>
                        <div className={styles.container}>
                            <div className={styles.name}>
                                <h3>Coroutines in Kotlin</h3>
                            </div>
                        </div>

                        <div className={styles.text}>
                            <Typography variant="body2">
                                In this article, we will be discussing the use of Coroutines in Kotlin by
                                responding to the three must-answer questions: What? Why? How?
                            </Typography>
                        </div>
                    </CardContent>
                    <div className={` ${styles.row2}`}>
                        <div className={`${styles.writer} ${styles.row}`}>
                            <div className={styles.img}>
                                <Avatar
                                    sx={{ width: 56, height: 56 }}
                                    src="https://miro.medium.com/fit/c/72/72/0*cSTGP6VlkQzY3lKZ"
                                />
                            </div>
                            <div>
                                <p>Tanushree</p>
                                <p>Oct 21, 2021 · 4 min read</p>
                            </div>
                        </div>
                        <div className="buttons">
                            <Button
                                className={`${styles.btn} ${styles.mediumBtn}`}
                                size="small"
                                variant="contained"
                                disableElevation
                                style={{ backgroundColor: '#08ad5d', width: '200px' }}
                                href="https://medium.com/developer-student-clubs-iiit-allahabad/coroutines-in-kotlin-44d6578ff08d"
                            >
                                <ViewProject
                                    className={styles.svg}
                                    style={{ paddingRight: '3px', marginRight: '7px' }}
                                />
                                Read on Medium
                            </Button>

                            {admin && (
                                <CardActions className={styles.buttonsAdmin}>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="contained"
                                            disableElevation
                                            style={{ backgroundColor: '#EA4335', width: '90px' }}
                                        >
                                            Delete
                                        </Button>
                                    </Link>
                                    <Link to="" style={{ textDecoration: 'none' }}>
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="outlined"
                                            disableElevation
                                            style={{
                                                color: '#08ad5d',
                                                borderColor: '#08ad5d',
                                                width: '90px',
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardActions>
                            )}
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default MustReadCard;
