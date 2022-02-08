import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Headings from "../../Components/Page_headings";
import HeadingButton from "../../Components/Heading_button";
import EventCards from "../../Components/EventCard/index.js";
import event_illustration from "../../Assets/Events_page_illustration.svg";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import CarouselComponent from "./Events";
import styles from "./EventPage.module.css";
import EventCards2 from "../../Components/EventCard/index copy";
import FormBtnBg from "../../Assets/Form_btns_bg.png";

function Events() {
	return (
		<section
			className="Events_section"
			style={{
				// width: "100vw",
				overflowX: "hidden",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				// alignItems: "center",
				paddingBottom: "6vh",
				// paddingTop: "9vh",
			}}
		>
			<CarouselComponent />
			<Headings
				LargeHeading="Events"
				SmallHeading="Whats happening..."
				Text="GDSC IIITA also provides with Events, Workshops, Seminars. May it be Android Study Jams or Google Cloud Month we have it all..."
				PageIllustration={event_illustration}
			/>
			<div className="heading_plusBtn">
				<h2
					style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }}
					className="heading"
				>
					Upcoming Events
				</h2>
				{/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
			</div>
			<div className={styles.heading_plusBtn}>
				<h2 style={{fontSize:'23px', fontWeight: "400", fontFamily: "Open Sans,Poppins,sans-serif", color: "#484848", marginTop: '0vh' }} className={styles.heading_upcoming}>
				There are no upcoming events at the moment. Please check again soon.
				</h2>
			</div>
			<EventCards upcoming={true} />
			<div className="heading_plusBtn">
				<h2
					style={{ fontWeight: "600", fontFamily: "Open Sans,Poppins,sans-serif", color: "#1b2733" }}
					className="heading"
				>
					Past Events
				</h2>
				{/* <Fab color="primary" aria-label="add">
					<Link
						to="../events/new_event"
						style={{
							color: "white",
							height: "100%",
							width: "100%",
							margin: "0",
							display: "grid",
							placeItems: "center",
						}}
					>
						<AddIcon />
					</Link>
				</Fab> */}
			</div>
			<EventCards2 upcoming={false} />
			<HeadingButton
				LargeHeading="Interested in being a Speaker at one of our events?"
				SmallHeading="Just drop us your Proposal."
				bg={FormBtnBg}
				btnText="Get in Touch"
				formLink="https://docs.google.com/forms/d/e/1FAIpQLSc9zo00sylbNGIfLKprXnYOy-F_giR2FD4vKw2GxJHnzTwHWw/viewform"
			/>
		</section>
	);
}

export default Events;
