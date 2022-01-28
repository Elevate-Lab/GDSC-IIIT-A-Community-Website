import React, { useContext, useEffect } from "react";
import apiContext from "../../ContextApi/ApiContext";
import { Link } from "react-router-dom";
import Headings from "../../Components/Page_headings";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import project_illustration from "../../Assets/Projects_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "./Projects.module.css";
import HeadingButton from "../../Components/Heading_button";

function Projects() {
	const context = useContext(apiContext);
	const { data, getAllData, getAttribute, getAllProjectData, projects, parameter } = context;
	let attribute = "projects";
	useEffect(() => {
		getAttribute(null);
		//getAllData(attribute);
		getAllProjectData();
	}, [parameter]);
	let projectsArr = Array.from(projects);
	return (
		<div className={styles.projectsPage}>
			<Headings
				LargeHeading="Projects"
				SmallHeading="Checkout our Projects..."
				Text="Here at GDSC IIIT A we have developed and still working on projects that solve some
				 social problem or on that ease day-to-day things.
				 We are also open to project collaboration and new ideas!"
				PageIllustration={project_illustration}
			/>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "bold", color: "#1b2733" }} className="heading">
					Featured Projects
				</h2>
				<Fab color="primary" aria-label="add">
					<Link
						to="../projects/new_project"
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
					padding: "2vh 7vw 9vh 7vw",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
					width: "100%",
				}}
			>
				{projectsArr &&
					projectsArr.map(project => {
						return <ProjectCard key={project._id} project={project} />;
					})}
			</div>


			<HeadingButton
				LargeHeading="Want to get your Project featured under us?"
				SmallHeading="Just drop us your Proposal."
				ButtonText="Submit Project"
			/>
		</div>
	);
}

export default Projects;
