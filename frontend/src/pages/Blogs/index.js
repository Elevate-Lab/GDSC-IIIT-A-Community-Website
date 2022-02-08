import React, { useEffect, useContext } from "react";
import apiContext from "../../ContextApi/ApiContext";
import { Link } from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
import { Grid } from "@material-ui/core";
import "./Blogs.css";
import blog_illustration from "../../Assets/Blogs_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import BlogCard from "./BlogCard";
import imag from "./thankyou.jpg";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./BlogCard.module.css";
import image1 from "../../Assets/Images/img1.png";
import { useState } from "react";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import HeadingButton from "../../Components/Heading_button";
import FormBtnBg from "../../Assets/Form_btns_bg.png";

import MustReadCard from "../../Components/mustReadCard";

function Blogs() {
	const context = useContext(apiContext);
	const { data, getAllData, getAttribute, blogs, getAllBlogData, addBlogCard, parameter } = context;
	let attribute = "blogs";
	useEffect(() => {
		//getAllData(attribute);
		getAllBlogData();
		getAttribute(null);
	}, [parameter]);
	console.log(parameter);
	const [admin, setAdmin] = useState(true);
	return (
		<section
			className="Blogs_section"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "10vh",
				paddingTop: "10.88vh",
				paddingBottom: "6vh",
				background: "#ffffff",
				alignText: "center",
				justifyContent: "center",
				alignContent: "center",
			}}
		>
			<Headings
				className="Heading"
				LargeHeading="Blogs"
				SmallHeading="Read our latest blogs"
				Text="Our inspiring young developers and learners have a piece of knowledge to share with you. 
				A collection of blogs based on varied domains including Flutter and Kotlin Development, Blockchain, 
				Web Development and NFT's. ... Do give a it a read!"
				PageIllustration={blog_illustration}
			/>

			{/* <div container style={{ width: '90%', height: '22rem', backgroundColor: '#f7f4f2', marginBottom: '4rem', display: 'flex', direction: 'row', justifyContent: 'center', alignContent: 'center' }}>

				<div style={{ display: 'flex', width: '35%' }}><img src={imag} style={{ width: '45rem', height: '22rem', cursor: 'not-allowed' }} /></div>
				<div style={{ display: 'flex', width:'75%',height:'20rem'}}>
					<Box className={styles.cardM} sx={{ minWidth: 275 }}>
						<Card variant="outlined">
							<CardContent>
								<div style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}>
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

			</div> */}

			<div className="heading_plusBtn">
				<h2
					style={{
						fontWeight: "600",
						fontFamily: "Open Sans,Poppins,sans-serif",
						color: "#1b2733",
						marginTop: "-10vh",
					}}
					className="heading"
				>
					Must Read
				</h2>
				{/* <Fab color="primary" aria-label="add">
					<Link
						to="../blogs/new_blog"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
			</div>
			<MustReadCard />
			<div className="heading_plusBtn">
				<h2
					style={{
						fontWeight: "600",
						fontFamily: "Open Sans,Poppins,sans-serif",
						color: "#1b2733",
						marginTop: "2vh",
					}}
					className="heading"
				>
					All Blogs
				</h2>
			</div>
			<div
				style={{
					padding: "0vh 5vw 0vh 5vw",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
				}}
			>
				{blogs &&
					blogs.map(blog => {
						return <BlogCard key={blog._id} blogs={blog} />;
					})}
			</div>
			<HeadingButton
				LargeHeading="Interested in submitting your blog?"
				SmallHeading="Just drop us your Proposal."
				bg={FormBtnBg}
				btnText="Submit Blog"
				formLink="https://docs.google.com/forms/d/e/1FAIpQLSdInkvrM-KeM4P3m26wi-x73ftRT8Q32-632aL4yIWBYjfyYw/viewform?usp=sf_link"
			/>
			{/* <Grid
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
					container
				>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
				</Grid>
			</div>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "620" }} className="heading">
					Featured Blogs
				</h2>
				<Fab color="primary" aria-label="add">
					<Link
						to="Blogs/NewBlog"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab>
			</div>
			<div
				style={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Grid
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
					container
				>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
					<Grid
						style={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
						}}
						item
					>
						<DSBlogCard
							title="Learn Microinteraction"
							body="Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit. Ornare 
                pretium placerat ut platea. Purus 
                blandit integer sagittis massa vel est hac."
							date="Monday Jan 20 , 2020"
						/>
					</Grid>
				</Grid> */}
		</section>
	);
}

export default Blogs;
