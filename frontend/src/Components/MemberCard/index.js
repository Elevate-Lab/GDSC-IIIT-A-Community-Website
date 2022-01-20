import React, { useContext } from 'react'
import apiContext from '../../ContextApi/ApiContext';
import { useState } from "react";
import "./MemberCard.css";
import { ReactComponent as Github } from "../../Assets/greyGithub.svg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function MemberCard(props) {
	const {team} = props
    const context = useContext(apiContext)
    const {removeData , previousCardData,removeTeam,getAttribute} =context
	const [admin, setAdmin] = useState(true);
	const handleClick = () =>{
    getAttribute(team);
	removeTeam(team._id)
	}
	return (
		<div className="MemberCard_container">
			{/* <div className="team-card"> */}
			{/* <div className="picture"> */}
			<img
				className="img-fluid"
				src={team.image}
			/>
			{/* </div> */}
			<div className="team-content">
				<h3 className="name">{team.name}</h3>
				<h4 className="title">{team.designation}</h4>
			</div>
			<div className="social">
				<a href={team.facebookLink} className="fa fa-twitter" aria-hidden="true" target="_blank"></a>

				<a href={team.githubLink} className="fa" aria-hidden="true" target="_blank">
					{" "}
					<Github className="fa" />
				</a>

				<a
					href={team.linkedinLink}
					className="fa fa-linkedin"
					aria-hidden="true"
					target="_blank"
				></a>
			</div>
			{/* </div> */}
			{admin && (
				<div className="buttonsAdmin">
					
						<Button
						onClick={handleClick}
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
				
					<Link onClick={()=>previousCardData(team)} to="/Team/EditMember" style={{ textDecoration: "none" }}>
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
