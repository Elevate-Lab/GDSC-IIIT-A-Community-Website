import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { ReactComponent as Logo } from "../../gdscLogo.svg";
import "./styles.css";
import DrawerComponent from "../Drawer/index";
import useViewport from "../../viewport/useViewport";
const navbarContent = ["About", "Events", "Team", "Projects", "Blogs"];

const Navbar = () => {
	const { width, height, isMobile, isTablet } = useViewport();
	return (
		<div>
			{false ? (
				<DrawerComponent />
			) : (
				<AppBar
					style={{
						backgroundColor: "#fff",
						height: "20vh",
						justifyContent: "center",
					}}
					elevation={3}
					position="static"
				>
					<Toolbar>
						<Logo height="3.5em" style={{ paddingLeft: "9%" }} />
						<Typography
							style={{
								color: "#000",
								flexGrow: 2,
								fontStyle: "bold",
							}}
						>
							<div className="logoText">
								<p className="text top">Developer Student Club</p>
								<p className="text bottom">IIIT Allahabad</p>
							</div>
						</Typography>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							{navbarContent.map((item, index) => (
								<Link style={{ textDecoration: "none" }} key={index} to={`${item}`}>
									<Typography
										style={{
											color: "#4E4E4E",
											marginLeft: 10,
											marginRight: 10,
											padding: "5px",
											fontWeight: 600,
										}}
									>
										{item}
									</Typography>
								</Link>
							))}

							<Button
								href="/Contact"
								variant="contained"
								style={{
									background: "#156EFF",
									color: "#fff",
									margin: "0px 10px",
									padding: "5px 18px",
									borderRadius: "38px",
									fontWeight: 600,
									// boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
								}}
							>
								Contact
							</Button>
						</div>
					</Toolbar>
				</AppBar>
			)}
		</div>
	);
};

export default Navbar;
