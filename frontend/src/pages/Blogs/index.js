import React,{useEffect,useContext} from "react";
import { Link } from "react-router-dom";
import DSBlogCard from "../../Components/DSBlogCard";
import Headings from "../../Components/Page_headings";
import { Grid } from "@material-ui/core";
import "./Blogs.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import apiContext from "../../ContextApi/ApiContext";

function Blogs() {
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute } = context
	let attribute = "blogs";
	useEffect(() => {
		getAttribute(attribute)
		getAllData();
	}, [data])
	
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
				color={{ color: "#34A853" }}
				LargeHeading="Blogs"
				SmallHeading="Read our latest blogs"
			/>
			<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
				<Link to="Blogs/NewBlog"
					style={{
						color: "white",
						height: "100%",
						width: "100%",
						margin: "0",
						display: "grid",
						placeItems: "center"
					}}>
					<AddIcon />
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
						item
					>
						{data && data.map((blogs) => {
							return <DSBlogCard key={blogs._id} blogs={blogs} />
						})}
					</Grid>
			</div>
		</section>
	);
}

export default Blogs;
