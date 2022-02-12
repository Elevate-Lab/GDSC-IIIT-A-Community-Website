const express = require('express');
const router = express.Router();
const Team = require('../models/team');
const PastTeam = require('../models/pastTeam')

//get all team cards
router.get('/',async (req,res)=>{
    try {
        const teams = await Team.find({});
        const pastTeams = await PastTeam.find({})
        // res.render("teams/index",{teams});
        res.json(teams)
    } catch (error) {
        console.log(error)
    }
});

// make a new member card
router.post('/',async(req,res)=>{
    const {name,image,designation,linkedinLink,githubLink,facebookLink} = req.body;
    try {
        const team = new Team({name,image,designation,linkedinLink,githubLink,facebookLink});
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
    const {name,image,designation,facebookLink,githubLink,linkedinLink} = req.body;
    const newMember = {}
    if(name){newMember.name=name}
    if(designation){newMember.designation=designation}
    if(image){newMember.image=image}
    if(facebookLink){newMember.facebookLink=facebookLink}
    if(githubLink){newMember.githubLink=githubLink}
    if(linkedinLink){newMember.linkedinLink=linkedinLink}
 

    try {
    const team = await Team.findById(req.params.id)
    if(!team){return res.status(401).res("Not Found")}
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id,{$set : newMember},{new:true})
    res.json(updatedTeam)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
});
  
  //delete a member
  
  router.delete("/:id",async (req,res)=>{
      try {
          const {id} = req.params;
          const team = await Team.findByIdAndDelete(id,req.body);
        //   res.redirect("/teams");
      } catch (error) {
          console.log(error)
      }
  })
  
  module.exports = router;