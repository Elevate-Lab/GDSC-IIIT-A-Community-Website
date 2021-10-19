const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

//get all events
router.get("/",async(req,res)=>{
    try {
        const blogs = await Blog.find({})
        res.render("blogs/index",{ blogs })
    } catch (error) {
        console.log(error);
    }
});

//post a blog

router.post("/",async (req,res)=>{
    const {title,author,image,description,bloglink} = req.body;
    if(!title || !author || !image || !description || !bloglink){
        console.log("PLease Fill all the Area");
    }
  try {
      const blog =  new Blog({tile,author,image,description,bloglink})
      await blog.save();
  } catch (error) {
      console.log(error)
  }
});

//create a new blog page

router.get("/new",(req,res)=>{
  try {
    res.render("blogs/new")
  } catch (error) {
      console.log(error);
  }
})

//edit a blog page

router.get("/:id/edit",async (req,res)=>{
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id)
    res.render("blogs/edit",{blog})
  } catch (error) {
      console.log(error)
  }
})

//update a blog

router.put("/:id",async (req,res)=>{
    try {
        const {id} =req.params;
        const blog = await Blog.findByIdAndUpdate(id,{...req.body.blog})
        res.redirect("/blogs/"+blog._id)
    } catch (error) {
        console.log(error)
    }
});

//delete a blog

router.delete("/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndDelete(id,req.body);
        res.redirect("/blogs");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;