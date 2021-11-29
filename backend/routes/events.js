var express      = require("express");
var router       = express.Router();
var Event        = require("../models/event");

// INDEX-show all events
router.get("/",async (req,res)=>{
    try {
        const event = await Event.find({})
        res.json(event)
    } catch (error) {
        console.log(error);
    }
})

//create - add new events to DB
router.post("/", function(req, res){
  // get data from form and add to events array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var organizer =req.body.organizer;
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  var platform = req.body.platform;
  var eventLink = req.body.eventLink;

    var newEvent = {name: name, image: image, description: desc, organizer: organizer,
         startDate: startDate, endDate: endDate,platform: platform, eventLink: eventLink};

    // Create a new event and save to DB
    Event.create(newEvent, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to events page
            res.json(newlyCreated)
            // res.redirect("/events");
        }
    });
});

// new- show form to create new event
router.get("/new", function(req,res){
   res.render("events/new"); 
});

//SHOWS more info on its event
router.get("/:id", function(req,res){
    //find the event with provided ID
    Event.findById(req.params.id, function(err, foundEvent){
       if(err){
           console.log(err);
       } else{
           console.log(foundEvent);
           //render show template with that event
           res.render("events/show", {event: foundEvent});
       }
    });
});


//EDIT EVENT ROUTE
router.get("/:id/edit", function(req, res) {
    Event.findById(req.params.id, function(err, foundEvent){
        if(err){
            console.log(err);
        }
       res.render("events/edit", {event: foundEvent}); 
    });
    
});

// UPDATE EVENT ROUTE
router.put("/:id",  function(req, res){
    Event.findByIdAndUpdate(req.params.id, req.body, function(err, event){
        if(err){
            //req.flash("error", err.message);
            // res.redirect("back");
            console.log(err)
        } else {
            //req.flash("success","Successfully Updated!");
            // res.redirect("/events/" + event._id);
            res.json(req.body)
        }
    });
  });

//DESTROY EVENT ROUTE
router.delete("/:id", function(req, res) {
    Event.findByIdAndRemove(req.params.id, function(err){
       if(err){
           console.log(err);;
       } 
    });
});


module.exports = router;