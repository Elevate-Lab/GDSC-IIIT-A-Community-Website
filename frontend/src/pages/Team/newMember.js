import React ,{useState,useContext}from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';
import apiContext from '../../ContextApi/ApiContext';
import { useHistory } from 'react-router';
function NewMember() {
    const history = useHistory()
    const context = useContext(apiContext)
    const {addACard,data,addTeamCard} = context
    const [noteValue, setNoteValue] = useState({name:"",image:"",designation:"",linkedinLink:"",githubLink:"",facebookLink:""})
    const handleClick = (e)=>{
         e.preventDefault()
        addTeamCard({...noteValue}) 
        setNoteValue({name:"",image:"",designation:"",linkedinLink:"",githubLink:"",facebookLink:""})
        history.push("/Team")
    }
    const onChange = (e)=>{
        setNoteValue({...noteValue,[e.target.name]:e.target.value})
    }
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Team Member</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Team Member Name</label>
                        <input type="text" name="name" placeholder="Member Name" class="form-control"  onChange={onChange} value={noteValue.name}></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Image URL</label>
                        <input type="text" name="image" placeholder="Profile image" class="form-control" onChange={onChange} value={noteValue.image}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Designation</label>
                    <input type="text" name="designation" placeholder="Type the exact Designation as like the fields on Team Page" rows="3" class="form-control" onChange={onChange} value={noteValue.designation}></input>
                </div>
                <div class="form-group">
                    <label>Linkedin URL</label>
                    <input type="text" name="linkedinLink" placeholder="Link to profile" class="form-control" onChange={onChange} value={noteValue.linkedinLink}></input>
                </div>
                <div class="form-group">
                    <label>Github URL</label>
                    <input type="text" name="githubLink" placeholder="Link to profile" class="form-control" onChange={onChange} value={noteValue.githubLink}></input>
                </div>
                <div class="form-group">
                    <label>Facebook URL</label>
                    <input type="text" name="facebookLink" placeholder="Link to profile" class="form-control" onChange={onChange} value={noteValue.facebookLink}></input>
                </div>

                <button type="button" class="btn btn-info" onClick={handleClick} >Submit</button>
            </form>
        </div>
    
    );
}

export default NewMember;
