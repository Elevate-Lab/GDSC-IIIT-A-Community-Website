const mongoose = require('mongoose');


const teamSchema =new mongoose.Schema({
    name : String,
    image : String,
    designation : String,
    linkedinLink : String,
    facebookLink : String,
    githubLink : String
})

module.exports = mongoose.model("Team",teamSchema);