import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styles from './BlogCard.module.css';
import { ReactComponent as ViewProject } from '../../Assets/svg_link.svg';
import { ReactComponent as Github } from '../../Assets/Vector.svg';
import { Link } from 'react-router-dom';
// import Stack from "@mui/material/Stack";
import image1 from '../../Assets/Images/img1.png';
import { flexbox } from '@mui/system';
import imag from './thankyou.jpg';
import { Images } from './BlogData.js';
import React, { useContext } from 'react';
import apiContext from '../../ContextApi/ApiContext';
function BlogCard(props) {
    const [admin, setAdmin] = useState(true);
    const context = useContext(apiContext);
    const { removeData, previousCardData, removeBlog } = context;
    const { blogs } = props;
    return (
        <>
            <div>
                <div style={{ marginBottom: '-2.6rem', zIndex: '0' }}>
                    <img
                        src={blogs.image}
                        style={{ width: '25rem', height: '17rem', cursor: 'not-allowed' }}
                    />
                </div>
                <div style={{ zIndex: '1' }}>
                    <Box className={styles.card} sx={{ minWidth: 275 }}>
                        <Card variant="outlined">
                            <CardContent>
                                <div style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
                                    <br></br>
                                    {blogs.title}
                                </div>
                                <br></br>
                                <div className={styles.text}>
                                    <Typography variant="body2" sx={{ margin: 0 }}>
                                        {blogs.description}
                                    </Typography>
                                </div>

                                <div className={styles.container} style={{ marginTop: '2rem' }}>
                                    <div className={styles.img} style={{ marginBottom: '-0.5rem' }}>
                                        <Avatar src={image1} sx={{ width: 28, height: 28 }} />
                                    </div>
                                    <div className={styles.name}>
                                        <Typography
                                            sx={{ fontSize: 14, margin: '0' }}
                                            color="text.primary"
                                            gutterBottom
                                        >
                                            {blogs.author}
                                        </Typography>
                                        <Typography
                                            sx={{ fontSize: 10, margin: '0' }}
                                            color="text.secondary"
                                            gutterBottom
                                        >
                                            {blogs.date}
                                        </Typography>
                                    </div>
                                </div>
                            </CardContent>

                            <CardActions className={styles.buttons}>
                                <Button
                                    className={styles.btnP}
                                    width="20rem"
                                    variant="contained"
                                    disableElevation
                                    style={{ backgroundColor: '#08ad5d' }}
                                    href={blogs.bloglink}
                                >
                                    <ViewProject className={styles.svg} />
                                    Read on Medium
                                </Button>
                            </CardActions>
                            {admin && (
                                <CardActions className={styles.buttonsAdmin}>
                                    <Button
                                        onClick={() => removeBlog(blogs._id)}
                                        className={styles.btn}
                                        size="small"
                                        variant="contained"
                                        disableElevation
                                        style={{ backgroundColor: '#EA4335' }}
                                    >
                                        Delete
                                    </Button>

                                    <Link
                                        to="/Blogs/EditBlog"
                                        onClick={() => previousCardData(blogs)}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <Button
                                            className={styles.btn}
                                            size="small"
                                            variant="outlined"
                                            disableElevation
                                            style={{ color: '#08ad5d', borderColor: '#08ad5d' }}
                                        >
                                            Edit
                                        </Button>
                                    </Link>
                                </CardActions>
                            )}
                        </Card>
                    </Box>
                </div>
            </div>
        </>
    );
}

export default BlogCard;
