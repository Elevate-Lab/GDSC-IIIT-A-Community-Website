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
//add a member page


  
  module.exports = router;