const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const { requireSignin } = require('../common-middleware');

//get all events
router.get("/",async(req,res)=>{
    try {
        const blogs = await Blog.find({})
        res.json(blogs)
    } catch (error) {
        console.log(error);
    }
});

//post a blog

router.post("/",async (req,res)=>{
    const {title,author,image,description,bloglink} = req.body;
    if(!title || !author || !image || !description || !bloglink){
       return console.log("PLease Fill all the Area");
    }
  try {
      const blog =  new Blog({title,author,image,description,bloglink})
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
    const {title,author,image,description,bloglink} = req.body;
    const newBlog = {}
    if(title){newBlog.title=title}
    if(description){newBlog.description=description}
    if(image){newBlog.image=image}
    if(bloglink){newBlog.bloglink=bloglink}
    if(author){newBlog.author=author}
 

    try {
    const blog = await Blog.findById(req.params.id)
    if(!blog){return res.status(401).res("Not Found")}
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set : newBlog},{new:true})
    res.json(updatedBlog)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
});

//delete a blog

router.delete("/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const blog = await Blog.findByIdAndDelete(id,req.body);
        // res.redirect("/blogs");
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;