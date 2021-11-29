import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Headings from "../../Components/Page_headings";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import apiContext from "../../ContextApi/ApiContext";

function Projects() {
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute } = context;
	let attribute = "projects";
	useEffect(() => {
		getAttribute(attribute)
		getAllData();
	}, [data])
	return (
		<div
			style={{
				padding: "9vh 7vw",
				paddingTop: "10.88vh",
				paddingBottom: "6vh",
				display: "flex",
				// flexDirection: "row",
				// flexWrap: "wrap",
				flexDirection: "column",
				justifyContent: "space-around",
				// alignItems: "center",
			}}
		>
			<Headings
				color={{ color: "rgb(66, 133, 244)" }}
				style={{ paddingBottom: "10vh" }}
				LargeHeading="Projects"
				SmallHeading="Checkout our Projects"
			/>
			<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
				<Link to="Projects/NewProject"
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
			{data && data.map((project) => {
			  return <ProjectCard project={project}/>
			})}
		</div>
	);
}

export default Projects;
