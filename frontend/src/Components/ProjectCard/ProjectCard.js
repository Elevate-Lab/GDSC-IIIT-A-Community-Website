import * as React from 'react';
import { useState, useContext } from 'react';
import apiContext from '../../ContextApi/ApiContext';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styles from './ProjectCard.module.css';
import { ReactComponent as ViewProject } from '../../Assets/svg_link.svg';
import { ReactComponent as Github } from '../../Assets/Vector.svg';
import { Link, useHistory } from 'react-router-dom';
// import Stack from "@mui/material/Stack";
import image1 from '../../Assets/Images/img1.png';

function ProjectCard(props) {
    const context = useContext(apiContext);
    const { removeData, previousCardData, removeProject, getAttribute } = context;
    const { project } = props;
    const [admin, setAdmin] = useState(false);
    const handleClick = () => {
        getAttribute(project);
        removeProject(project._id);
    };
    function shorten(str, separator = ' ') {
        if (str) {
            if (str.length <= 200) return str;
            return `${str.substr(0, str.lastIndexOf(separator, 200))}...`;
        }
    }
    return (
        <Box className={styles.card} sx={{ minWidth: 275 }}>
            <Card variant="outlined" style={{ borderRadius: 20, overflow: 'hidden' }}>
                <CardContent>
                    <div className={styles.container}>
                        <div className={styles.img}>
                            <Avatar src={project.image} sx={{ width: 76, height: 76 }} />
                        </div>
                        <div className={styles.name}>
                            <Typography
                                sx={{
                                    fontSize: 24,
                                    fontWeight: '600',
                                    margin: '0',
                                    fontFamily: 'Open Sans,Poppins,sans-serif',
                                }}
                                color="#1b2733"
                                gutterBottom
                            >
                                {project.projectname}
                            </Typography>
                            {/* <Typography
                                sx={{
                                    fontSize: 15,
                                    fontWeight: '500',
                                    margin: '0',
                                    fontFamily: 'Open Sans,Poppins,sans-serif',
                                }}
                                color="#637282"
                                gutterBottom
                            >
                                Jobs for all
                            </Typography> */}
                        </div>
                    </div>

                    <div className={styles.text}>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: 14,
                                width: '100%',
                                margin: 0,
                                fontFamily: 'Open Sans,Poppins,sans-serif',
                            }}
                            color="#435156"
                        >
                            {shorten(project.description)}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions className={styles.buttons} style={{ padding: '20px 20px' }}>
                    <Button
                        className={styles.btn}
                        size="small"
                        variant="outlined"
                        style={{
                            color: '#0F9D58',
                            border: '2px solid #0F9D58',
                            fontFamily: 'Open Sans,Poppins,sans-serif',
                            padding: '12px 0',
                            fontWeight: '600',
                        }}
                        href={project.githubLink}
                        target="_blank"
                    >
                        <Github className={styles.svg} />
                        Github
                    </Button>

                    <Button
                        className={styles.btn}
                        size="small"
                        variant="contained"
                        disableElevation
                        style={{
                            backgroundColor: '#0F9D58',
                            fontFamily: 'Open Sans,Poppins,sans-serif',
                            padding: '12px 0',
                            fontWeight: '600',
                            
                        }}
                        href={project.projectLink}
                        target="_blank"
                        
                    >
                        <ViewProject className={styles.svg} />
                        Try it out!
                    </Button>
                </CardActions>
                {admin && (
                    <CardActions className={styles.buttonsAdmin} style={{ padding: '5px 20px' }}>
                        <Button
                            onClick={handleClick}
                            className={styles.btn}
                            size="small"
                            variant="contained"
                            disableElevation
                            style={{
                                backgroundColor: '#EA4235',
                                fontFamily: 'Open Sans,Poppins,sans-serif',
                                padding: '12px 0',
                                fontSize: 12,
                                fontWeight: '600',
                            }}
                        >
                            Delete
                        </Button>

                        <Link
                            to="/projects/edit_project"
                            onClick={() => previousCardData(project)}
                            style={{ textDecoration: 'none' }}
                        >
                            <Button
                                className={styles.btn}
                                size="small"
                                variant="outlined"
                                disableElevation
                                style={{
                                    color: '#0F9D58',
                                    border: '2px solid #0F9D58',
                                    fontFamily: 'Open Sans,Poppins,sans-serif',
                                    padding: '10px 0',
                                    fontSize: 12,
                                    fontWeight: '600',
                                }}
                            >
                                Edit
                            </Button>
                        </Link>
                    </CardActions>
                )}
            </Card>
        </Box>
    );
}

export default ProjectCard;