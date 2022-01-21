import { getThemeProps } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Headings_button.css";

function HeadingButton({ LargeHeading, SmallHeading, ButtonText }) {
	return (
		<div className="Headings_Button_Container">
			<div className="Section_Headings">
				<p className="large_heading">{LargeHeading}</p>
				<p className="small_heading">{SmallHeading}</p>
			</div>

			<div className="Button">
				<Link to="/contact" style={{ textDecoration: "none" }}>
					{ButtonText}
				</Link>
			</div>
		</div>
	);
}
export default HeadingButton;
