const express       =require('express'),
      bodyParser    = require('body-parser'),
      mongoose      = require('mongoose'),     
      Event        = require("./models/event"),
      Blog         = require('./models/blog'),
      Team          = require('./models/team'),
      project       =require('./models/project'),
      nodemailer    =require('nodemailer'),
      cors          =require('cors')

const eventRoutes = require("./routes/events");
const blogRoutes = require('./routes/blogs')
const teamRoutes = require('./routes/teams');
const projectRoutes = require('./routes/projects');

const app = express();
require('dotenv').config();

app.use(express.json())
app.use(cors());
app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

const url = process.env.MONGODB_URI || 5000;

/*mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to database.");
});*/

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true})   
.then(() => console.log("Connected to database."))
.catch(err => console.log(err));


app.use("/events",eventRoutes);
app.use("/blogs",blogRoutes);
app.use("/teams",teamRoutes);
app.use("/projects",projectRoutes);

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    post: 587,
    security: false,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASS
    }
})

app.post('/mail',(req,res,next)=>{
    var message=req.body.message
    var name=req.body.name
    var senderEmail=req.body.email

    var mailOptions={
        from: name,
        to: 'gdsc@iiita.ac.in',
        subject: "Message from GDSC IIIT A Community Website's Contact Section",
        html: `Name: ${name} ${senderEmail} <br> Message: ${message}`
    }

    transporter.sendMail(mailOptions,(err,data)=>{
        if(err){
            res.json({
                status: err
            })
            console.log(err)
        }else{
            res.json({
                status: "success"
            })
            console.log("email sent "+data.response)
        }
    })
})


transporter.verify(function(err,success){
    if(err){
        console.log(err);
    }else{
        console.log("server is ready to send emails")
    }

});

const port = process.env.PORT || 5000;

app.listen(port, process.env.IP, () => {
    console.log("showing on port ",port);
});



