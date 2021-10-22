import { Typography } from "@material-ui/core";
import React from "react";
import "./styles.css";
import { MdPlace, MdMail } from "react-icons/md";

function Footer() {
	return (
		<div className="footer">
			<div className="mainContainer">
				<div>
					<h1>Google Developer Student Club</h1>
					<p>Indian Institute of Information Technology Allahabad, Prayagraj</p>
				</div>
				<div>
					<div className="row">
						<MdMail className="icon" /> <div>xyz@gmail.com</div>
					</div>
					<div className="row">
						<MdPlace className="icon" /> <div>Prayagraj</div>
					</div>
				</div>
				<div>
					<p>Follow us on:</p>
				</div>
			</div>
			<hr />
			<br />
			<div className="copyright">© 2021 GDSC IIITA</div>
		</div>
	);
}

export default Footer;
