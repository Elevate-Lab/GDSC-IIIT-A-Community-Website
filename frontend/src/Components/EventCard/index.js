import React,{useEffect,useContext} from 'react';
import apiContext from "../../ContextApi/ApiContext";
import { Typography } from "@material-ui/core";
import EventCard from "./EventCard.js";

function EventCards() {
	const context = useContext(apiContext)
	const { data, getAllData, getAttribute } = context
	let attribute = "events";
	
	useEffect(() => {
		getAttribute(attribute)
		getAllData();
	}, [data])

	return (
		<div
			style={{
				padding: "9vh 7vw",
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				justifyContent: "space-around",
				alignItems: "center",
			}}
		>
			 {data && data.map((event)=>{
             return <EventCard event={event}/>
            })}
		</div>
	);
}

export default EventCards;
