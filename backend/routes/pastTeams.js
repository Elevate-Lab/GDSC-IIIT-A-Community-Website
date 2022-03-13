const express = require('express');
const router = express.Router();
const PastTeam = require('../models/pastTeam')

//get all team cards
router.get('/',async (req,res)=>{
    try {

        const pastTeams = await PastTeam.find({})
        // res.render("teams/index",{teams});
        res.json(pastTeams)
    } catch (error) {
        console.log(error)
    }
});

// make a new member card
router.post('/',async(req,res)=>{
    const {name,image,designation,duration,linkedinLink,githubLink,facebookLink} = req.body;
    try {
        const pastTeam = new PastTeam({name,image,designation,duration,linkedinLink,githubLink,facebookLink});
        await pastTeam.save();
        res.json(pastTeam)
    } catch (error) {
        console.log(error)
    }
})


router.delete("/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const pastTeam = await PastTeam.findByIdAndDelete(id,req.body);
      //   res.redirect("/teams");
    } catch (error) {
        console.log(error)
    }
})

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
    const team = await PastTeam.findById(req.params.id)
    if(!team){return res.status(401).res("Not Found")}
    const updatedTeam = await PastTeam.findByIdAndUpdate(req.params.id,{$set : newMember},{new:true})
    res.json(updatedTeam)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
});
  
  module.exports = router;