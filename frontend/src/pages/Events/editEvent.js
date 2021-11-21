import React from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';

function EditEvent() {
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">Edit Event</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Event Name</label>
                        <input type="text" name="" placeholder="Event Name" class="form-control"></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Organizer</label>
                        <input type="text" name="" placeholder="Event Orgainzer" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="" placeholder="Give a short Description about the event..." rows="3" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Event Image URL</label>
                    <input type="text" name="" placeholder="Related image of the event.." class="form-control"></input>
                </div>
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Start Date</label>
                        <input type="date" name="" placeholder="" class="form-control"></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>End Date</label>
                        <input type="date" name="" placeholder="" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Platform</label>
                    <input type="email" name="" placeholder="Event platform, ex: Youtube Live, Zoom meet, Google Cloud..." class="form-control"></input>
                </div>

                <div class="form-group">
                    <label>Event Link</label>
                    <input type="text" name="" placeholder="Link to the event..." class="form-control"></input>
                </div>
                <input type="button" class="btn btn-info" value="Submit"></input>
            </form>
        </div>
    
    );
}

export default EditEvent;
