import React from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';

function newEvent() {
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Project</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Project Name</label>
                        <input type="text" name="" placeholder="Project Name" class="form-control"></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Image URL</label>
                        <input type="text" name="" placeholder="Related project image" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="" placeholder="Give a short Description about the project..." rows="3" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Project URL</label>
                    <input type="text" name="" placeholder="Link to the Github Repo or Deployed url" class="form-control"></input>
                </div>

                <input type="button" class="btn btn-info" value="Submit"></input>
            </form>
        </div>
    
    );
}

export default newEvent;
