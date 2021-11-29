import * as React from "react";
import { useState,useContext } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./ProjectCard.css";
import { Link } from "react-router-dom";
import apiContext from "../../ContextApi/ApiContext";
function ProjectCard(props) {
	const context = useContext(apiContext)
    const {removeData,previousCardData} = context
	const [admin, setAdmin] = useState(false);
	const {project} = props
	return (
		<div className="card">
			<div
				className="img"
			><img src={project.image} alt="" /></div>

			<div className="content">
				<Typography
					sx={{
						fontSize: 20,
						letterSpacing: ".0.5rem",
						fontWeight: "bold",
						margin: 0,
						background: "-webkit-linear-gradient(rgb(95, 144, 223) ,rgba(66,133,244, 1), rgba(131,58,180,1))",
						"-webkit-background-clip": "text",
						"-webkit-text-fill-color": "transparent",
					}}
					color="text.primary"
					gutterBottom
				>
					{project.projectname}
				</Typography>
				<Typography
					sx={{ fontSize: 14, fontStyle: "oblique", letterSpacing: ".0.5rem", marginBottom: 1 }}
					color="text.secondary"
					gutterBottom
				>
					tagline
				</Typography>
				<Typography variant="body2" className="text">
					{project.description}
				</Typography>
				<div className="buttons">
					<a class="custom-btn btn" href={project.projectLink}>
						<span>Github Link</span>
					</a>
					<a class="custom-btn btn" href={project.projectLink}>
						<span>View Project</span>
					</a>
				</div>
				{ (
					<div className="buttons-admin">
						<Link to="/Projects/EditProject" onClick={()=>previousCardData(project)}>Edit</Link>
						<Button size="small" disableElevation onClick={()=>removeData(project._id)}>
							Delete
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
