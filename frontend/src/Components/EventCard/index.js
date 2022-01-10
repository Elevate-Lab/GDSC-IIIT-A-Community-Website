import React,{useEffect,useContext} from 'react';
import apiContext from "../../ContextApi/ApiContext";
import { Typography } from "@material-ui/core";
import EventCard from "./EventCard.js";

function EventCards(props) {
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute,getAllEventData,events } = context
	let attribute = "events";
	
	useEffect(() => {
		//getAttribute(attribute)
		//getAllData(attribute);
		getAllEventData();
	}, [])

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
			{events && events.map((event)=>{
             return <EventCard event={event} upcoming={props.upcoming}/>
            })}
		</div>
	);
}

export default EventCards;
