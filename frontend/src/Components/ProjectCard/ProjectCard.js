import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./ProjectCard.css";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { ReactComponent as Github } from "../../Assets/icons8-github.svg";
// import Stack from "@mui/material/Stack";

function ProjectCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<Box className="card" sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div className="container">
						<div className="img">
							<Avatar src="" sx={{ width: 66, height: 66 }} />
						</div>
						<div className="name">
							<Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="text.primary" gutterBottom>
								Event Name
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								Event Date/Duration
							</Typography>
						</div>
					</div>

					<div className="text">
						<Typography variant="body2" sx={{ margin: 0 }}>
							Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple consectetur haha he hehe
							adipiscing elit.
						</Typography>
					</div>
				</CardContent>
				<CardActions className="buttons">
					<Button size="small" variant="outlined" color="success">
						<Github className="svg" />
						Github Link
					</Button>
					<Button size="small" variant="contained" disableElevation color="success">
						<ViewProject className="svg" />
						View Project
					</Button>
				</CardActions>
				{admin && (
					<CardActions className=" buttons-admin">
						<Button size="small">Edit</Button>
						<Button size="small" disableElevation>
							Delete
						</Button>
					</CardActions>
				)}
			</Card>
		</Box>
	);
}

export default ProjectCard;
