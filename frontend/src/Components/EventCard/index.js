import React, { useEffect, useContext, useState } from 'react';
import apiContext from "../../ContextApi/ApiContext";
import { Typography } from "@material-ui/core";
import EventCard from "./EventCard.js";
import moment from 'moment';
function EventCards(props) {
	const context = useContext(apiContext)
	const { upcoming } = props;
	const { data, getAllData, getAttribute, getAllEventData, events, parameter ,upcomingEvents} = context
	let attribute = "events";

	useEffect(() => {
		getAttribute(null)
		//getAllData(attribute);
		getAllEventData();
	}, [parameter])
	let eventsArr = Array.from(upcomingEvents)

	async function compare( a, b ) {
		if ( a.startDate < b.startDate ){
		  return -1;
		}
		if ( a.startDate > b.startDate ){
		  return 1;
		}
		return 0;
	  }
	console.log(eventsArr[0]);
	eventsArr.sort(compare);

	return (
		<div className='cards_container'
			style={{
				padding: "2vh 7vw 9vh 7vw",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-around",
				alignContent: "flex-start",
				alignItems: "flex-start",
				zIndex: '0',
				width: '80vh',

			}}
		>
			{eventsArr && eventsArr.map((event) => {
				return <EventCard key={event._id} event={event} upcoming={upcoming} />
			})}

		</div>
	);
}

export default EventCards;
