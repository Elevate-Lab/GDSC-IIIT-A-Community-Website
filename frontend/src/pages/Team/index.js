import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Headings from "../../Components/Page_headings/index";
import team_illustration from "../../Assets/Teams_page_illustration.svg";
import CoreTeam from "./Teams_field/CoreTeam";
import WebTeam from "./Teams_field/WebTeam";
import DesignTeam from "./Teams_field/DesignTeam";
import MLTeam from "./Teams_field/MLTeam";
import BlockchainTeam from "./Teams_field/Blockchain";
import AppTeam from "./Teams_field/AppTeam";
import ManagementTeam from "./Teams_field/ManagementTeam";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tempImg from "../../Assets/Images/img_teams.jpg";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./carousel.css";
import TeamSpecialCard from "../../Components/TeamSpecialCard/TeamSpecialCard";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import "./Team.css";
import PastTeam from "./Teams_field/PastTeam";

const slider_img = [tempImg, tempImg];

const Fields = ["Core Team", "Web", "Design", "ML", "Blockchain", "App", "Management"];
const FieldPages = [
	<CoreTeam />,
	<WebTeam />,
	<DesignTeam />,
	<MLTeam />,
	<BlockchainTeam />,
	<AppTeam />,
	<ManagementTeam />,
];

function Team() {
	const [showField, setshowField] = useState("CoreTeam");
	const [showFieldIdx, setshowFieldIdx] = useState(0);
	const [admin, setAdmin] = useState(false);
	useEffect(() => {}, [showField]);

	const UpdateField = e => {
		let field = e.target.innerText;
		setshowField(field.replace(/ /g, ""));
		setshowFieldIdx(Fields.indexOf(field));
	};
	const SamplePrevArrow = props => {
		const { className, onClick } = props;

		return (
			<div className={className} onClick={onClick}>
				<ChevronLeftIcon
					style={{
						color: "#fff",
						fontSize: "2rem",
					}}
				/>
			</div>
		);
	};

	const SampleNextArrow = props => {
		const { className, onClick } = props;
		return (
			<div className={className} onClick={onClick}>
				<ChevronRightIcon
					style={{
						color: "#fff",
						fontSize: "2rem",
					}}
				/>
			</div>
		);
	};
	const settings = {
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};
	return (
		<div>
			{/* <div>
                <Slider autoplay {...settings}>
                    {
                        slider_img.map((item, index) => (
                            <div key={index} style={{
                                textAlign: 'center'
                            }}>
                                <img style={{
                                    width: '100%',
                                    zINdex: -1
                                }} src={item} alt="img" />
                            </div>
                        ))
                    }
                </Slider>
                    <Swiper navigation={true} className="mySwiper">
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div> */}
			<section className="Team_section">
				<Headings
					LargeHeading="Our Team"
					SmallHeading="The ones, who are making it happen..."
					Text="Learning goes hand-in-hand with building new and cool stuff.
                     With our incredible team we aim to solve numerous problems in day-to-day life, and explore new heights in Technology!"
					PageIllustration={team_illustration}
				/>
				{admin && (
					<Fab style={{ alignSelf: "flex-end", marginRight: "7vw" }} color="primary" aria-label="add">
						<Link
							to="../team/new_member"
							style={{
								color: "white",
								height: "100%",
								width: "100%",
								margin: "0",
								display: "grid",
								placeItems: "center",
							}}
						>
							<AddIcon />
						</Link>
					</Fab>
				)}
				<div>
					<TeamSpecialCard />
				</div>
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
			

				<div className="Member_cards_container">{FieldPages[showFieldIdx]}</div>
				<div className="Past-Member">
				<h1>Past Members</h1>
					<PastTeam />
				</div>
			</section>
		</div>
	);
}

export default Team;
