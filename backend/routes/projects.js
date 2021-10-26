var express         = require("express");
var router          = express.Router();
var Project         = require("../models/project");

//project new
router.get("/new", (req,res)=>{
    res.render("projects/new"); 
 });

//project create
router.post("/", (req, res) => {
    var projectname = req.body.projectname;
    var description = req.body.description;
    var image = req.body.image;
    var projectLink = req.body.projectLink;
    
    var newProject = {
        projectname: projectname,
        description: description,
        image: image,
        projectLink: projectLink
    };

    Project.create(newProject, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("projects");
        }
    });
});

//project edit route
router.get("/:project_id/edit", function(req,res){
    Project.findById(req.params.project_id, (err, foundProject)=>{
        if(err){
            res.redirect("back");
        }else{
            res.render("projects/edit", {project_id: req.params.project_id});
        }
    });
});

// project update
router.put("/:project_id", function(req,res){
    Project.findByIdAndUpdate(req.params.project_id, req.body.project,(err, updatedProject)=>{
        if(err){
            res.redirect("back");    
        }else{
            res.redirect("projects");
        }
    });
});

//DESTROY ROUTE
router.delete("/:project_id", function(req,res){
    //find by id and then remove
    Project.findByIdAndRemove(req.params.project_id, function(err){
        if(err){
            res.redirect("back");
        }else{
            //req.flash("success", "Project deleted");
            res.redirect("projects");
        }
    });
});

module.exports = router;