import React from "react";
import { Link } from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
import { Grid } from "@material-ui/core";
import "./Blogs.css";
import blog_illustration from "../../Assets/Blogs_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import MustReadCard from "../../Components/mustReadCard";

function Blogs() {
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
				Text="Learning goes hand-in-hand with building new and cool stuff. Lorem ipsum dolor sit amet"
				PageIllustration={blog_illustration}
			/>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "620" }} className="heading">
					Must Read
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
			<MustReadCard />
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
				</Grid>
			</div>
		</section>
	);
}

export default Blogs;
