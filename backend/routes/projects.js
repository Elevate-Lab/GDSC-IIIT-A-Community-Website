var express         = require("express");
var router          = express.Router();
var Project         = require("../models/project");



//show project
router.get("/",async (req,res)=>{
    try {
        const projects = await Project.find({})
        res.json(projects)
    } catch (error) {
        console.log(error);
    }
})
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
    var githubLink = req.body.githubLink;
    var newProject = {
        projectname: projectname,
        description: description,
        image: image,
        projectLink: projectLink,
        githubLink : githubLink
    };

    Project.create(newProject, (err, newlyCreated) => {
        if (err) {
            console.log(err);
        } else {
            res.json(newProject)
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
router.put("/:id",async (req,res)=>{
    const {projectname,description,image,projectLink,githubLink} = req.body;
    const newProject = {}
    if(projectname){newProject.projectname=projectname}
    if(description){newProject.description=description}
    if(image){newProject.image=image}
    if(projectLink){newProject.projectLink=projectLink}
    if(githubLink){newProject.githubLink=githubLink}

    try {
    const project = await Project.findById(req.params.id)
    if(!project){return res.status(401).res("Not Found")}
    const updatedProject = await Project.findByIdAndUpdate(req.params.id,{$set : newProject},{new:true})
    res.json(updatedProject)
    } catch (error) {
        console.log(error.message)
        res.status(500).json("Internal server Error")
    }
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