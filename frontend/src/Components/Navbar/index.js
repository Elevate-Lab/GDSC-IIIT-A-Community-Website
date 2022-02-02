import React, { useState, useEffect } from "react";
// import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Navbar_logo from "../../Assets/DSC-IIITA-Light-Horizontal.png";

const navbarContent = ["Home", "Events", "Team", "Projects", "Blogs"];

function Navbar() {
	const [width, setWidth] = useState(window.innerWidth);
	const [Drawer, setDrawer] = useState("none");
	const [navCheck, setnavCheck] = useState("nav-unchecked");

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
			setnavCheck("nav-checked");
		} else {
			setnavCheck("nav-unchecked");
			setDrawer("none");
		}
	};
	const CollapseMenu = () => {
		if (Drawer === "flex") {
			setDrawer("none");
			setnavCheck("nav-unchecked");
		} else {
			setDrawer("flex");
			setnavCheck("nav-checked");
		}
	};
	const UpdateActivePage = (e) => {
		console.log(e.target.innerText)
		// setActivePage("about");
	};

	if (width > 900) {
		return (
			<div className="Navbar">
				<NavLink className="navbar_logo" to="/" style={{ width: "24vw" }}>
					<img src={Navbar_logo} alt="logo" />
				</NavLink>
				<div className="navbar_links">
					{navbarContent.map((item, index) => (
						<NavLink activeClassName="active_nav_link" className="navbar_link" key={index} to={`../${item.toLowerCase()}`} onClick={UpdateActivePage}>
							<p className="navbar_link_txt">{item}</p>
						</NavLink>
					))}
					<NavLink activeClassName="active_contact_link" className="navbar_link" to="../contact">
						<p className="navbar_link_txt navbar_contact">Contact</p>
					</NavLink>
				</div>
			</div>
		);
	} else {
		return (
			<div className="Navbar">
				<NavLink className="navbar_logo" to="/" style={{ width: "44vw" }}>
					<img src={Navbar_logo} alt="logo" />
				</NavLink>
				<div className="navbar_Drawer">
					<input type="checkbox" className={navCheck} value="drawer" onClick={ExpandMenu}/>
					<div className="navbar_drawer_icon">
						<p className="drawer_line_1"></p>
						<p className="drawer_line_2"></p>
						<p className="drawer_line_3"></p>
					</div>
				</div>
				<div className="navbar_drawer_links" style={{ display: `${Drawer}` }}>
					{navbarContent.map((item, index) => (
						<NavLink activeClassName="active_nav_link" className="navbar_link" key={index} to={`../${item.toLowerCase()}`} onClick={CollapseMenu}>
							<p className="navbar_link_txt">{item}</p>
						</NavLink>
					))}
					<NavLink activeClassName="active_contact_link" className="navbar_link" to="../contact" onClick={CollapseMenu}>
						<p className="navbar_link_txt navbar_contact">Contact</p>
					</NavLink>
				</div>
			</div>
		);
	}
}

export default Navbar;
