import React,{useState,useContext} from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';
import { useHistory } from 'react-router';
import apiContext from '../../ContextApi/ApiContext';
function NewProject() {
    const history = useHistory()
    const context = useContext(apiContext)
    const {addACard,addProjectCard} = context
    const [noteValue, setNoteValue] = useState({projectname:"",description:"",image:"",projectLink:"",githubLink:""})
    const handleClick = (e)=>{
        e.preventDefault()
        addProjectCard({...noteValue}) 
        setNoteValue({projectname:"",description:"",image:"",projectLink:"",githubLink:""})
        history.push("/Projects")
    }
    const onChange = (e)=>{
        setNoteValue({...noteValue,[e.target.name]:e.target.value})
    }
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Project</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Project Name</label>
                        <input type="text" name="projectname" placeholder="Project Name" class="form-control" value={noteValue.projectname} onChange={onChange}></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Image URL</label>
                        <input type="text" name="image" placeholder="Related project image" class="form-control" value={noteValue.image} onChange={onChange}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Give a short Description about the project..." rows="3" class="form-control" value={noteValue.description} onChange={onChange}></input>
                </div>
                <div class="form-group">
                    <label>Project URL</label>
                    <input type="text" name="projectLink" placeholder="Link to the Github Repo or Deployed url" class="form-control" value={noteValue.projectLink} onChange={onChange}></input>
                </div>
                <div class="form-group">
                    <label>Github URL</label>
                    <input type="text" name="githubLink" placeholder="Link to the Github Repo or Deployed url" class="form-control" value={noteValue.githubLink} onChange={onChange}></input>
                </div>

                <button type="button" class="btn btn-info" onClick={handleClick} >Submit</button>
            </form>
        </div>
    );
}

export default NewProject;
