import React from "react";
import {Link} from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
import { Grid } from "@material-ui/core";
import "./Blogs.css";
import blog_illustration from "../../Assets/Blogs_page_illustration.svg"
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
			<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
				<Link to="Blogs/NewBlog"
						style={{
							color: "white",
							height:"100%",
							width:"100%",
							margin:"0",
							display:"grid",
							placeItems:"center"	
					}}>
						<AddIcon/>
					</Link>
			</Fab>
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
