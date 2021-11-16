import React from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';

function newEvent() {
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Team Member</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Team Member Name</label>
                        <input type="text" name="" placeholder="Member Name" class="form-control"></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Image URL</label>
                        <input type="text" name="" placeholder="Profile image" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Designation</label>
                    <input type="text" name="" placeholder="Type the exact Designation as like the fields on Team Page" rows="3" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Profile URL</label>
                    <input type="text" name="" placeholder="Link to profile" class="form-control"></input>
                </div>

                <input type="button" class="btn btn-info" value="Submit"></input>
            </form>
        </div>
    
    );
}

export default newEvent;
