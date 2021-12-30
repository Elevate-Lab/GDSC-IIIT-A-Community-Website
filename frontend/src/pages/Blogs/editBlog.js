import React from 'react';
import { Typography } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CommonCSS/formStyle.css';

function EditBlog() {
    return (
    
        <div class="container" id="mainContainer">
            <h1 class="well" id="formHead">Edit Blog</h1>

            <form action="" method="">
                <div class="row">
                    <div class="col-sm-6 form-group">
                        <label>Blog Tilte</label>
                        <input type="text" name="" placeholder="Blog Title" class="form-control"></input>
                    </div>
                    <div class="col-sm-6 form-group">
                        <label>Author</label>
                        <input type="text" name="" placeholder="Author's Name" class="form-control"></input>
                    </div>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" name="" placeholder="Give a short Description about the blog..." rows="3" class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Image URL</label>
                    <input type="text" name="" placeholder="Related image to the blog.." class="form-control"></input>
                </div>
                <div class="form-group">
                    <label>Blog URL</label>
                    <input type="email" name="" placeholder="Provide link to the blog.." class="form-control"></input>
                </div>

                <input type="button" class="btn btn-info" value="Submit"></input>
            </form>
        </div>
    
    );
}

export default EditBlog;
