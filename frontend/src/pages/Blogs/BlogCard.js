
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./BlogCard.module.css";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { ReactComponent as Github } from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import image1 from "../../Assets/Images/img1.png";
import { flexbox } from "@mui/system";
import imag from "./thankyou.jpg"
import {Images} from "./BlogData.js"
import React, { useContext } from 'react'
import apiContext from '../../ContextApi/ApiContext'
function BlogCard(props) {
	const [admin, setAdmin] = useState(true);
	const context = useContext(apiContext)
    const {removeData,previousCardData,removeBlog} = context
    const {blogs} = props
	return (
		<>
		
		<div style={{width: '350px', height:'max-content', display: 'flex', flexDirection: 'column'}}>
			<div style={{zIndex: "0", background:"#FAFAFA", borderRadius:'20px 20px 0 0' }} >
				<img src={image1} style={{ width: '350px', height: '250px'}} alt="img" />
			</div>
			<div style={{ zIndex: "5",paddingBottom:'20px'}}>
				<Box className={styles.card} sx={{ background:"#FAFAFA", overflow:"hidden" }}>
					<Card variant="outlined" sx={{ paddingBottom:'10px'}}>
						<CardContent>
							<div style={{paddingTop: '20px',color:'#1B2733',fontWeight:'600',textAlign:'left', fontSize: 24, fontFamily:"OpenSans"}}>
								{blogs.title}
							</div>
							<div className={styles.text}>
								<Typography variant="body2" sx={{ margin: 0, marginTop: '10px', color:'#637282',fontWeight:'500', fontSize: 14, fontFamily:"OpenSans"}}>
									{blogs.description}
								</Typography>
							</div>

							<div className={styles.container} style={{ marginTop: '20px' }}>
								<div className={styles.img} style={{ marginBottom: '-0.5rem' }}>
									<Avatar src={image1} sx={{ width: 40, height: 40 }} />
								</div>
								<div className={styles.name}>
									<Typography
										sx={{ margin: "0", color:'#435156',fontWeight:'600',textAlign:'left', fontSize: 14, fontFamily:"OpenSans"}}
										color="#435156"
										gutterBottom
									>
										{blogs.author}
									</Typography>
									<Typography sx={{ fontSize: 11, margin: "0", textAlign:'left', fontFamily:"OpenSans" }} color="#435156" gutterBottom>
										{blogs.date}
									</Typography>
								</div>
							</div>
						</CardContent>



						<CardActions className={styles.buttons}>

							<Link to={blogs.bloglink} style={{ textDecoration: "none" }}>
								<Button
									className={styles.btnP}
									// width='100%'
									variant="contained"
									disableElevation
									style={{ backgroundColor: "#0F9D58", fontSize: 14, padding: "10px 60px", margin: "0", textAlign:'left', fontFamily:"OpenSans", fontWeight: "600"}}
								>
									<ViewProject className={styles.svg} style={{ height:"20px" , width:"20px" }}/>
									Read on Medium
								</Button>
							</Link>
						</CardActions>
						{admin && (
							<CardActions className={styles.buttonsAdmin}>
								
									<Button
									onClick={()=>removeBlog(blogs._id)}
										className={styles.btn}
										// size="small"
										variant="contained"
										disableElevation
										style={{backgroundColor: "#EA4235", padding: "7px 20px", fontFamily:"OpenSans", fontSize: 14, fontWeight: "600"  }}
									>
										Delete
									</Button>
							
								<Link to="../blogs/edit_blog" onClick={()=>previousCardData(blogs)} style={{ textDecoration: "none" }}>
									<Button
									
										className={styles.btn}
										// size="small"
										variant="outlined"
										disableElevation
										style={{color: "#0F9D58", border: "2px solid #0F9D58", padding: "5px 20px" ,fontFamily:"OpenSans", fontSize: 14, fontWeight: "600" }}
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