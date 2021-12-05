import * as React from 'react';
import { useState } from 'react';
import './EventCard.css';
import { Button } from '@mui/material';
import { ReactComponent as LinkSVG } from '../../Assets/svg_link.svg';
import { Link } from 'react-router-dom';

// import Stack from "@mui/material/Stack";

function EventCard() {
    const [admin, setAdmin] = useState(false);
    return (
        <div className="container">
            <div className="card">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sunset_2007-1.jpg/1200px-Sunset_2007-1.jpg"
                    alt="img"
                />
                <div className="event-info">
                    <h3>Event Heading</h3>

                    <p className="event-timing">99th December 2099 - 99th December 2099</p>
                    <p className="event-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat nobis nam quaerat
                        soluta ipsam repudiandae cumque. Impedit quisquam quidem laboriosam, quam sunt
                        architecto numquam placeat iusto, obcaecati, vel fugit blanditiis?
                    </p>
                    <p className="event-organizer">
                        Organized by <span>DSC IIIT A</span>
                    </p>
                    <div className="link_buttons">
                        <Link to="/Events/EventDetails">
                            Know More <LinkSVG style={{ width: '21px', paddingLeft: '10px' }} />
                        </Link>
                        {/* <Button href="#">
                            C2A <LinkSVG style={{ width: '15px', paddingLeft: '10px' }} />
                        </Button> */}
                    </div>
                    <div className="edit_buttons">
                        {admin && (
                            <div className=" buttons-admin">
                                <Button href="./Events/editEvent" style={{ color: 'green' }}>
                                        Edit
                                </Button>
                                <Button href="#" style={{ color: 'red' }} disableElevation>
                                    Delete
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EventCard;
