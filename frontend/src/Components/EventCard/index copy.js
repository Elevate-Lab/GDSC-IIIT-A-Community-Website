import React,{useEffect,useContext} from 'react';
import apiContext from "../../ContextApi/ApiContext";
import { Typography } from "@material-ui/core";
import EventCard from "./EventCard.js";

function EventCards2(props) {
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute,getAllEventData,events,parameter,pastEvents} = context
	let attribute = "events";
	
	useEffect(() => {
		getAttribute(null)
		//getAllData(attribute);
		getAllEventData();
	}, [parameter])

let eventsArr = Array.from(pastEvents)
	return (
		<div
			style={{
				padding: "2vh 7vw",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-around",
				alignItems: "flex-start",
				zIndex:'0',
				// flex: '1 1 0px'
			}}
		>
			{eventsArr && eventsArr.map((event)=>{
             return <EventCard key={event._id} event={event} upcoming={props.upcoming}/>
            })}
		</div>
	);
}

export default EventCards2;
