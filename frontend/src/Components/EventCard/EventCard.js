import * as React from 'react';
import { useState,useContext } from 'react';
import './EventCard.css';
import { Button } from '@mui/material';
import { ReactComponent as LinkSVG } from '../../Assets/svg_link.svg';
import { Link } from 'react-router-dom';
import apiContext from '../../ContextApi/ApiContext';

// import Stack from "@mui/material/Stack";

function EventCard(props) {
    const {event} = props
    const context =useContext(apiContext)
    const {removeData,previousCardData} = context
    const [admin, setAdmin] = useState(true);
    return (
        <div className="container">
            <div className="card">
                <img
                    src={event.image}
                    alt="img"
                />
                <div className="event-info">
                    <h3>{event.name}</h3>

                    <p className="event-timing">{event.startDate} - {event.endDate}</p>
                    <p className="event-description">
                       {event.description}</p>
                    <p className="event-organizer">
                        Organized by <span>{event.organizer}</span>
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
                                <Link onClick={()=>previousCardData(event)} to="/Events/editEvent" style={{ color: 'green' }}>
                                        Edit
                                </Link>
                                <Button onClick={()=>removeData(event._id)}  style={{ color: 'red' }} disableElevation>
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
