import React,{useState,useContext} from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';
import apiContext from '../../ContextApi/ApiContext';
import { useHistory } from 'react-router';

function NewEvent() {
    const history = useHistory()
    const context = useContext(apiContext)
    const {addACard,addEventCard} = context
    const [noteValue, setNoteValue] = useState({name:"",organizer:"",description:"",image:"",eventLink:"",startDate:"",endDate:"",platform:""})
    const handleClick = (e)=>{
        e.preventDefault()
        addEventCard({...noteValue}) 
        setNoteValue({name:"",organizer:"",description:"",image:"",eventLink:"",startDate:"",endDate:"",platform:""})
        history.push("/Events")
    }
    const onChange = (e)=>{
        setNoteValue({...noteValue,[e.target.name]:e.target.value})
    }
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Event</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Event Name</label>
                        <input type="text" name="name" placeholder="Event Name" class="form-control" onChange={onChange} value={noteValue.name}></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Organizer</label>
                        <input type="text" name="organizer" placeholder="Event Orgainzer" class="form-control" onChange={onChange} value={noteValue.organizer}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Give a short Description about the event..." rows="3" class="form-control" onChange={onChange} value={noteValue.description}></input>
                </div>
                <div class="form-group">
                    <label>Event Image URL</label>
                    <input type="text" name="image" placeholder="Related image of the event.." class="form-control" onChange={onChange} value={noteValue.image}></input>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Start Date</label>
                        <input type="date" name="startDate" placeholder="" class="form-control" onChange={onChange} value={noteValue.startDate}></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>End Date</label>
                        <input type="date" name="endDate" placeholder="" class="form-control" onChange={onChange} value={noteValue.endDate}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Platform</label>
                    <input type="email" name="platform" placeholder="Event platform, ex: Youtube Live, Zoom meet, Google Cloud..." class="form-control" onChange={onChange} value={noteValue.platform}></input>
                </div>

                <div class="form-group">
                    <label>Event Link</label>
                    <input type="text" name="eventLink" placeholder="Link to the event..." class="form-control" onChange={onChange} value={noteValue.eventLink}></input>
                </div>
                <input onClick={handleClick} type="button" class="btn btn-info" value="Submit"></input>
            </form>
        </div>
    
    );
}

export default NewEvent;
