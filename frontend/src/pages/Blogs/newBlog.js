import React,{useState,useContext} from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';
import apiContext from '../../ContextApi/ApiContext';
import { useHistory } from 'react-router';

function NewBlog() {
    const history = useHistory()
    const context = useContext(apiContext)
    const {addACard,addBlogCard} = context
    const [noteValue, setNoteValue] = useState({title:"",author:"",description:"",image:"",bloglink:""})
    const handleClick = (e)=>{
        e.preventDefault()
        addBlogCard({...noteValue}) 
        setNoteValue({title:"",author:"",description:"",image:"",bloglink:""})
        history.push("/Blogs")
    }
    const onChange = (e)=>{
        setNoteValue({...noteValue,[e.target.name]:e.target.value})
    }
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">New Blog</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Blog Tilte</label>
                        <input type="text" name="title" value={noteValue.title} placeholder="Blog Title" class="form-control"  onChange={onChange}></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Author</label>
                        <input type="text" name="author" value={noteValue.author} placeholder="Author's Name" class="form-control" onChange={onChange}></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="description" value={noteValue.description} placeholder="Give a short Description about the blog..." rows="3" class="form-control" onChange={onChange}></input>
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" name="image" value={noteValue.image} placeholder="Related image to the blog.." class="form-control" onChange={onChange}></input>
                </div>
                <div class="form-group">
                    <label>Blog URL</label>
                    <input type="email" name="bloglink" value={noteValue.bloglink} placeholder="Provide link to the blog.." class="form-control" onChange={onChange}></input>
                </div>

                <button type="button" class="btn btn-info" onClick={handleClick} >Submit</button>
            </form>
        </div>
    
    );
}

export default NewBlog;
