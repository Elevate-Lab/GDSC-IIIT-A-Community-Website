const express = require('express');
const router = express.Router();
const Team = require('../models/team');


//get all team cards
router.get('/',async (req,res)=>{
    try {
        const teams = await Team.find({});
        res.render("teams/index",{teams});
    } catch (error) {
        console.log(error)
    }
});

// make a new member card
router.post('/',async(req,res)=>{
    const {name,image,designation,profilelink} = req.body;
    if(!name || !image || !designation || !profilelink){
        return console.log("please fill all the area")
    }
    try {
        const team = new Team({name,image,designation,profilelink});
        await team.save();
    } catch (error) {
        console.log(error)
    }
})
//add a member page

router.get("/new",(req,res)=>{
    try {
      res.render("teams/new")
    } catch (error) {
        console.log(error);
    }
  })
  
  //edit a member page
  
  router.get("/:id/edit",async (req,res)=>{
    try {
      const { id } = req.params;
      const team = await Team.findById(id)
      res.render("teams/edit",{team})
    } catch (error) {
        console.log(error)
    }
  })
  
  //update a member info
  
  router.put("/:id",async (req,res)=>{
      try {
          const {id} =req.params;
          const team = await Team.findByIdAndUpdate(id,{...req.body.team})
          res.redirect("/teams/"+team._id)
      } catch (error) {
          console.log(error)
      }
  });
  
  //delete a blog
  
  router.delete("/:id",async (req,res)=>{
      try {
          const {id} = req.params;
          const team = await Team.findByIdAndDelete(id,req.body);
          res.redirect("/teams");
      } catch (error) {
          console.log(error)
      }
  })
  
  module.exports = router;