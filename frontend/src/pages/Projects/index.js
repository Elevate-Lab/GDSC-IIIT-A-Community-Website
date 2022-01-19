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
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute,getAllProjectData,projects } = context;
	let attribute = "projects";
	useEffect(() => {
		//getAttribute(attribute)
		//getAllData(attribute);
		getAllProjectData();
	}, [projects])

	let projectsArr = Array.from(projects)
	return (
		<div className={styles.projectsPage}>
			<div
				style={{
					padding: "9vh 0",
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
					LargeHeading="Projects"
					SmallHeading="Checkout our Projects"
					Text="Learning goes hand-in-hand with building new and cool stuff. Lorem ipsum dolor sit amet"
					PageIllustration={project_illustration}
				/>

				<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
					<Link
						to="Projects/NewProject"
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
	


				<div className="heading_plusBtn">
					<h2 style={{ fontWeight: "620" }} className="heading">
						Featured Projects
					</h2>
					<Fab color="primary" aria-label="add">
						<Link
							to="Projects/NewProject"
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

			</div>

			<div
				style={{
					padding: "9vh 7vw",
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "space-around",
					alignItems: "center",
				}}
			>
			
				{projectsArr && projectsArr.map((project) => {
			  return <ProjectCard key={project._id} project={project}/>
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
