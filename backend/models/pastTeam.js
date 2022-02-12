const mongoose = require('mongoose');


const pastTeamSchema =new mongoose.Schema({
    name : String,
    image : String,
    duration : String,
    designation : String,
    linkedinLink : String,
    facebookLink : String,
    githubLink : String
})

module.exports = mongoose.model("PastTeam",pastTeamSchema);