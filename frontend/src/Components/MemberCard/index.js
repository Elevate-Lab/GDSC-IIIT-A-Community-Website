import React from "react";
import { useState } from "react";
import "./MemberCard.css";
import { ReactComponent as Github } from "../../Assets/greyGithub.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function MemberCard({ Name, Position, ImageURL, GithubLink, LinkedinLink, TwitterLink }) {
	const [admin, setAdmin] = useState(true);
	return (
		<div className="MemberCard_container">
			{/* <div className="team-card"> */}
			{/* <div className="picture"> */}
			<img
				className="img-fluid"
				src="https://indianmemetemplates.com/wp-content/uploads/Doge-meme-template.jpg"
			/>
			{/* </div> */}
			<div className="team-content">
				<h3 className="name">{Name}</h3>
				<h4 className="title">{Position}</h4>
			</div>
			<div className="social">
				<a href="" className="fa fa-twitter" aria-hidden="true" target="_blank"></a>

				<a href="https://github.com/shin-igami" className="fa" aria-hidden="true" target="_blank">
					{" "}
					<Github className="fa" />
				</a>

				<a
					href="https://www.linkedin.com/in/mohsin-raza-22964b108/"
					className="fa fa-linkedin"
					aria-hidden="true"
					target="_blank"
				></a>
			</div>
			{/* </div> */}
			{admin && (
				<div className="buttonsAdmin">
					<Link to="" style={{ textDecoration: "none" }}>
						<Button
							className="btn"
							size="small"
							variant="contained"
							disableElevation
							style={{
								backgroundColor: "#EA4335",
								borderColor: "#EA4335",
								border: "1.5px solid #EA4335",
								fontWeight: "600",
							}}
						>
							Delete
						</Button>
					</Link>
					<Link to="" style={{ textDecoration: "none" }}>
						<Button
							className="btn"
							size="small"
							variant="outlined"
							disableElevation
							style={{ color: "#08ad5d", borderColor: "#08ad5d", border: "1.5px solid", fontWeight: "600" }}
						>
							Edit
						</Button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default MemberCard;
