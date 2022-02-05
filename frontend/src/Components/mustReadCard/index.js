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
				<img
					className={styles.img}
					src="https://miro.medium.com/max/854/1*UQ5WPmF6qtG2DfA9xnlQww.png"
					alt="img"
				/>
			</div>
			<div className={styles.content}>
				<CardContent>
					<div className={styles.container}>
						<div className={styles.name}>
							<h3
								style={{
									fontSize: 24,
									fontFamily: "Open Sans,sans-serif",
									fontWeight: "600",
									color: "#1B2733",
								}}
							>
								Coroutines in Kotlin
							</h3>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className={styles.text}>
						<Typography
							variant="body2"
							sx={{ fontSize: 14, fontFamily: "Open Sans,sans-serif", fontWeight: "500", color: "#637282" }}
						>
							In this article, we will be discussing the use of Coroutines in Kotlin by responding to the
							three must-answer questions: What? Why? How? How coroutines is a better alternative for managing
							asynchronous tasks?
						</Typography>
					</div>
				</CardContent>
				<div className={` ${styles.row2}`}>
					<div className={`${styles.writer} ${styles.row}`}>
						<div className={styles.img}>
							{/* <Avatar sx={{ width: 56, height: 56 }} /> */}
							<img
								src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v2.png"
								style={{ width: "50px", height: "50px" }}
							/>
						</div>
						<div>
							<p
								style={{
									fontSize: 14,
									fontFamily: "Open Sans,sans-serif",
									fontWeight: "500",
									color: "#435156",
								}}
							>
								Tanushree
							</p>
							<p
								style={{
									fontSize: 14,
									fontFamily: "Open Sans,sans-serif",
									fontWeight: "500",
									color: "#435156",
								}}
							>
								OCT 21, 2021
							</p>
						</div>
					</div>
					<div
						className={`${styles.buttons}`}
						style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
					>
						<Button
							className={`${styles.btn} ${styles.mediumBtn}`}
							// size="small"
							variant="contained"
							disableElevation
							style={{ backgroundColor: "#0F9D58", fontFamily: "Open Sans,sans-serif", fontWeight: "600" }}
							target="_blank"
							href="https://medium.com/developer-student-clubs-iiit-allahabad/coroutines-in-kotlin-44d6578ff08d"
						>
							<ViewProject
								className={styles.svg}
								style={{ paddingRight: "3px", marginRight: "7px", height: "24px", width: "24px" }}
							/>{" "}
							Read on Medium
						</Button>
					</div>
				</div>
			</div>
		</div>
		// </Box>
	);
}

export default MustReadCard;
