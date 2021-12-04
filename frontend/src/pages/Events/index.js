import React from "react";
import {Link} from "react-router-dom";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import EventCards from "../../Components/EventCard/index";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import './Events.css'
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import Even from "./Even"
function Events() {
	return (
			<section
            	className="Events_section" 
				style={{
					// height: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					// alignItems: "center",
					paddingTop: "10.88vh",
					paddingBottom: "6vh",
				}}
			>
				<Even />
				<Headings color={{ color: "#EA4335" }} LargeHeading="Events" SmallHeading="Whats happening..." />
				<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
					<Link to="Events/NewEvent"
						style={{
							color: "white",
							height:"100%",
							width:"100%",
							margin:"0",
							display:"grid",
							placeItems:"center"	
					}}>
						<AddIcon/>
					</Link>
				</Fab>
				<EventCards />
			</section>
	);
}

export default Events;
