import * as React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import "./ProjectCard.css";

function ProjectCard() {
	const [admin, setAdmin] = useState(false);
	return (
		<div className="card">
			<div
				className="img"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1635928097900-cf6299f4e8cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80')",
				}}
			></div>

			<div className="content">
				<Typography
					sx={{
						fontSize: 20,
						letterSpacing: ".1rem",
						fontWeight: "bold",
						margin: 0,
						background: "-webkit-linear-gradient(rgb(95, 144, 223) ,rgba(66,133,244, 1), rgba(131,58,180,1))",
						"-webkit-background-clip": "text",
						"-webkit-text-fill-color": "transparent",
					}}
					color="text.primary"
					gutterBottom
				>
					Project Name
				</Typography>
				<Typography
					sx={{ fontSize: 14, fontStyle: "oblique", letterSpacing: ".1rem", marginBottom: 1 }}
					color="text.secondary"
					gutterBottom
				>
					tagline
				</Typography>
				<Typography variant="body2" className="text">
					Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple consectetur haha he hehe
					adipiscing elit. Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple consectetur
					haha he hehe adipiscing elit. Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple
					consectetur haha he hehe adipiscing elit.
				</Typography>
				<div className="buttons">
					<a class="custom-btn btn" href="">
						<span>Github Link</span>
					</a>
					<a class="custom-btn btn">
						<span>View Project</span>
					</a>
				</div>
				{admin && (
					<div className="buttons-admin">
						<Button size="small">Edit</Button>
						<Button size="small" disableElevation>
							Delete
						</Button>
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
