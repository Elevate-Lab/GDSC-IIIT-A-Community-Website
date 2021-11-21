var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    projectname: String,
    description: String,
    image: String,
    projectLink: String
});

module.exports = mongoose.model("Project", ProjectSchema);