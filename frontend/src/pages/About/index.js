import React from "react";
// import {Typography} from '@material-ui/core'
import { Link } from "react-router-dom";
import About_DSC_Image from "../../Assets/About_DSC_Image.png";
import About_DSC_IIITA_Image from "../../Assets/About_DSC_IIITA_Image.png";
import Headings from "../../Components/Page_headings";
import KnowMore_icon from "../../Assets/external-link.svg";
import "./About.css";
import what_we_do_card_img_1 from "../../Assets/What_we_do_Projects.svg";
import what_we_do_card_img_2 from "../../Assets/What_we_do_Seminars.svg";
import what_we_do_card_img_3 from "../../Assets/What_we_do_Hackathons.svg";
import what_we_do_card_img_4 from "../../Assets/What_we_do_StudyJams.svg";
import join_the_convo_img_1 from "../../Assets/Join_youtube.png";
import join_the_convo_img_2 from "../../Assets/Join_discord.png";
import aboutdsc from "../../Assets/Images/dsc2.png";
import dsciiita from "../../Assets/Images/iiita.jpg";

function About() {
	return (
		<section
			className="About_section"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				paddingTop: "10.88vh",
				paddingBottom: "6vh",
				background: "#ffffff",
			}}
		>
			<Headings
				LargeHeading="About The Community"
				SmallHeading="What we do and How we are so good at it... !"
				Text=""
				PageIllustration={""}
			/>

			<div className="About_DSC About">
				<img src={aboutdsc} alt="aboutdsc.jpg" style={{ boxShadow: "0px 0px 0px #ffe" }} />

				<div>
					<p className="Abt_Heading">What's GDSC?</p>
					<p className="Abt_Content">
						Google collaborates with university students who are passionate about growing developer
						communities. GDSC is an Organisation for university students who want to bring about a change
						through technology. We are focused upon building technical and non-technical skills, which would
						help students to build a better community.<br></br>
						<br></br># Lets Learn, Grow and Innovate together.
					</p>
					<button>
						<a href="https://developers.google.com/community/gdsc" target="_blank">
							<img src={KnowMore_icon} alt="Know More" />
							Know More
						</a>
					</button>
				</div>
			</div>
			<div className="About About_DSC_IIITA">
				<img src={dsciiita} alt="dsciiita.jpg" target="_blank" />
				<div>
					<p className="Abt_Heading">About GDSC IIITA</p>
					<p className="Abt_Content">
						GDSC's primary aim lies in empowering students with development skills and other technical
						abilities for growth and advancement. We believe in innovation and evolution. For students to grow
						their skills to tackle problems and to bring about change. <br></br>
						<br></br>
						The club is intended as a space for students to try out new ideas and collaborate to solve mobile,
						web development problems and as well as discover new heights in AI, ML, Designing and much more.
					</p>
					<button>
						<Link to="/Team" className="Abt_btn_txt">
							Meet the Team
						</Link>
					</button>
				</div>
			</div>

			<div className="What_we_do">
				<p className="What_we_do_heading">What GDSC IIITA does?</p>
				<div className="What_we_do_cards">
					<div className="What_we_do_card1">
						<div className="What_we_do_card_img">
							<img src={what_we_do_card_img_1} alt="Projects" />
						</div>
						<div className="What_we_do_card_text">
							<p className="What_we_do_card_head">Projects</p>
							<p className="What_we_do_card_desc">
								Projects with a social impact that help a large part of society.
							</p>
						</div>
					</div>
					<div className="What_we_do_card2">
						<div className="What_we_do_card_img">
							<img src={what_we_do_card_img_2} alt="Seminars" />
						</div>
						<div className="What_we_do_card_text">
							<p className="What_we_do_card_head">Seminars</p>
							<p className="What_we_do_card_desc">Get updated with the latest Events and Hackathons.</p>
						</div>
					</div>
					<div className="What_we_do_card3">
						<div className="What_we_do_card_img">
							<img src={what_we_do_card_img_3} alt="Hackathons" />
						</div>
						<div className="What_we_do_card_text">
							<p className="What_we_do_card_head">Hackathons</p>
							<p className="What_we_do_card_desc">Dream. Explore. Wonder. Build it Together.</p>
						</div>
					</div>
					<div className="What_we_do_card4">
						<div className="What_we_do_card_img">
							<img src={what_we_do_card_img_4} alt="Study Jams" />
						</div>
						<div className="What_we_do_card_text">
							<p className="What_we_do_card_head">Study Jams</p>
							<p className="What_we_do_card_desc">Hands-on experience with the community members.</p>
						</div>
					</div>
				</div>
			</div>

			<div className="Join_the_convo">
				<p className="Join_the_convo_heading" style={{ textAlign: "center" }}>
					Join the Conversation
				</p>
				<div className="Join_the_convo_cards">
					<div className="Join_youtube_card">
						<p>Subscribe our Youtube channel for regular updates regarding Events and Speaker Sessions... </p>
						<div className="Join_youtube" style={{ background: "#FF4444" }}>
							<img src={join_the_convo_img_1} alt="Youtube" />
							<a
								href="https://www.youtube.com/channel/UCvItI3Qr_36kLB6zATcjj7Q"
								target="_blank"
								rel="noopener noreferrer"
							>
								Subscribe Youtube
							</a>
						</div>
					</div>
					<div className="Join_discord_card">
						<p>Join our Discord Server to know more about the Activities, Sessions and other fun stuff...</p>
						<div className="Join_discord" style={{ background: "#586AEA" }}>
							<img src={join_the_convo_img_2} alt="Discord" />
							<a href="https://discord.com/invite/gv9zzDcQUH" target="_blank" rel="noopener noreferrer">
								Join Discord
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
