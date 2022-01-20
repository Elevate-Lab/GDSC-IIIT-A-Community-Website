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
							<h3>Dive into StreamBuilder in Flutter</h3>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className={styles.text}>
						<Typography variant="body2">
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
							<p>Kunal Kaushik</p>
							<p>date . time</p>
						</div>
					</div>
					<div className="buttons">
						<Link to="" style={{ textDecoration: "none" }}>
							<Button
								className={`${styles.btn} ${styles.mediumBtn}`}
								size="small"
								variant="contained"
								disableElevation
								style={{ backgroundColor: "#08ad5d", width: "200px" }}
							>
								<ViewProject className={styles.svg} style={{ paddingRight: "3px", marginRight: "7px" }} />{" "}
								Read on Medium
							</Button>
						</Link>
						{admin && (
							<CardActions className={styles.buttonsAdmin}>
								<Link to="" style={{ textDecoration: "none" }}>
									<Button
										className={styles.btn}
										size="small"
										variant="contained"
										disableElevation
										style={{ backgroundColor: "#EA4335", width: "90px" }}
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
										style={{ color: "#08ad5d", borderColor: "#08ad5d", width: "90px" }}
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
