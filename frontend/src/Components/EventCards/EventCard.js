import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "./EventCard.css";
// import Stack from "@mui/material/Stack";

function EventCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<Box className="card" sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div className="container">
						<div className="img">
							<Avatar src="" />
						</div>
						<div className="name">
							<Typography sx={{ fontSize: 16, fontWeight: "bold" }} color="text.primary" gutterBottom>
								Project Name
							</Typography>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								tagline
							</Typography>
						</div>
					</div>

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

export default EventCard;
