import React, { useState } from "react";
import Headings from "../../Components/Page_headings";
import "./Campaigns.css";
import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
// import Headings from "../../Components/Page_headings/index";
import team_illustration from "../../Assets/Teams_page_illustration.svg";
import campaignsHero from "../../Assets/Images/campaigns-hero.png";
import { Link } from "react-router-dom";

function Campaigns() {
	return (
		<section class="campaigns">
			<div
				class="heroCampaigns"
				// style={{
				// 	backgroundImage: `url(${campaignsHero})`,
				// 	backgroundPosition: "center",
				// 	backgroundSize: "cover",
				// 	backgroundRepeat: "no-repeat",
				// }}
			>
				<div className="Page_Headings">
					<div className="Section_Headings">
						<p className="large_heading">Android Study Jams</p>
						<p className="small_heading">The ones, who are making it happen...</p>
						<p className="Heading_text">
							Learning goes hand-in-hand with building new and cool stuff. With our incredible team we aim to
							solve numerous problems in day-to-day life, and explore new heights in Technology!
						</p>
						<button>
							<Link to="/" className="Abt_btn_txt">
								Meet the Team
							</Link>
						</button>
					</div>

					{/* <div className="Page_Image">
						<img src={team_illustration} alt="Android Study Jams" />
					</div> */}
				</div>
			</div>
			<div class="leaderboard">
				<h1>Hall of Fame</h1>
				<div class="wrap">
					<div class="search">
						<input id="myInput" onkeyup="search()" type="text" class="searchTerm" placeholder="Name" />
						<button type="submit" class="searchButton">
							<i class="fa fa-search" aria-hidden="true"></i>
						</button>
					</div>
				</div>

				<table id="tableRecord">
					<thead>
						<tr>
							<th>Name</th>
							<th>Coloumn 1</th>
							<th>Coloumn 2</th>
							<th>Profile</th>
						</tr>
					</thead>
					<tbody id="dataTable">
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
						<tr>
							<td>Mohsin</td>
							<td>Web</td>
							<td>GDSC</td>
							<td>
								<a className="profile" href="">
									Profile
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<ul class="pagination justify-content-center">
					<li class="page-item disabled">
						<a class="page-link">Previous</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">
							1
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">
							2
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">
							3
						</a>
					</li>
					<li class="page-item">
						<a class="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Campaigns;
