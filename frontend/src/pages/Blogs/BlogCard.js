import * as React from "react";
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

function BlogCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<>
		
		<div>
			<div style={{ marginBottom: '-2.6rem', zIndex: "0" }} >
				<img src={imag} style={{ width: '25rem', height: '17rem',cursor:'not-allowed' }} />
			</div>
			<div style={{ zIndex: "1" }}>
				<Box className={styles.card} sx={{ minWidth: 275 }}>
					<Card variant="outlined">
						<CardContent>
							<div style={{color:'black',fontWeight:'bold',textAlign:'center'}}>
								<br></br>
								Inclusivo Builds Job for Job Seekers
								
							</div>
							<br></br>
							<div className={styles.text}>
								<Typography variant="body2" sx={{ margin: 0 }}>
									"Inclusivo is an online platform that makes it easier for people from underprivileged communities
									to find and get relevant jobs in their respective fields"
								</Typography>
							</div>

							<div className={styles.container} style={{ marginTop: '2rem' }}>
								<div className={styles.img} style={{ marginBottom: '-0.5rem' }}>
									<Avatar src={image1} sx={{ width: 28, height: 28 }} />
								</div>
								<div className={styles.name}>
									<Typography
										sx={{ fontSize: 14, margin: "0" }}
										color="text.primary"
										gutterBottom
									>
										Elemento
									</Typography>
									<Typography sx={{ fontSize: 10, margin: "0" }} color="text.secondary" gutterBottom>
										jan 28 . 8 min read
									</Typography>
								</div>
							</div>
						</CardContent>



						<CardActions className={styles.buttons}>

							<Link to="" style={{ textDecoration: "none" }}>
								<Button
									className={styles.btnP}
									width='20rem'

									variant="contained"
									disableElevation
									style={{ backgroundColor: "#08ad5d" }}
								>
									<ViewProject className={styles.svg} />
									Read on Medium
								</Button>
							</Link>
						</CardActions>
						{admin && (
							<CardActions className={styles.buttonsAdmin}>
								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btn}
										size="small"
										variant="contained"
										disableElevation
										style={{ backgroundColor: "#EA4335" }}
									>
										Delete
									</Button>
								</Link>
								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btn}
										size="small"
										variant="outlined"
										disableElevation
										style={{ color: "#08ad5d", borderColor: "#08ad5d" }}
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