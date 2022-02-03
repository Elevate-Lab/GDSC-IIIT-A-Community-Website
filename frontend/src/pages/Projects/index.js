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
import FormBtnBg from "../../Assets/Form_btns_bg.png";

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
				Text="Making things which help in solving real life problems and finding solution to a 
				problem statement is also what makes us special. 
				Being in global top 50 for Google solutions challenge we are open to ideas and collaborations."
				PageIllustration={project_illustration}
			/>
			<div className="heading_plusBtn">
				<h2 style={{ fontWeight: "bold", color: "#1b2733" }} className="heading">
					Featured Projects
				</h2>
				{/* <Fab color="primary" aria-label="add">
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
				</Fab> */}
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
				btnText="Submit Project"
				bg={FormBtnBg}
				formLink="https://docs.google.com/forms/d/e/1FAIpQLScXVEYXIzzghozeE_rc5rshVs4iEKdSgIOvH8Z8E0u76AwnXQ/viewform"
			/>
		</div>
	);
}

export default Projects;
