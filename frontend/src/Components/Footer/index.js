// import { Typography } from '@material-ui/core'
import React, { useState } from "react";
import "./Footer.css";
import DSC_logo from "../../Assets/DSC-IIITA-Dark-Horizontal.png";
import mail_icon from "../../Assets/Message.svg";
import join_us_icon from "../../Assets/JoinUs.svg";
import { Link } from "react-router-dom";

import login_icon from "../../Assets/LogIn_icon.svg";

import follow_icon_1 from "../../Assets/instagram.svg";
import follow_icon_2 from "../../Assets/facebook.svg";
import follow_icon_3 from "../../Assets/medium.svg";
import follow_icon_4 from "../../Assets/Images/youtube-light.svg";
import follow_icon_5 from "../../Assets/twitter.svg";
import follow_icon_6 from "../../Assets/linkedin.svg";
import follow_icon_7 from "../../Assets/github.svg";
import follow_icon_8 from "../../Assets/discord.png";
import useViewport from "../../viewport/useViewport";
import loginperson from "./loginperson_Image.png";
import LoginPage from "../../pages/Projects/loginPage";

function Footer() {
	const { width } = useViewport();

	let [admin, setAdmin] = useState("false");

	return (
		<div className="footer">
			<div className="footer_top">
				<div className="DSC_logo">
					<img src={DSC_logo} alt="DSC_logo" />
				</div>
				<div className="footer_contact">
					<div className="contact_sec_1">
						<a className="contact_mail" href="mailto:gdsc@iiita.ac.in" target="_blank">
							<div className="contact_mail_icon" >
								<img src={mail_icon} alt="mail" />
							</div>
							<p>
								{/* <a href="mailto:gdsc@iiita.ac.in" target="_blank"> */}
									gdsc@iiita.ac.in
								{/* </a> */}
							</p>
						</a>
						<a className="contact_address" href="https://gdsc.community.dev/indian-institute-of-information-technology-allahabad-prayagraj/" target="_blank">
							<div className="contact_pin_icon" >
								<img src={join_us_icon} alt="join us" />
							</div>
							<p>
								{/* <a href="https://gdsc.community.dev/indian-institute-of-information-technology-allahabad-prayagraj/" target="_blank"> */}
									Join Us!
								{/* </a> */}
								{/* <Link src="https://gdsc.community.dev/indian-institute-of-information-technology-allahabad-prayagraj/">
									Join Us!
								</Link> */}
								{/* <br /> */}
								{/* <span>IIITA, Prayagraj, Uttar Pradesh, 211015</span> */}
							</p>
						</a>
					</div>
					<div className="contact_sec_2">
						<p>Follow us on</p>
						<div className="contact_links">
							<div className="contact_icon">
								<a href="https://www.instagram.com/gdsciiita/" target="_blank" rel="noopener noreferrer">
									<img src={follow_icon_1} alt="Insta" />
								</a>
							</div>
							<div className="contact_icon">
								<a href="https://www.facebook.com/gdsciiita" target="_blank" rel="noopener noreferrer">
									<img src={follow_icon_2} alt="Facebook" />
								</a>
							</div>
							<div className="contact_icon">
								<a
									href="https://medium.com/developer-student-clubs-iiit-allahabad"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={follow_icon_3} alt="Medium" />
								</a>
							</div>
							<div className="contact_icon">
								<a
									href="https://www.youtube.com/channel/UCvItI3Qr_36kLB6zATcjj7Q/featured"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={follow_icon_4} alt="YouTube" />
								</a>
							</div>
							<div className="contact_icon">
								<a href="https://twitter.com/Gdsciiita" target="_blank" rel="noopener noreferrer">
									<img src={follow_icon_5} alt="Twitter" />
								</a>
							</div>
							<div className="contact_icon">
								<a
									href="https://www.linkedin.com/company/gdsciiita"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={follow_icon_6} alt="LinkedIn" />
								</a>
							</div>
							<div className="contact_icon">
								<a href="https://github.com/Elevate-Lab" target="_blank" rel="noopener noreferrer">
									<img src={follow_icon_7} alt="Github" />
								</a>
							</div>
							<div className="contact_icon">
								<a href="https://discord.com/invite/gv9zzDcQUH" target="_blank" rel="noopener noreferrer">
									<img src={follow_icon_8} alt="Discord" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<p className="footer_divider"></p>

			<div className="footer_bot">
				<p className="Copyright_line">&copy;2022 GDSC IIITA</p>
				<div className="footer_LogIn">
					<div className="Login_Cont">
						<div className="LogIn_icon_cont">
							<img src={login_icon} alt="LogIn" />
						</div>
						<button className="logIn_status">{admin === true ? "Log Out" : "Log In"}</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
