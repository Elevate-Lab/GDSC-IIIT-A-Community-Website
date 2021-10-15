const express=require('express'),
      bodyParser= require('body-parser');
      mongoose= require('mongoose');


const app = express();
require('dotenv').config();

app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))


const url = process.env.MONGODB_URI || 3000;

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}, () => {
    console.log("Connected to database.");
});

const port = process.env.PORT || 5000;

app.listen(port, process.env.IP, () => {
    console.log("showing on port 3000.");
});

