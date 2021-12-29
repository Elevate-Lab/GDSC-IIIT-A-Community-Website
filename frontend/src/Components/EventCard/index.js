import React from "react";
import { Typography } from "@material-ui/core";
import EventCard from "./EventCard.js";

function EventCards(props) {
	return (
		<div
			style={{
				padding: "9vh 7vw",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-around",
				alignItems: "center",
				zIndex:'0'
			}}
		>
			<EventCard upcoming={props.upcoming} />
			<EventCard upcoming={props.upcoming} />
			<EventCard upcoming={props.upcoming} />
			<EventCard upcoming={props.upcoming} />
			<EventCard upcoming={props.upcoming} />
			<EventCard upcoming={props.upcoming} />
		</div>
	);
}

export default EventCards;
