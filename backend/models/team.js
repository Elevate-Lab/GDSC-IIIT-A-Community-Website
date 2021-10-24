const mongoose = require('mongoose');


const teamSchema =new mongoose.Schema({
    name : String,
    image : String,
    designation : String,
    profilelink : String
})

module.exports = mongoose.model("Team",teamSchema);