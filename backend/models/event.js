var mongoose = require("mongoose");

var eventSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String,
   organizer: String,
   startDate: Date,
   endDate: Date,
   platform: String,
   eventLink: String
});

module.exports = mongoose.model("Event", eventSchema);