import React from "react";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import EventCards from "../../Components/EventCard/index";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";

function Events() {
	return (
		<>
			<div
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
				<Headings color={{ color: "#EA4335" }} LargeHeading="Events" SmallHeading="Whats happening..." />
				<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
					<AddIcon />
				</Fab>
				<EventCards />
				<LeaderBoard/>
			</div>
		</>
	);
}

export default Events;
