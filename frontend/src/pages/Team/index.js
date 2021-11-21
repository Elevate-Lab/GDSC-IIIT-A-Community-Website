import React, { useState, useEffect } from "react";

// import {Typography} from '@material-ui/core'
import Headings from "../../Components/Page_headings/index";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";


import CoreTeam from "./Teams_field/CoreTeam";
import WebTeam from "./Teams_field/WebTeam";
import DesignTeam from "./Teams_field/DesignTeam";
import MLTeam from "./Teams_field/MLTeam";
import OpenSourceTeam from "./Teams_field/OpenSourceTeam";
import AppTeam from "./Teams_field/AppTeam";
import ManagementTeam from "./Teams_field/ManagementTeam";

import "./Team.css";

const Fields = ["Core Team", "Web", "Design", "ML", "Open Source", "App", "Management"];
const FieldPages = [
	<CoreTeam />,
	<WebTeam />,
	<DesignTeam />,
	<MLTeam />,
	<OpenSourceTeam />,
	<AppTeam />,
	<ManagementTeam />,
];

function Team() {
	const [showField, setshowField] = useState("CoreTeam");
	const [showFieldIdx, setshowFieldIdx] = useState(0);

	useEffect(() => {}, [showField]);

	const UpdateField = e => {
		let field = e.target.innerText;
		setshowField(field.replace(/ /g, ""));
		setshowFieldIdx(Fields.indexOf(field));
	};

	return (
		<section className="Team_section">
			<Headings
				color={{ color: "#FBBC04" }}
				LargeHeading="Our Team"
				SmallHeading="The ones, who are making it happen"
			/>

			<div className="Member-field">
				<ul className="Field-select">
					{Fields.map((item, index) => (
						<li
							key={index}
							className={`Field-item ${item.replace(/ /g, "") === showField ? "field-selected" : ""}`}
						>
							<p className="field-link" onClick={UpdateField}>
								{item}
							</p>
						</li>
					))}
				</ul>
			</div>
			<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
				<AddIcon />
			</Fab>
			<div className="Member_cards_container">{FieldPages[showFieldIdx]}</div>
		</section>
	);
}

export default Team;
