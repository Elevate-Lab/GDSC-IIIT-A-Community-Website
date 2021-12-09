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
// import Stack from "@mui/material/Stack";

function ProjectCard() {
	const [admin, setAdmin] = useState(true);
	return (
		// <Box className="card" sx={{ minWidth: 275 }}>
		<Card variant="outlined" styles={{ padding: "0" }} className="card">
			<CardActionArea>
				{/* <CardMedia component="img" height="140" image="../Assets/About_DSC_Image.png" alt="project image" /> */}

				<CardMedia
					component="img"
					height="140"
					image="http://www.lacor.info/film/a_la_folie/img/galerie/large/a_la_folie_06.jpg"
					alt="project image"
					className="img"
				/>

				<CardContent>
					<div className="container">
						<div className="name">
							<Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="text.primary" gutterBottom>
								Project Name
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								tagline
							</Typography>
						</div>
					</div>
					{/* <Headings LargeHeading="Project Name" SmallHeading="tagline" /> */}

					<div className="text">
						<Typography variant="body2">
							Lorem ipsum dolor sit amet,happy xyx abc hello wo something sad apple consectetur haha he hehe
							adipiscing elit.
						</Typography>
					</div>
				</CardContent>
				<CardActions className="buttons">
					<Button size="small" variant="outlined" color="success">
						Github Link
					</Button>
					<Button size="small" variant="contained" disableElevation color="success">
						View Project
					</Button>
				</CardActions>
			</CardActionArea>

			{admin && (
				<CardActions className=" buttons-admin">
					<Button size="small">Edit</Button>
					<Button size="small" disableElevation>
						Delete
					</Button>
				</CardActions>
			)}
		</Card>
		// </Box>
	);
}

export default ProjectCard;
