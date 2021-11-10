import React from "react";
import { Typography } from "@material-ui/core";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";

function Projects() {
	return (
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
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
			<ProjectCard />
		</div>
	);
}

export default Projects;
