import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import styles from "./mustRead.module.css";
import Headings from "../Page_headings";
import image1 from "../../Assets/Images/img1.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { ReactComponent as RSVPsvg } from "../../Assets/svg_link.svg";
import { ReactComponent as Calendar } from "../../Assets/calendar.svg";
import { ReactComponent as Clock } from "../../Assets/clock.svg";
// import Stack from "@mui/material/Stack";

function MustReadCard(props) {
	const [admin, setAdmin] = useState(true);
	return (
		<div variant="outlined" styles={{ padding: "0" }} className={`${styles.mustReadCard}`}>
			<div className={styles.imgContainer}>
				<img className={styles.img} src={image1} alt="img" />
			</div>
			<div className={styles.content}>
				<CardContent>
					<div className={styles.container}>
						<div className={styles.name}>
							<h3 style={{fontSize: 24, fontFamily:"Open Sans,sans-serif", fontWeight: "600", color: "#1B2733"}}>Dive into StreamBuilder in Flutter</h3>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className={styles.text}>
						<Typography variant="body2" sx={{fontSize: 14, fontFamily:"Open Sans,sans-serif", fontWeight: "500", color: "#637282"}}>
							In this article, we will be Diving into StreamBuilder In Flutter. We will implement a demo
							program through which you will get to know how to use StreamBuilder in your flutter
							applications.
						</Typography>
					</div>
				</CardContent>
				<div className={` ${styles.row2}`}>
					<div className={`${styles.writer} ${styles.row}`}>
						<div className={styles.img}>
							<Avatar sx={{ width: 56, height: 56 }} />
						</div>
						<div>
							<p style={{fontSize: 14, fontFamily:"Open Sans,sans-serif", fontWeight: "500", color: "#435156"}}>Kunal Kaushik</p>
							<p style={{fontSize: 14, fontFamily:"Open Sans,sans-serif", fontWeight: "500", color: "#435156"}}>date . time</p>
						</div>
					</div>
					<div className="buttons" style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
						<Link to="" style={{ textDecoration: "none" }}>
							<Button
								className={`${styles.btn} ${styles.mediumBtn}`}
								// size="small"
								variant="contained"
								disableElevation
								style={{ backgroundColor: "#0F9D58", width: "300px", padding: "10px 20px",fontSize: 13, fontFamily:"Open Sans,sans-serif", fontWeight: "600",}}
							>
								<ViewProject className={styles.svg} style={{ paddingRight: "3px", marginRight: "7px", height:'24px', width:'24px' }} />{" "}
								Read on Medium
							</Button>
						</Link>
						{admin && (
							<CardActions className={styles.buttonsAdmin}>
								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btn}
										// size="small"
										variant="contained"
										disableElevation
										style={{ backgroundColor: "#EA4335", width: "145px", padding: "10px 16px", fontSize: 13, fontFamily:"Open Sans,sans-serif", fontWeight: "600"}}
									>
										Delete
									</Button>
								</Link>
								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btn}
										// size="small"
										variant="outlined"
										disableElevation
										style={{ color: "#0F9D58", border: "2px solid #0F9D58", padding: "8px 16px", width: "145px", fontSize: 13, fontFamily:"Open Sans,sans-serif", fontWeight: "600" }}
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
		// </Box>
	);
}

export default MustReadCard;
