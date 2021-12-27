const mongoose = require("mongoose");

const EventDetailsSchema = new mongoose.Schema({
    event :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Event'
    },
   name: String,
   image: String,
   description: String,
   organizer: String,
   startDate: Date,
   endDate: Date,
});

module.exports = mongoose.model("EventDetails", EventDetailsSchema);