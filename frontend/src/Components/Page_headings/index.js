import { getThemeProps } from "@material-ui/styles";
import React from "react";
import "./Headings.css";

function Headings({ style, color, LargeHeading, SmallHeading }) {
	return (
		<div style={style} className="Section_Headings">
			<p style={color} className="large_heading">
				{LargeHeading}
			</p>
			<p className="small_heading">{SmallHeading}</p>
		</div>
	);
}
export default Headings;
