import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import styles from "./ProjectCard.module.css";
import { ReactComponent as ViewProject } from "../../Assets/svg_link.svg";
import { ReactComponent as Github } from "../../Assets/Vector.svg";
import { Link } from "react-router-dom";
// import Stack from "@mui/material/Stack";
import image1 from "../../Assets/Images/img1.png";

function ProjectCard() {
	const [admin, setAdmin] = useState(true);
	return (
		<Box className={styles.card} sx={{ minWidth: 275 }}>
			<Card variant="outlined">
				<CardContent>
					<div className={styles.container}>
						<div className={styles.img}>
							<Avatar src={image1} sx={{ width: 76, height: 76 }} />
						</div>
						<div className={styles.name}>
							<Typography
								sx={{ fontSize: 20, fontWeight: "bold", margin: "0" }}
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

					<div className={styles.text}>
						<Typography variant="body2" sx={{ margin: 0 }}>
							Inclusivo is an online platform that makes it easier for people from underprivileged communities
							to find and get relevant jobs in their respective fields.
						</Typography>
					</div>
				</CardContent>
				<CardActions className={styles.buttons}>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className={styles.btn} size="small" variant="outlined" color="success">
							<Github className={styles.svg} />
							Github Link
						</Button>
					</Link>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button className={styles.btn} size="small" variant="contained" disableElevation color="success">
							<ViewProject className={styles.svg} />
							View Project
						</Button>
					</Link>
				</CardActions>
				{admin && (
					<CardActions className={styles.buttonsAdmin}>
						<Link to="" style={{ textDecoration: "none" }}>
							<Button className={styles.btn} size="small" variant="contained" disableElevation color="error">
								Delete
							</Button>
						</Link>
						<Link to="" style={{ textDecoration: "none" }}>
							<Button className={styles.btn} size="small" variant="outlined" disableElevation color="success">
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
