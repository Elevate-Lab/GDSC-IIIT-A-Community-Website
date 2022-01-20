var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    projectname: String,
    description: String,
    image: String,
    projectLink: String,
    githubLink : String
});

module.exports = mongoose.model("Project", ProjectSchema);