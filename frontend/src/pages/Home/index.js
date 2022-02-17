import React from "react";
// import {Typography} from '@material-ui/core'
import About from "../About/index";
import Contact from "../Contact/index";
import Hero from "./Hero";

function Home() {
	return (
		<section
			style={{
				// height: '100vh',
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Hero />
			<About />
			<Contact />
		</section>
	);
}

export default Home;
