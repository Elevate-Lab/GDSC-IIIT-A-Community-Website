import React, { useState } from "react";
import api from "../../api/baseApi";
// import {Typography} from '@material-ui/core'
import Headings from "../../Components/Page_headings";
import Send_icon from "../../Assets/Send_icon.svg";
import Contact_image from "../../Assets/Contact_image.png";
import "./Contact.css";
import CircularProgress from '@mui/material/CircularProgress';

function Contact() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleNameChange = event => {
		setName(event.target.value);
	};
	const handleEmailChange = event => {
		setEmail(event.target.value);
	};
	const handleMessageChange = event => {
		setMessage(event.target.value);
	};

	const handleRequest = async e => {
		if (email && name && message !== "") {
			e.preventDefault();
			//setLoading(true)
			console.log(email);
			console.log(name);
			console.log(message);

			const body = {
				name: name,
				email: email,
				message: message,
			};
			console.log(body);
			setLoading(true)
			await api
				.post("/mail", body, {
					header: { "Content-type": "application/json" },
				})
				.then(res => {
					setLoading(false)
					alert("Message sent successfully! We'll get back to you very soon!");
					//setLoading(false)
					setEmail("");
					setMessage("");
					setName("");

					//console.log(res);
					//window.location.reload();
				})
				.catch(err => {
					setLoading(false)
					alert("There was an error while sending this message, please mail us at gdsc@iiita.ac.in!");
					console.log("error: ");
					console.log(err);
					//setLoading(false)
				});
		} else {
			alert("Fill all the fields..");
		}
	};

	return (
		<section
			className="Contact_section"
			style={{
				width: "100%",
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				gap: "6.22vh",
				background: "#ffffff",
			}}
		>
			<Headings
				LargeHeading="Contact Us"
				SmallHeading="Have any queries? We'd love to hear from you!"
				Text=""
				PageIllustration={""}
				style={{ paddingBottom: 0 }}
			/>
			{/* onSubmit={(e)=>handleRequest(e)} method="POST" id="name" name="name" */}
			<div className="Contact_form_n_image" style={{ marginTop: "-10vh" }}>
				<div className="form_container">
					<form className="contact_form">
						<div className="form_name_inp">
							<input
								type="text"
								className="Name_input"
								onChange={event => {
									handleNameChange(event);
								}}
								value={name}
								id="name"
								name="name"
							/>
							<span className={`${name === "" ? "Name_inp" : "name_filled"}`}></span>
						</div>
						<div className="form_email_inp">
							<input
								type="text"
								className="Email_input"
								onChange={event => {
									handleEmailChange(event);
								}}
								value={email}
								id="email"
								name="email"
							/>
							<span className={`${email === "" ? "Email_inp" : "email_filled"}`}></span>
						</div>
						<div className="form_message_inp">
							<textarea
								type="text"
								className="Message_input"
								onChange={event => {
									handleMessageChange(event);
								}}
								value={message}
								id="message"
								name="message"
							/>
							<span className={`${message === "" ? "Message_inp" : "message_filled"}`}></span>
						</div>
						
						<button type="submit" className="Send_btn" onClick={event => handleRequest(event)}>
							{loading ? (<CircularProgress size="2rem" sx={{color:'white',}} />) : (
								<>
									Send
									<img src={Send_icon} alt="Send" className="sendIcon" />
								</>
								
								)}
							
							
							
						</button>
					</form>
				</div>
				<div className="Contact_image">
					<img src={Contact_image} alt="Contact_Image" />
				</div>
			</div>
		</section>
	);
}

export default Contact;
