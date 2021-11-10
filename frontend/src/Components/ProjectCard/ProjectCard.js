import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import "./ProjectCard.css";
import Headings from "../Page_headings";

function ProjectCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<Card variant="outlined" styles={{ padding: "0" }} className="card">
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="http://www.lacor.info/film/a_la_folie/img/galerie/large/a_la_folie_06.jpg"
					alt="project image"
					className="img"
				/>

				<CardContent>
					<Typography sx={{ fontSize: 17, fontWeight: "bold", margin: 0 }} color="text.primary" gutterBottom>
						Project Name
					</Typography>
					<Typography
						sx={{ fontSize: 14, fontStyle: "italic", marginBottom: 2 }}
						color="text.secondary"
						gutterBottom
					>
						tagline
					</Typography>

					<Typography variant="body2" className="text">
						Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple consectetur haha he hehe
						adipiscing elit.
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions className="buttons">
				<Button size="small" variant="outlined" color="success">
					Github Link
				</Button>
				<Button size="small" variant="contained" disableElevation style={{ backgroundColor: "#34A853" }}>
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
	);
}

export default ProjectCard;
