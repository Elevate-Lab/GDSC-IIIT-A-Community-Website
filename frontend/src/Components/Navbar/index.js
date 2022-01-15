import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";
import "./Navbar.css";
import Navbar_logo from "../../Assets/DSC-IIITA-Light-Horizontal.png";

const navbarContent = ["About", "Events", "Team", "Projects", "Blogs"];

function Navbar() {
	const [width, setWidth] = useState(window.innerWidth);
	const [Drawer, setDrawer] = useState("none");

	const handleWindowResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	const ExpandMenu = () => {
		if (Drawer === "none") {
			setDrawer("flex");
		} else {
			setDrawer("none");
		}
	};

	if (width > 900) {
		return (
			<div className="Navbar">
				<Link className="navbar_logo" to="/" style={{ width: "24vw" }}>
					<img src={Navbar_logo} alt="logo" />
				</Link>
				<div className="navbar_links">
					{navbarContent.map((item, index) => (
						<Link className="navbar_link" key={index} to={`../${item}`}>
							<p className="navbar_link_txt">{item}</p>
						</Link>
					))}
					<Link className="navbar_link" to="Contact">
						<p className="navbar_link_txt navbar_contact">Contact</p>
					</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className="Navbar">
				<Link className="navbar_logo" to="/" style={{ width: "44vw" }}>
					<img src={Navbar_logo} alt="logo" />
				</Link>
				<div className="navbar_Drawer">
					<input type="checkbox" value="drawer" onChange={ExpandMenu} unchecked />
					<div className="navbar_drawer_icon">
						<p className="drawer_line_1"></p>
						<p className="drawer_line_2"></p>
						<p className="drawer_line_3"></p>
					</div>
				</div>
				<div className="navbar_drawer_links" style={{ display: `${Drawer}` }}>
					{navbarContent.map((item, index) => (
						<Link className="navbar_link" key={index} to={`../${item}`}>
							<p className="navbar_link_txt">{item}</p>
						</Link>
					))}
					<Link className="navbar_link" to="../Contact">
						<p className="navbar_link_txt navbar_contact">Contact</p>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
