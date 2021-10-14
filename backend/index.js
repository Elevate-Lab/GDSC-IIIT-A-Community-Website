import express from 'express';
import bodyParser from 'body-parser';
import  mongoose from 'mongoose';

const app = express();

app.use(bodyParser.json({limit: "30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))



const CONNECTION_URL = "mongodb+srv://GDSCWeb:gdscop123@cluster0.mxecq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Listening on ${PORT}`)))
.catch((error)=>console.log(error.message));
