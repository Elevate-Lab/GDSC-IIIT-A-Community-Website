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
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import image1 from "../../Assets/Images/img1.png";

function ProjectCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<Box className="card" sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div className="container">
						<div className="img">
							<Avatar src={image1} sx={{ width: 66, height: 66 }} />
						</div>
						<div className="name">
							<Typography
								sx={{ fontSize: 18, fontWeight: "bold", margin: "0" }}
								color="text.primary"
								gutterBottom
							>
								Inclusivo
							</Typography>
							<Typography sx={{ fontSize: 14, margin: "0" }} color="text.secondary" gutterBottom>
								Jobs for all
							</Typography>
						</div>
					</div>

					<div className="text">
						<Typography variant="body2" sx={{ margin: 0 }}>
							Inclusivo is an online platform that makes it easier for people from underprivileged communities
							to find and get relevant jobs in their respective fields.
						</Typography>
					</div>
				</CardContent>
				<CardActions className="buttons">
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className="btn" size="small" variant="outlined" color="success">
							<Github className="svg" />
							Github Link
						</Button>
					</Link>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className="btn" size="small" variant="contained" disableElevation color="success">
							<ViewProject className="svg" />
							View Project
						</Button>
					</Link>
				</CardActions>
				{admin && (
					<CardActions className="buttons buttons-admin">
						<Link to="" style={{ textDecoration: "none" }}>
							<Button className="btn" size="small" variant="contained" disableElevation color="error">
								Delete
							</Button>
						</Link>
						<Link to="" style={{ textDecoration: "none" }}>
							<Button className="btn" size="small" variant="outlined" disableElevation>
								Edit
							</Button>
						</Link>
					</CardActions>
				)}
			</Card>
		</Box>
	);
}

export default ProjectCard;
