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
import imag from "./thankyou.jpg";
import { Images } from "./BlogData.js";
import React, { useContext } from "react";
import apiContext from "../../ContextApi/ApiContext";
function BlogCard(props) {
	const [admin, setAdmin] = useState(false);
	const context = useContext(apiContext);
	const { removeData, previousCardData, removeBlog, getAttribute } = context;
	const { blogs } = props;
	const handleClick = () => {
		getAttribute(blogs);
		removeBlog(blogs._id);
	};
	function shorten(str, separator = " ") {
		if (str) {
			if (str.length <= 200) return str;
			return `${str.substr(0, str.lastIndexOf(separator, 200))}...`;
		}
	}
	return (
		<>
			<div
				className={styles.mainCard}
				style={{
					width: "320px",
					height: "max-content",
					display: "flex",
					flexDirection: "column",
					marginTop: "50px",
					maxWidth: "80vw",
				}}
			>
				<div style={{ zIndex: "0", borderRadius: "20px 20px 0 0" }}>
					<img src={blogs.image} style={{ width: "100%", height: "220px", objectFit: "cover" }} alt="img" />
				</div>
				<div style={{ zIndex: "5", marginTop: "-20px" }}>
					<Box className={styles.card} sx={{ overflow: "hidden", width: "100%" }}>
						<Card variant="outlined" sx={{ paddingBottom: "10px", width: "100%" }}>
							<CardContent style={{ padding: "5px 20px 15px 20px", width: "100%" }}>
								<div
									style={{
										paddingTop: "20px",
										color: "#1B2733",
										fontWeight: "600",
										textAlign: "left",
										fontSize: 18,
										fontFamily: "Open Sans,sans-serif",
										width: "100%",
									}}
								>
									{blogs.title}
								</div>
								<div className={styles.text}>
									<Typography
										variant="body2"
										sx={{
											margin: 0,
											marginTop: "10px",
											color: "#637282",
											fontWeight: "500",
											fontSize: 14,
											fontFamily: "Open Sans,sans-serif",
										}}
									>
										{shorten(blogs.description)}
									</Typography>
								</div>

								<div className={styles.container} style={{ marginTop: "20px" }}>
									<div className={styles.img} style={{ marginBottom: "-0.5rem" }}>
										{/* <Avatar src={image1} sx={{ width: 40, height: 40 }} /> */}
										{/* <i class="fa fa-user-o fa-lg" aria-hidden="true" ></i> */}
										<img
											src="https://img.icons8.com/pastel-glyph/64/000000/person-male--v2.png"
											style={{ width: "30px", height: "30px" }}
										/>
									</div>
									<div className={styles.name}>
										<Typography
											sx={{
												margin: "0",
												color: "#435156",
												fontWeight: "600",
												textAlign: "left",
												fontSize: 14,
												fontFamily: "Open Sans,sans-serif",
											}}
											color="#435156"
											gutterBottom
										>
											{blogs.author}
										</Typography>
										<Typography
											sx={{
												fontSize: 11,
												margin: "0",
												textAlign: "left",
												fontFamily: "Open Sans,sans-serif",
											}}
											color="#435156"
											gutterBottom
										>
											{blogs.date}
										</Typography>
									</div>
								</div>
							</CardContent>

							<CardActions className={styles.buttons} style={{ padding: "5px 20px" }}>
								<Button
									className={styles.btnP}
									width="90%"
									size="small"
									variant="contained"
									disableElevation
									style={{
										backgroundColor: "#0F9D58",
										fontSize: 13,
										padding: "10px 0",
										margin: "0",
										textAlign: "left",
										fontFamily: "Open Sans,sans-serif",
										fontWeight: "600",
									}}
									href={blogs.bloglink}
									target="_blank"
								>
									<ViewProject className={styles.svg} style={{ height: "20px", width: "20px" }} />
									Read on Medium
								</Button>
							</CardActions>
							{admin && (
								<CardActions className={styles.buttonsAdmin} style={{ padding: "5px 20px" }}>
									<Button
										onClick={handleClick}
										className={styles.btn}
										// size="small"
										variant="contained"
										disableElevation
										style={{
											backgroundColor: "#EA4235",
											padding: "10px 0",
											fontFamily: "Open Sans,sans-serif",
											fontSize: 13,
											fontWeight: "600",
										}}
									>
										Delete
									</Button>

									<Link
										to="../blogs/edit_blog"
										onClick={() => previousCardData(blogs)}
										style={{ textDecoration: "none" }}
									>
										<Button
											className={styles.btn}
											// size="small"
											variant="outlined"
											disableElevation
											style={{
												color: "#0F9D58",
												border: "2px solid #0F9D58",
												padding: "8px 0",
												fontFamily: "Open Sans,sans-serif",
												fontSize: 13,
												fontWeight: "600",
											}}
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
